import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";
const projectData = {
  core: {
    title: "🧩 Core ",
    tagline: "Where Code Runs Deep. Mostly C/C++, closer to the metal.",
    projects: [
      { name: "File Encrypter", emoji: "🔐", tags: [] },
      { name: "USB Driver", emoji: "🔌", tags: [] },
      { name: "OS Tools", emoji: "🧱", tags: [] },
      { name: "Movie Booking CLI", emoji: "🎟️", tags: [] },
      { name: "Chat Room", emoji: "💬", tags: [] },
    ],
  },
  web: {
    title: "💻 Web",
    tagline: "UI to API.",
    projects: [
      { name: "EveSpark", emoji: "🪄", tags: [] },
      { name: "Coursify", emoji: "🧰", tags: ["Landing Page"] },
      { name: "AirWise", emoji: "🌬️", tags: ["WIP"] },
      { name: "Portfolio Site", emoji: "👨‍💻", tags: [] },
      { name: "Competitive Search", emoji: "🔌", tags: ["Plugin", "WIP"] },
    ],
  },
  research: {
    title: "🔬 Research & Ideas",
    tagline: "Code meets Curiosity.",
    projects: [
      { name: "ParaLang", emoji: "🧠", tags: ["Research Paper"] },
      { name: "Encryption Logic Deep Dive", emoji: "🔐", tags: ["Security"] },
      { name: "System Design Notes", emoji: "📘", tags: ["Architecture"] },

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
                <div
                  key={index}
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
                </div>
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
