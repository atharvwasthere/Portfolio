import { useParams, Link } from "react-router-dom"
import { ArrowLeft, ExternalLink, Github, FileText, Clock, Sun, Moon } from "lucide-react"
import { projectsData } from "@/data/ProjectData"
import { TableOfContents } from "../components/projectsUI/table-of-contents"
import { TerminalBlock } from "../components/projectsUI/terminal-block"
import { ProjectNavigation } from "../components/projectsUI/project-navigation"
import { ScrollProgress } from "../components/projectsUI/scroll-progress"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState, } from "react"

function calculateReadingTime(text) {
  const wordsPerMinute = 200
  const words = text.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}



export default function ProjectPage() {
  const params = useParams()
  const slug = params?.slug
  const project = projectsData[slug]
  const [mounted,setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme, toggleTheme } = useTheme();


  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-start ">
        <div className="text-left">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <p className="text-gray-600 mb-6">The project you`&apos`re looking for doesn`&apos`t exist.</p>
          <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          {mounted && (

          <button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        )}
        </div>
      </div>
    )
  }

  // Calculate reading time based on all text content
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
  ].join(" ")

  const readingTime = calculateReadingTime(allText)

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-left">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{project.name}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={14} />
              <span>{readingTime} min read</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-6">{project.summary}</p>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <FileText size={16} />
                Documentation
              </a>
            )}
          </div>

          {/* Quick Info */}
          <div className="bg-gray-50 rounded-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-500">Timeline</span>
              <p className="text-gray-900">{project.overview.timeline}</p>
            </div>
            <div>
              <span className="font-medium text-gray-500">Type</span>
              <p className="text-gray-900">{project.overview.type}</p>
            </div>
            <div>
              <span className="font-medium text-gray-500">Status</span>
              <p className="text-gray-900">{project.overview.status}</p>
            </div>
            <div>
              <span className="font-medium text-gray-500">Stack</span>
              <p className="text-gray-900">{project.overview.stack.join(", ")}</p>
            </div>
          </div>
        </header>

        <div className="space-y-16">
          {/* Overview */}
          <section id="overview" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">{project.overview.tagline}</p>
            </div>
          </section>

          {/* Motivation */}
          <section id="motivation" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Motivation</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">{project.motivation}</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section id="tech-stack" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Technology Stack</h2>
            <div className="prose prose-gray max-w-none">
              <div className="space-y-6">
                {project.techStack.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm border border-gray-200"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Key Features</h2>
            <div className="prose prose-gray max-w-none">
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Architecture</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">{project.architecture.description}</p>

              <h3 id="project-structure" className="text-lg font-semibold text-gray-900 mb-4">
                Project Structure
              </h3>
              <TerminalBlock title="Directory Structure">{project.architecture.structure}</TerminalBlock>

              {project.architecture.codeSnippet && (
                <>
                  <h3 id="core-implementation" className="text-lg font-semibold text-gray-900 mb-4 mt-6">
                    Core Implementation
                  </h3>
                  <TerminalBlock title="Implementation">{project.architecture.codeSnippet}</TerminalBlock>
                </>
              )}
            </div>
          </section>

          {/* Challenges */}
          <section id="challenges" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Technical Challenges
            </h2>
            <div className="prose prose-gray max-w-none">
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Problem</h3>
                      <p className="text-gray-700">{challenge.problem}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Debugging Process</h3>
                      <p className="text-gray-700">{challenge.debugging}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-700">{challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Development Experience
            </h2>
            <div className="prose prose-gray max-w-none">
              <h3 id="approach" className="text-lg font-semibold text-gray-900 mb-4">
                Technical Approach
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">{project.experience.approach}</p>

              <h3 id="future-enhancements" className="text-lg font-semibold text-gray-900 mb-4">
                Future Enhancements
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">{project.experience.futureEnhancements}</p>

              <h3 id="evaluation" className="text-lg font-semibold text-gray-900 mb-4">
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
      </div>

      {/* Table of Contents */}
      <TableOfContents />
    </div>
  )
}
