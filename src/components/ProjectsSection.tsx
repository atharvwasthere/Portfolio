import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Lock,
  MessageSquare,
  HardDrive,
  Usb,
  Rocket,
  LucidePackageOpen,
  LucideListMusic,
  Wind,
  Wand,
  Plug,
  Search,
  Satellite,
  BookOpen,
  Shield,
  LucideSquareSlash
} from "lucide-react";
import { Link } from "react-router";

const projectData = {
  core: {
    title: "Core Builds",
    tagline: "Systems & CLI experiments — from C to Go.",
    projects: [
      {
        name: "Encryptify",
        slug: "encryptify",
        icon: Lock,
        tags: ["C++", "Multithreading"],
      },
      {
        name: "Signal Chatroom",
        slug: "signal-chatroom",
        icon: MessageSquare,
        tags: ["Networking","C++","WIP"],
      },
      {
        name: "OS Tools",
        slug: "os-tools",
        icon: HardDrive,
        tags: ["Scheduling", "OS101"],
      },
      {
        name: "USB Driver in C",
        slug: "usb-driver",
        icon: Usb,
        tags: ["Systems"],
      },
      {
        name: "Fastlane",
        slug: "fastlane",
        icon: Rocket,
        tags: ["Go", "Networking", "CLI", "WIP"],
      },
      {
        name: "TuneIt",
        slug: "tuneit",
        icon: LucideListMusic,
        tags: ["CLI", "Downloader"],
      },
    ],
  },
  web: {
    title: "Web Lab",
    tagline: "UI to API.",
    projects: [
      {
        name: "Web Crawler",
        slug: "web-crawler",
        icon: LucidePackageOpen,
        tags: [],
      },
      {
        name: "Coursify",
        slug: "coursify",
        icon: LucideSquareSlash,
        tags: ["Landing Page"],
      },
      { name: "AirWise", slug: "airwise", icon: Wind, tags: ["WIP"] },
      { name: "EveSpark", slug: "evespark", icon: Wand, tags: [] },
      {
        name: "Competitive Search",
        slug: "competitive-search",
        icon: Plug,
        tags: ["Plugin", "WIP"],
      },
      {
        name: "Search Engine",
        slug: "search-engine",
        icon: Search,
        tags: ["WIP"],
      },
    ],
  },
  research: {
    title: "Research & Ideas",
    tagline: "Code meets Curiosity — sometimes with diagrams.",
    projects: [
      {
        name: "WebRTC Internals",
        slug: "webrtc-internals",
        icon: Satellite,
        tags: [],
      },
      {
        name: "Encryption Logic Deep Dive",
        slug: "encryption-logic",
        icon: Shield,
        tags: ["Security"],
      },
      {
        name: "System Design Notes",
        slug: "system-design-notes",
        icon: BookOpen,
        tags: ["Architecture"],
      },
      {
        name: "Elasticsearch + Inverted Indexing",
        slug: "elasticsearch-inverted-index",
        icon: Search,
        tags: ["Search", "Indexing"],
      },
      {
        name: "Model Context Protocol (MCP)",
        slug: "multi-party-computation",
        icon: Plug,
        tags: ["Privacy", "Security"],
      },
    ],
  },
};

const projectTileHeight = 44;
const extraPadding = 100; // header + margins + footer space

type CategoryKey = keyof typeof projectData;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("web");

  const activeProjects = projectData[activeCategory].projects.length;
  const dynamicHeight = activeProjects * projectTileHeight + extraPadding;

  return (
    <div className="w-full max-w-4xl  p-6 bg-background ">
      {/* Tab Navigation */}
      <div className="font-satoshiMedium flex flex-wrap gap-2 mb-8 border-b border-border">
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
      <div
        className="font-satoshi relative"
        style={{ minHeight: `${dynamicHeight}px` }}
      >
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
              {/* <h2 className="lg:hidden font-bold text-foreground mb-2 font-mono text-large">
                {data.title}
              </h2> */}
              <p className="text-amber-500 leading-relaxed max-w-2xl text-small">
                <blockquote className="border-l-2 border-primary pl-4 italic">
                  &quot;{data.tagline}&quot;
                </blockquote>
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-3">
              {data.projects.map((project, index) => {
                const Icon = project.icon; // component reference
                return (
                  <Link
                    key={index}
                    to={`/project/${project.slug}`}
                    className="flex items-center gap-3 group cursor-pointer p-2 -m-2 rounded transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 dark:text-spotifygray text-spotifyblack flex-shrink-0" />{" "}
                    <span className="font- text-lg text-foreground group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors duration-200 underline-offset-4 group-hover:underline">
                      {project.name}
                    </span>
                    {project.tags.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-emerald-500/10 text-emerald-600 dark:text-cyan-400 dark:bg-teal-200/10 px-2 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                );
              })}
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
