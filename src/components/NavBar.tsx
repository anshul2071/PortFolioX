"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle theme toggle
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
    setOpen(false) // Close mobile menu after theme change
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-accent/20"
          : "bg-background/50 backdrop-blur-md"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Anshul Rawal
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ href, label }, index) => (
            <motion.a
              key={href}
              href={href}
              className="text-primary hover:text-accent transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2, scale: 1.05 }}
            >
              {label}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}

          {/* Desktop Theme Toggle */}
          <motion.button
            onClick={handleThemeToggle}
            className="p-2 rounded-full hover:bg-accent/10 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-full hover:bg-accent/10 transition-colors duration-300"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-background/90 backdrop-blur-md border-t border-accent/20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 space-y-1">
              {/* Mobile Navigation Links */}
              {links.map(({ href, label }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-lg text-primary hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {label}
                </motion.a>
              ))}

              {/* MOBILE THEME TOGGLE - THIS IS THE KEY PART */}
              <div className="pt-4 mt-4 border-t border-accent/20">
                <motion.button
                  onClick={handleThemeToggle}
                  className="w-full flex items-center justify-center gap-3 px-3 py-3 text-lg text-primary hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300 border border-accent/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Theme Icon */}
                  <div className="flex items-center justify-center">
                    {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                  </div>

                  {/* Theme Text */}
                  <span className="font-medium">{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar
