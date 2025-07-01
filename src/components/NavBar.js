import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes";
const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs(motion.nav, { className: `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-accent/20"
            : "bg-background/50 backdrop-blur-md"}`, initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: "spring", stiffness: 100, damping: 20 }, children: [_jsxs("div", { className: "max-w-5xl mx-auto flex items-center justify-between p-4", children: [_jsx(motion.a, { href: "#hero", className: "text-2xl font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Anshul Rawal" }), _jsxs("div", { className: "hidden md:flex items-center space-x-6", children: [links.map(({ href, label }, index) => (_jsxs(motion.a, { href: href, className: "text-primary hover:text-accent transition-colors duration-300 relative group", initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, whileHover: { y: -2, scale: 1.05 }, children: [label, _jsx(motion.div, { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300", whileHover: { width: "100%" } })] }, href))), _jsx(motion.button, { onClick: () => setTheme(theme === "light" ? "dark" : "light"), className: "p-2 rounded-full hover:bg-accent/10 transition-colors duration-300", whileHover: { scale: 1.1, rotate: 180 }, whileTap: { scale: 0.9 }, children: _jsx(AnimatePresence, { mode: "wait", children: theme === "light" ? (_jsx(motion.div, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, transition: { duration: 0.2 }, children: _jsx(Moon, { className: "w-6 h-6" }) }, "moon")) : (_jsx(motion.div, { initial: { rotate: 90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: -90, opacity: 0 }, transition: { duration: 0.2 }, children: _jsx(Sun, { className: "w-6 h-6" }) }, "sun")) }) })] }), _jsx(motion.button, { className: "md:hidden p-2 rounded-full hover:bg-accent/10 transition-colors duration-300", onClick: () => setOpen(!open), whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: _jsx(AnimatePresence, { mode: "wait", children: open ? (_jsx(motion.div, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, transition: { duration: 0.2 }, children: _jsx(X, { className: "w-6 h-6" }) }, "close")) : (_jsx(motion.div, { initial: { rotate: 90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: -90, opacity: 0 }, transition: { duration: 0.2 }, children: _jsx(Menu, { className: "w-6 h-6" }) }, "menu")) }) })] }), _jsx(AnimatePresence, { children: open && (_jsx(motion.div, { className: "md:hidden bg-background/90 backdrop-blur-md border-t border-accent/20", initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, children: _jsx("div", { className: "px-4 py-2 space-y-1", children: links.map(({ href, label }, index) => (_jsx(motion.a, { href: href, onClick: () => setOpen(false), className: "block px-3 py-2 text-lg text-primary hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, whileHover: { x: 10, scale: 1.02 }, whileTap: { scale: 0.98 }, children: label }, href))) }) })) })] }));
};
export default NavBar;
