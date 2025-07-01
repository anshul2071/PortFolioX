"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import * as Dialog from "@radix-ui/react-dialog"
import { glass } from "@/utils/theme"
import { ExternalLink, Github, X } from "lucide-react"
import AtsImg         from "@/assets/thumbnails/Ats.png";
import JobFindImg     from "@/assets/thumbnails/jobfind.png";
import AuthXImg       from "@/assets/thumbnails/AuthX.png";
import PasswordGenImg from "@/assets/thumbnails/passwordgen.png";
import XChangeImg     from "@/assets/thumbnails/xchange.png";
interface Project {
  title: string
  thumbnail: string
  description: string
  tech: string[]
  repo?: string
  live?: string
}

const projects: Project[] = [
  {
    title: "NexCruit",
    thumbnail: AtsImg,
    description:
      "NEXCRUIT is a sophisticated, responsive single-page application designed to streamline the entire recruitment lifecycle. From candidate onboarding and resume parsing to assessments, interviews, offer management, background checks, and comprehensive analytics, NEXCRUIT provides a seamless end-to-end recruitment management experience.",
    tech: ["React", "Typescript", "Express", "Node.js", "MongoDB", "AntDesign", "Redux"],
    repo: "https://github.com/anshul2071/ATS-frontend-/",
    live: "https://ats-frontend-dun.vercel.app/",
  },
  {
    title: "JobFinder",
    thumbnail: JobFindImg,
    description:
      "Job-Finder is a full-stack web application designed to help users search for remote job listings, save selected jobs, and manage their saved jobs. The project uses the Remotive API to fetch remote jobs, and a custom Node.js/Express backend with a JSON file (db.json) to persist saved jobs. The frontend is built using React (with Vite), Redux Toolkit for state management, and Material-UI (MUI) for an attractive UI. Dark mode support, filtering, and pagination are also implemented.",
    tech: ["React", "Express", "Node.js", "Material-UI", "Redux"],
    repo: "https://github.com/anshul2071/Job-Finder",
    live: "https://job-finder-ten-cyan.vercel.app/",
  },
  {
    title: "AuthX",
    thumbnail: AuthXImg,
    description:
      "This project demonstrates a complete authentication system with user registration, login functionality, and protected routes. It uses React for the frontend, Express for the backend server, and JSON Server for data storage.",
    tech: ["React", "Express", "CSS", "JSON Server"],
    repo: "https://github.com/anshul2071/Auth_React",
    live: "https://auth-form-fqid.vercel.app/",
  },
  {
    title: "PasswordNator",
    thumbnail: PasswordGenImg,
    description:
      "PasswordNator is a simple password generator app built with Vanilla Js. It allows users to generate secure passwords with various options, such as length, complexity, and character sets.",
    tech: ["Javascript", "HTML", "CSS"],
    repo: "https://github.com/anshul2071/Passwordnator",
    live: "https://anshul2071.github.io/Passwordnator/",
  },
  {
    title: "xChangeRate",
    thumbnail: XChangeImg,
    description:
      "This is a simple web-based currency converter that allows users to convert currencies in real-time using an external exchange rate API. Users can select a base currency and a target currency from dropdowns, enter an amount, and fetch the conversion rate. The application dynamically updates flags based on the selected currencies.",
    tech: ["Javascript", "HTML", "CSS"],
    repo: "https://github.com/anshul2071/xChangeRate",
    live: "https://anshul2071.github.io/xChangeRate/",
  },
]

const Projects: React.FC = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/5 w-48 h-48 bg-accent/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.7, 0.3, 0.7],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <motion.h2
        className="text-4xl font-display mb-8 text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          Projects
        </motion.span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className={`${glass} group relative overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-500 rounded-2xl`}
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.03,
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            }}
          >
            {/* Image container */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <motion.img
                src={proj.thumbnail}
                alt={proj.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />

              {/* Project number indicator */}
              <motion.div
                className="absolute bottom-4 left-4 w-8 h-8 bg-accent/90 text-white rounded-full flex items-center justify-center font-bold text-sm z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: idx * 0.2 + 0.5, type: "spring", stiffness: 200 }}
              >
                {idx + 1}
              </motion.div>
            </div>

            <div className="p-6 relative z-10">
              <motion.h3
                className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.2 + 0.3 }}
              >
                {proj.title}
              </motion.h3>

              <motion.p
                className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.2 + 0.4 }}
              >
                {proj.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.2 + 0.5 }}
              >
                {proj.tech.slice(0, 3).map((t, techIdx) => (
                  <motion.span
                    key={t}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: idx * 0.2 + 0.6 + techIdx * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--accent), 0.3)" }}
                  >
                    {t}
                  </motion.span>
                ))}
                {proj.tech.length > 3 && (
                  <motion.span
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: idx * 0.2 + 0.9 }}
                  >
                    +{proj.tech.length - 3} more
                  </motion.span>
                )}
              </motion.div>

              {/* Dialog Component - Fixed Size */}
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <motion.button
                    className="w-full px-4 py-2 bg-gradient-to-r from-accent/20 to-primary/20 text-accent hover:from-accent/30 hover:to-primary/30 rounded-lg transition-all duration-300 border border-accent/30 hover:border-accent/50 font-medium cursor-pointer relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: idx * 0.2 + 0.7 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                  >
                    View Details
                  </motion.button>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" />
                  <Dialog.Content
                    className="fixed left-[50%] top-[50%] z-[101] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border border-accent/20 bg-background p-6 shadow-lg duration-200 sm:rounded-lg mx-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.1) 100%)",
                      backdropFilter: "blur(20px)",
                      maxHeight: "80vh",
                      overflowY: "auto",
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <Dialog.Title className="text-xl font-bold text-accent">{proj.title}</Dialog.Title>
                      <Dialog.Close asChild>
                        <button
                          className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 p-1 hover:bg-accent/10"
                          type="button"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </button>
                      </Dialog.Close>
                    </div>

                    {/* Project Image */}
                    <div className="relative mb-4 rounded-lg overflow-hidden">
                      <img
                        src={proj.thumbnail || "/placeholder.svg"}
                        alt={proj.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>

            
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-accent text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium border border-accent/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {proj.repo && (
                        <a
                          href={proj.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Github Repo
                        </a>
                      )}
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 font-medium text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />

            {/* Floating particles on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-accent/60 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
