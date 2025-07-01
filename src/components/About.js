import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { motion, useInView } from 'framer-motion';
import { glass } from "@/utils/theme";
import profile from '../assets/profile.jpg';
const About = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (_jsxs("section", { id: "about", className: "py-20 px-4 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 opacity-20", children: [_jsx(motion.div, { className: "absolute top-1/3 left-1/4 w-32 h-32 bg-accent/30 rounded-full blur-2xl", animate: {
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.7, 0.3],
                            x: [0, 30, 0]
                        }, transition: { duration: 5, repeat: Infinity } }), _jsx(motion.div, { className: "absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/30 rounded-full blur-2xl", animate: {
                            scale: [1.5, 1, 1.5],
                            opacity: [0.7, 0.3, 0.7],
                            x: [0, -20, 0]
                        }, transition: { duration: 6, repeat: Infinity } })] }), _jsx(motion.h2, { className: "text-4xl font-display mb-8 text-center relative z-10", initial: { x: -100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { type: "spring", stiffness: 80 }, children: _jsx(motion.span, { className: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent", animate: {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }, transition: { duration: 3, repeat: Infinity }, children: "About Me" }) }), _jsxs(motion.div, { className: `${glass} max-w-3xl mx-auto relative z-10 p-8 rounded-2xl border border-accent/20`, initial: { scale: 0.9, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6 }, ref: ref, style: {
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(20px)"
                }, whileHover: {
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }, children: [_jsx(motion.div, { className: "relative mb-6 flex justify-center", initial: { scale: 0, rotate: -180 }, animate: isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }, transition: { type: "spring", stiffness: 200, damping: 20 }, children: _jsxs(motion.div, { className: "relative", whileHover: { scale: 1.1 }, animate: {
                                rotate: [0, 5, -5, 0]
                            }, transition: {
                                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }, children: [_jsx("img", { src: profile || "/placeholder.svg", alt: "profile", className: "w-32 h-32 rounded-full mx-auto border-4 border-accent/30 shadow-lg" }), _jsx(motion.div, { className: "absolute inset-0 rounded-full border-2 border-accent/50", animate: {
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }, transition: { duration: 2, repeat: Infinity } }), [...Array(6)].map((_, i) => (_jsx(motion.div, { className: "absolute w-2 h-2 bg-accent/60 rounded-full", style: {
                                        top: "50%",
                                        left: "50%",
                                        transformOrigin: "0 0"
                                    }, animate: {
                                        rotate: [0, 360],
                                        scale: [0, 1, 0]
                                    }, transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.5
                                    } }, i)))] }) }), _jsx(motion.p, { className: "text-lg mb-4 text-center leading-relaxed", initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { delay: 0.3, duration: 0.6 }, children: _jsx(motion.span, { className: "inline-block", whileHover: {
                                scale: 1.05,
                                color: "var(--accent)",
                                textShadow: "0 0 10px rgba(var(--accent), 0.5)"
                            }, children: "I'm a software developer with a passion for building web applications\u2014specializing in React, TypeScript, Tailwind, and Node.js. I love crafting performant UIs and seamless APIs." }) }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-3 mt-6", initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }, transition: { delay: 0.5, duration: 0.6 }, children: ["React", "TypeScript", "Tailwind", "Node.js"].map((skill, index) => (_jsx(motion.span, { className: "px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium", initial: { opacity: 0, scale: 0 }, animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }, transition: { delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }, whileHover: {
                                scale: 1.1,
                                backgroundColor: "rgba(var(--accent), 0.3)"
                            }, children: skill }, skill))) }), _jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 rounded-2xl opacity-0", whileHover: { opacity: 1 }, transition: { duration: 0.3 } })] })] }));
};
export default About;
