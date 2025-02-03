"use client"

import { motion } from "framer-motion"
import { ChevronRight, Database, Code, Network } from "lucide-react"
import { Card } from "@/components/ui/card"
import  React from "react" // Import React
import { NavLink } from "react-router"
import { Button } from "./ui/button"
import Header from "./Header"

interface BlogPost {
  id: string
  title: string
  date: string
  category: {
    name: string
    color: string
  }
  icon: {
    name: React.ComponentType<{}>
    color: string
  }
  href: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Deepseek R1 ",
    date: "Jan 28, 2025",
    category: {
      name: "ML",
      color: "bg-indigo-500/10 text-indigo-500",
    },
    icon: {
      name: Code ,
      color: "bg-indigo-500/10 text-indigo-500",
    },    href: "https://understanding-deepseek.hashnode.dev/",
  },
  {
    id: "2",
    title: "Machine Learning and Artificial Intelligence",
    date: "May 13, 2023",
    category: {
      name: "ML",
      color: "bg-emerald-500/10 text-emerald-500",
    },
    icon: {
      name: Database ,
      color: "bg-emerald-500/10 text-emerald-500",
    },    href: "https://understanding-deepseek.hashnode.dev/",
  },
  {
    id: "3",
    title: "The World of Computer Networks",
    date: "Mar 18, 2023",
    category: {
      name: "Core",
      color: "bg-pink-500/10 text-pink-500",
    },
    icon: {
      name: Network ,
      color: "bg-pink-500/10 text-pink-500",
    },
    href: "https://understanding-deepseek.hashnode.dev/",
  },
]

export default function BlogSection() {
  return (
    <section className="min-h-screen min-w-full bg-background text-foreground">
    <Header />
    <div className="min-h-screen bg-background text-primary p-4 md:p-8 lg:p-12">
      
      <div className="max-w-4xl mx-auto my-8">
        <h2 className="text-4xl font-bold mb-4">Blogs</h2>
        <p className="text-zinc-600 text-lg mb-8">
          A collection of my blogs where I share experiences and ideas on technology, programming languages, databases,
          cloud and frameworks.
        </p>

        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800/50 overflow-hidden">
                <a
                  href={post.href}
                  className="flex items-center justify-between p-4 md:p-6 group hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                      {React.createElement(post.icon.name as React.ComponentType<any>, { className:` ${post.icon.color}` })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary group-hover:text-primary-foreground transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-start text-zinc-500">{post.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.category.color}`}>
                      {post.category.name}
                    </span>
                    <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
          <Button>
          <NavLink to="/">Go Back</NavLink>
          </Button>
        </div>
      </div>
    </div>
    </section>
  )
}

