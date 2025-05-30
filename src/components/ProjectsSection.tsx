import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";
const projectData = {
  core: {
    title: "Core Builds",
    tagline: "Low-level experiments.. Mostly C/C++, closer to the metal.",
    projects: [
      { name: "File Encrypter", slug: "file-encrypter", emoji: "🔐", tags: [] },
      { name: "USB Driver", slug: "usb-driver", emoji: "🔌", tags: [] },
      { name: "OS Tools", slug: "os-tools", emoji: "🧱", tags: [] },
      { name: "Movie Booking CLI", slug: "movie-booking-cli", emoji: "🎟️", tags: [] },
      { name: "Arduino Scripts", slug: "arduino-scripts", emoji: "📟", tags: [] },
      { name: "Custom Shell Commands", slug: "custom-shell-commands", emoji: "💻", tags: [] },
    ],
  },
  web: {
    title: "Web Lab",
    tagline: "UI to API.",
    projects: [
      { name: "Web Crawler", slug: "web-crawler", emoji: "🕷️", tags: [] },
      { name: "Coursify", slug: "coursify", emoji: "🧰", tags: ["Landing Page"] },
      { name: "ParaLang", slug: "paralang", emoji: "🧠", tags: [] },
      { name: "AirWise", slug: "airwise", emoji: "🌬️", tags: ["WIP"] },
      { name: "Portfolio Site", slug: "portfolio-site", emoji: "👨‍💻", tags: [] },
      { name: "Dev Blog System", slug: "dev-blog-system", emoji: "📝", tags: [] },
      { name: "EveSpark", slug: "evespark", emoji: "🪄", tags: [] },
      { name: "Competitive Search", slug: "competitive-search", emoji: "🔌", tags: ["Plugin", "WIP"] },
    ],
  },
  research: {
    title: "Research & Ideas",
    tagline: "Code meets Curiosity — sometimes with diagrams.",
    projects: [
      { name: "WebRTC Internals", slug: "webrtc-internals", emoji: "📡", tags: [] },
      { name: "Encryption Logic Deep Dive", slug: "encryption-logic", emoji: "🔐", tags: ["Security"] },
      { name: "System Design Notes", slug: "system-design-notes", emoji: "📘", tags: ["Architecture"] },
      { name: "Finance + Backend Experiments", slug: "finance-backend", emoji: "💸", tags: [] },
      { name: "Compiler Playground", slug: "compiler-playground", emoji: "⚙️", tags: [] },
      { name: "Routing via Slugs", slug: "routing-via-slugs", emoji: "🧭", tags: [] },
    ],
  },
};


const projectTileHeight = 44;
const extraPadding = 100; // header + margins + footer space

type CategoryKey = keyof typeof projectData;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("web");

  const activeProjects = projectData[activeCategory].projects.length ;
  const dynamicHeight = activeProjects * projectTileHeight + extraPadding

  return (
    <div className="w-full max-w-4xl  p-6 bg-background ">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
        {Object.entries(projectData).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as CategoryKey)}
            className={cn(
              "px-4 py-2 transition-all duration-200 border-b-2 font-medium text-small",
              activeCategory === key
                ? "text- border-green-400"
                : "border-transparent hover:text-ring hover:border-ring"
            )}
          >
            {data.title.split(" ")[0]}
            <span className="hidden sm:inline ml-1">
              {data.title.split(" ").slice(1).join(" ")}
            </span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative"style={{ minHeight: `${dynamicHeight}px` }}>
        {Object.entries(projectData).map(([key, data]) => (
          <div
            key={key}
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              activeCategory === key
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            {/* Category Header */}
            <div className="mb-6 text-left">
              <h2 className="lg:hidden font-bold text-foreground mb-2 font-mono text-large">
                {data.title}
              </h2>
              <p className="text-amber-500 leading-relaxed max-w-2xl text-small">
              <blockquote className="border-l-2 border-primary pl-4 italic">
                 &quot;{data.tagline}&quot;
              </blockquote>
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-3">
              {data.projects.map((project, index) => (
                <Link
                  key={index}
                  to={`/project/${project.slug}`}
                  className="flex items-center gap-3 group cursor-pointer  p-2 -m-2 rounded transition-colors duration-200"
                >
                  <span className="text-lg flex-shrink-0">{project.emoji}</span>
                  <span className="font- text-lg text-foreground group-hover:text-green-400 transition-colors duration-200 underline-offset-4 group-hover:underline">
                    {project.name}
                  </span>

                  {project.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap ">
                      {project.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-blue-100 text-blue-700 dark:text-cyan-400 dark:bg-teal-200/10  px-2 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Terminal-style footer */}
            {/* <div className="mt-8 pt-4 border-t border-border">
              <div className="flex items-center gap-2 font-mono text-s text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{data.projects.length} projects loaded</span>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
