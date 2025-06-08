
import { motion } from "framer-motion"
import { ChevronRight, Database, Code, Network } from "lucide-react"
import { Card } from "@/components/ui/card"
import React from "react"
import { NavLink } from "react-router"
import { Button } from "./ui/button"
import Header from "./Header"

const colorVariants = {
  ml: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400",
  database: "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400",
  network: "bg-pink-500/10 text-pink-500 dark:bg-pink-400/10 dark:text-pink-400",
}

const blogPosts = [
  {
    id: "1",
    title: "Understanding Deepseek R1",
    date: "Jan 28, 2025",
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
  {
    id: "2",
    title: "Machine Learning and Artificial Intelligence",
    date: "May 13, 2023",
    category: {
      name: "ML",
      color: colorVariants.database,
    },
    icon: {
      name: Database,
      color: colorVariants.database,
    },
    href: "https://understanding-deepseek.hashnode.dev/",
  },
  {
    id: "3",
    title: "The World of Computer Networks",
    date: "Mar 18, 2023",
    category: {
      name: "Core",
      color: colorVariants.network,
    },
    icon: {
      name: Network,
      color: colorVariants.network,
    },
    href: "https://understanding-deepseek.hashnode.dev/",
  },
]

export default function BlogSection() {
  return (
    <section className="min-h-screen min-w-fullbg-white text-black dark:bg-black dark:text-white">
      <Header />
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-4 md:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto my-8">
          <h2 className="font-satoshiBold text-4xl font-bold mb-4">Blogs</h2>
          <p className="font-satoshiMedium text-zinc-600 text-lg mb-8">
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
                <Card className="bg-inherit border-zinc-800/50 overflow-hidden">
                  <a
                    href={post.href}
                    className="flex items-center justify-between p-4 md:p-6 group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                        {React.createElement(post.icon.name, { className: post.icon.color })}
                      </div>
                      <div>
                        <h3 className="font-satoshiMedium text-lg font-semibold text-primary hover:z-10 transition-colors">
                          {post.title}
                        </h3>
                        <p className="font-satoshi text-sm text-start text-zinc-500">{post.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-satoshi px-3 py-1 rounded-full text-xs font-bold ${post.category.color}`}>
                        {post.category.name}
                      </span>
                      <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
            <Button className="font-satoshiMedium">
              <NavLink to="/">Go Back</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
