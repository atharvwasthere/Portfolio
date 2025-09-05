import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, FileText, Clock,  } from "lucide-react";
import { projectsData } from "@/data/ProjectData";
import { TableOfContents } from "../components/projectsUI/table-of-contents";
import { TerminalBlock } from "../components/projectsUI/terminal-block";
import { ProjectNavigation } from "../components/projectsUI/project-navigation";
import { ScrollProgress } from "../components/projectsUI/scroll-progress";
import { useEffect, useState } from "react";
import { ComingSoon } from "@/components/projectsUI/comingsoon";
import Header from "@/components/Header";

function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug;
  const project = projectsData[slug];


  // push content below fixed <Header/>
  const [padTop, setPadTop] = useState(0);
  useEffect(() => {
    const el = document.querySelector("header.fixed");
    if (!el) return;
    const sync = () => setPadTop(el.getBoundingClientRect().height + 16);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    window.addEventListener("resize", sync, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-32 text-left">
           <ComingSoon/>
          <Link
            to="/"
            className="inline-flex items-center -mt-10 gap-2 text-sm text-muted-foreground hover:text-ring transition-colors"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const allText = [
    project.overview.tagline,
    project.motivation,
    project.architecture.description,
    ...project.features,
    ...project.challenges.map((c) => `${c.problem} ${c.debugging} ${c.solution}`),
    project.experience.approach,
    project.experience.futureEnhancements,
    ...project.experience.prosAndCons.pros,
    ...project.experience.prosAndCons.cons,
  ].join(" ");

  const readingTime = calculateReadingTime(allText);

  return (
    <section className="min-h-screen min-w-full bg-background text-foreground">
      <Header />
      <ScrollProgress />

      <div className="min-h-screen font-satoshi bg-background" style={{ paddingTop: padTop || 88 }}>
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_14rem] gap-8">
            {/* LEFT: article */}
            <article id="page-content" className="min-w-0 text-left">
              {/* Back Navigation */}
              <div className="mb-8">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ring transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to projects
                </Link>
              </div>

              {/* Header */}
              <header className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-4xl font-display font-bold text-foreground">{project.name}</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} />
                    <span>{readingTime} min read</span>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground mb-6">{project.summary}</p>

                {/* Project Links */}
                <div className="flex  font-satoshi flex-wrap gap-4 mb-8">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ring text-white hover:opacity-90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground hover:opacity-90 transition-colors border border-border"
                    >
                      <FileText size={16} />
                      Documentation
                    </a>
                  )}
                </div>

                {/* Quick Info */}
                <div className="rounded-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm border border-border bg-card">
                  <div>
                    <span className="font-medium text-muted-foreground">Timeline</span>
                    <p className="text-foreground">{project.overview.timeline}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Type</span>
                    <p className="text-foreground">{project.overview.type}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Status</span>
                    <p className="text-foreground">{project.overview.status}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Stack</span>
                    <p className="text-foreground">{project.overview.stack.join(", ")}</p>
                  </div>
                </div>
              </header>

              <div className="space-y-16">
                {/* Overview */}
                <section id="overview" className="scroll-mt-20">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6 border-b border-border pb-2">
                    Overview
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-foreground/80 leading-relaxed">
                      {project.overview.tagline}
                    </p>
                  </div>
                </section>

                {/* Motivation */}
                <section id="motivation" className="scroll-mt-20">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6 border-b border-border pb-2">
                    Motivation
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-foreground/80 leading-relaxed">{project.motivation}</p>
                  </div>
                </section>

                {/* Tech Stack */}
                <section id="tech-stack" className="scroll-mt-20">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6 border-b border-border pb-2">
                    Technology Stack
                  </h2>
                  <div className="prose max-w-none">
                    <div className="space-y-6">
                      {project.techStack.map((category, index) => (
                        <div key={index} className="space-y-3">
                          <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {category.items.map((item, i) => (
                              <span
                                key={i}
                                className="bg-muted text-foreground px-3 py-1 rounded-md text-sm border border-border"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Features */}
                <section id="features" className="scroll-mt-20">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6 border-b border-border pb-2">
                    Key Features
                  </h2>
                  <div className="prose max-w-none">
                    <ul className="space-y-2`">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 ">
                          <span className="text-ring ">→</span>
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Architecture */}
                <section id="architecture" className="scroll-mt-20">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6 border-b border-border pb-2">
                    Architecture
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {project.architecture.description}
                    </p>

                    <h3 id="project-structure" className="text-lg font-display font-semibold text-foreground mb-4">
                      Project Structure
                    </h3>
                    <TerminalBlock title="Directory Structure">
                      {project.architecture.structure}
                    </TerminalBlock>

                    {/* {project.architecture.codeSnippet && (
                      <>
                        <h3 id="core-implementation" className="text-lg font-display font-semibold text-foreground mb-4 mt-6">
                          Core Implementation
                        </h3>
                        <TerminalBlock title="Implementation">
                          {project.architecture.codeSnippet}
                        </TerminalBlock>
                      </>
                    )} */}
                  </div>
                </section>

                {/* Challenges */}
                <section id="challenges" className="scroll-mt-20">
                  <h2 className="text-2xl font-bold text-foreground font-display mb-6 border-b border-border pb-2">
                    Technical Challenges
                  </h2>
                  <div className="prose max-w-none">
                    <div className="space-y-6">
                      {project.challenges.map((challenge, index) => (
                        <div key={index} className="border border-border rounded-lg p-6 bg-card/50">
                          <div className="mb-4">
                            <h3 className="font-semibold text-foreground mb-2">Problem</h3>
                            <p className="text-foreground/80">{challenge.problem}</p>
                          </div>
                          <div className="mb-4">
                            <h3 className="font-semibold text-foreground mb-2">Debugging Process</h3>
                            <p className="text-foreground/80">{challenge.debugging}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                            <p className="text-foreground/80">{challenge.solution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Experience */}
                <section id="experience" className="scroll-mt-20">
                  <h2 className="text-2xl font-bold font-display text-foreground mb-6 border-b border-border pb-2">
                    Development Experience
                  </h2>
                  <div className="prose max-w-none">
                    <h3 id="approach" className="font-display text-lg font-semibold text-foreground mb-4">
                      Technical Approach
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-6">{project.experience.approach}</p>

                    <h3 id="future-enhancements" className="font-display text-lg font-semibold text-foreground mb-4">
                      Future Enhancements
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-6">{project.experience.futureEnhancements}</p>

                    <h3 id="evaluation" className="font-display text-lg font-semibold text-foreground mb-4">
                      Project Evaluation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                        <h4 className="font-semibold text-green-900 mb-3">Strengths</h4>
                        <ul className="space-y-1">
                          {project.experience.prosAndCons.pros.map((pro, index) => (
                            <li key={index} className="text-sm text-green-800 flex items-start gap-2">
                              <span className="text-green-600 mt-1.5 w-1 h-1 rounded-full bg-green-600 flex-shrink-0"></span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                        <h4 className="font-semibold text-red-900 mb-3">Areas for Improvement</h4>
                        <ul className="space-y-1">
                          {project.experience.prosAndCons.cons.map((con, index) => (
                            <li key={index} className="text-sm text-red-800 flex items-start gap-2">
                              <span className="text-red-600 mt-1.5 w-1 h-1 rounded-full bg-red-600 flex-shrink-0"></span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Project Navigation */}
              <ProjectNavigation currentSlug={slug} />
            </article>

            {/* RIGHT: ToC */}
            <TableOfContents rootSelector="#page-content" />
          </div>
        </div>
      </div>
    </section>
  );
}
