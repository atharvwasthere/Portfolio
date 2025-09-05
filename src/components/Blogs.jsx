import { motion } from "framer-motion"
import {
  ChevronRight,
  Code,
  Globe,
  Cpu,
  Server,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import React from "react"
import { NavLink } from "react-router"
import { Button } from "./ui/button"
import Header from "./Header"

const colorVariants = {
  ml: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400",
  web: "bg-rose-500/10 text-rose-500 dark:bg-rose-500/10 dark:text-rose-400",
  ai: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400",
  systems: "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400",
  database: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400",

}

const blogPosts = [
  {
    id: "1",
    title: "Decoding GitHub’s Search Engine",
    date: "Jan 10, 2025",
    category: {
      name: "Web",
      color: colorVariants.web,
    },
    icon: {
      name: Globe,
      color: colorVariants.web,
    },
    href: "https://debouncing-and-githubs-weird-decision.hashnode.dev/",
  },
  {
    id: "2",
    title: "MCP AI’s Bridge To Context",
    date: "Jan 15, 2025",
    category: {
      name: "AI ",
      color: colorVariants.ai,
    },
    icon: {
      name: Cpu,
      color: colorVariants.ai,
    },
    href: "https://understanding-model-context-protocol.hashnode.dev/",
  },
  {
    id: "3",
    title: "Guide to OpenMP",
    date: "Feb 19, 2025",
    category: {
      name: "Systems",
      color: colorVariants.systems,
    },
    icon: {
      name: Server,
      color: colorVariants.systems,
    },
    href: "https://a-comprehensive-guide-to-openmp.hashnode.dev/",
  },
  {
    id: "4",
    title: "Understanding DeepSeek R1",
    date: "Feb 3, 2025", 
    category: {
      name: "ML",
      color: colorVariants.ml,
    },
    icon: {
      name: Code,
      color: colorVariants.ml,
    },
    href: "https://understanding-deepseek.hashnode.dev/",
  },
]

export default function BlogSection() {
  return (
    <section className="min-h-screen min-w-full bg-background text-foreground">
      <Header />
      <div className="min-h-screen bg-background text-background p-4 md:p-8 lg:p-12">
        <div className="pt-12  max-w-4xl mx-auto my-4">
          <h2 className="font-display text-4xl text-black  dark:text-white font-medium  md:mb-2">Blogs</h2>
          <p className="font-satoshiMedium text-zinc-600 text-lg mb-8">
            A collection of my blogs where I share experiences and ideas on
            technology, programming languages, databases, cloud and frameworks.
          </p>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-inherit border-none ">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 md:p-6 group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center">
                        {React.createElement(post.icon.name, {
                          className: `${post.icon.color}`,
                        })}
                      </div>
                      <div>
                        <h3 className="font-satoshiMedium  text-sm md:text-lg font-semibold text-primary group-hover:underline transition-colors">
                          {post.title}
                        </h3>
                        <p className="font-satoshi text-sm text-start text-zinc-500">
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-satoshi px-3 py-1 rounded-full text-xs font-bold ${post.category.color}`}
                      >
                        {post.category.name}
                      </span>
                      <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
            <Button className="w-fit font-cabinet text-lg
             bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20
             dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20
             transition-colors">
              <NavLink to="/">Go Back</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
