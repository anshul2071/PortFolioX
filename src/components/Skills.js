"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as ToolTip from "@radix-ui/react-tooltip";
import { motion, useInView } from "framer-motion";
import { glass } from "@/utils/theme";
import ReactIcon from "../assets/icons/react.svg";
import NodeIcon from "../assets/icons/node.svg";
import ExpressIcon from "../assets/icons/express.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import JSIcon from "../assets/icons/javascript.svg";
import TSIcon from "../assets/icons/typescript.svg";
import AWSIcon from "../assets/icons/aws.svg";
import GitIcon from "../assets/icons/git.svg";
import LinuxIcon from "../assets/icons/linux.svg";
import MongoIcon from "../assets/icons/mongodb.svg";
const skills = [
    { name: "React", icon: ReactIcon, category: "Frontend" },
    { name: "Node.js", icon: NodeIcon, category: "Backend" },
    { name: "Express", icon: ExpressIcon, category: "Backend" },
    { name: "Tailwind", icon: TailwindIcon, category: "Frontend" },
    { name: "JavaScript", icon: JSIcon, category: "Frontend" },
    { name: "TypeScript", icon: TSIcon, category: "Frontend" },
    { name: "AWS", icon: AWSIcon, category: "DevOps" },
    { name: "Git", icon: GitIcon, category: "Tools" },
    { name: "Linux", icon: LinuxIcon, category: "Tools" },
    { name: "MongoDB", icon: MongoIcon, category: "Database" },
];
const marqueSkills = [...skills, ...skills];
const Skills = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (_jsxs("section", { id: "skills", className: "py-20 bg-background relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 opacity-20", children: [_jsx(motion.div, { className: "absolute top-1/4 left-1/6 w-40 h-40 bg-accent/30 rounded-full blur-3xl", animate: {
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3],
                            x: [0, 40, 0],
                        }, transition: { duration: 7, repeat: Number.POSITIVE_INFINITY } }), _jsx(motion.div, { className: "absolute bottom-1/4 right-1/6 w-60 h-60 bg-primary/30 rounded-full blur-3xl", animate: {
                            scale: [1.3, 1, 1.3],
                            opacity: [0.6, 0.3, 0.6],
                            x: [0, -30, 0],
                        }, transition: { duration: 8, repeat: Number.POSITIVE_INFINITY } })] }), _jsx(motion.h2, { className: "text-4xl font-display mb-8 text-center relative z-10", initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { type: "spring", stiffness: 80, damping: 20 }, children: _jsx(motion.span, { className: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent", animate: {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }, transition: { duration: 3, repeat: Number.POSITIVE_INFINITY }, children: "Skills" }) }), _jsx("div", { className: "overflow-hidden mb-16 relative z-10", children: _jsx(motion.div, { className: "flex space-x-6 py-4", animate: { x: ["0%", "-50%"] }, transition: {
                        x: {
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "linear",
                            duration: 20,
                        },
                    }, children: _jsx(ToolTip.Provider, { children: marqueSkills.map((skill, idx) => (_jsxs(ToolTip.Root, { children: [_jsx(ToolTip.Trigger, { asChild: true, children: _jsxs(motion.div, { className: `${glass} flex items-center space-x-2 px-4 py-2 min-w-[140px] border border-accent/20 hover:border-accent/50 transition-all duration-300`, style: {
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                                            backdropFilter: "blur(20px)",
                                        }, whileHover: {
                                            scale: 1.05,
                                            y: -5,
                                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                                        }, animate: {
                                            y: [0, -2, 0],
                                        }, transition: {
                                            y: {
                                                duration: 2 + (idx % 3),
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                            },
                                        }, children: [_jsx(motion.img, { src: skill.icon, alt: skill.name, className: "w-6 h-6", animate: { rotate: [0, 360] }, transition: {
                                                    duration: 10 + (idx % 5),
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    ease: "linear",
                                                } }), _jsx("span", { className: "font-semibold whitespace-nowrap", children: skill.name })] }) }), _jsx(ToolTip.Portal, { children: _jsxs(ToolTip.Content, { side: "top", align: "center", className: "px-3 py-2 bg-primary text-background rounded-lg shadow-lg border border-accent/20", children: [_jsx("div", { className: "text-center", children: _jsx("div", { className: "font-semibold", children: skill.category }) }), _jsx(ToolTip.Arrow, { className: "fill-primary" })] }) })] }, `${skill.name}-${idx}`))) }) }) }), _jsxs(motion.div, { className: "max-w-6xl mx-auto px-4 relative z-10", ref: ref, initial: { opacity: 0, y: 50 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }, transition: { duration: 0.6 }, children: [_jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6", children: skills.map((skill, index) => (_jsxs(motion.div, { className: `${glass} p-6 text-center group border border-accent/20 hover:border-accent/50 transition-all duration-300 rounded-2xl`, style: {
                                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                                backdropFilter: "blur(20px)",
                            }, initial: { opacity: 0, scale: 0.8, y: 50 }, animate: isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }, transition: { delay: index * 0.1, type: "spring", stiffness: 100 }, whileHover: {
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                            }, children: [_jsx(motion.div, { className: "mb-4", whileHover: {
                                        rotate: [0, -10, 10, 0],
                                        scale: 1.1,
                                    }, transition: { duration: 0.3 }, children: _jsx(motion.img, { src: skill.icon, alt: skill.name, className: "w-12 h-12 mx-auto group-hover:drop-shadow-lg transition-all duration-300", animate: {
                                            y: [0, -5, 0],
                                        }, transition: {
                                            duration: 2 + (index % 3),
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        } }) }), _jsx(motion.h3, { className: "font-semibold text-sm mb-2 group-hover:text-accent transition-colors duration-300", initial: { opacity: 0 }, animate: isInView ? { opacity: 1 } : { opacity: 0 }, transition: { delay: index * 0.1 + 0.2 }, children: skill.name }), _jsx(motion.div, { className: "text-xs text-muted-foreground mb-3", initial: { opacity: 0 }, animate: isInView ? { opacity: 1 } : { opacity: 0 }, transition: { delay: index * 0.1 + 0.3 }, children: skill.category }), _jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500", initial: { opacity: 0 }, whileHover: { opacity: 1 } }), _jsx("div", { className: "absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [...Array(3)].map((_, i) => (_jsx(motion.div, { className: "absolute w-1 h-1 bg-accent/60 rounded-full", style: {
                                            top: `${20 + i * 20}%`,
                                            left: `${20 + i * 30}%`,
                                        }, animate: {
                                            y: [0, -20, 0],
                                            opacity: [0, 1, 0],
                                            scale: [0, 1, 0],
                                        }, transition: {
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: i * 0.3,
                                        } }, i))) })] }, skill.name))) }), _jsx(motion.div, { className: "mt-12 flex flex-wrap justify-center gap-4", initial: { opacity: 0, y: 30 }, animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }, transition: { delay: 0.8, duration: 0.6 }, children: ["Frontend", "Backend", "Database", "DevOps", "Tools"].map((category, index) => (_jsx(motion.div, { className: "px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20", initial: { opacity: 0, scale: 0 }, animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }, transition: { delay: 1 + index * 0.1, type: "spring", stiffness: 200 }, whileHover: {
                                scale: 1.05,
                                backgroundColor: "rgba(var(--accent), 0.2)",
                            }, children: category }, category))) })] })] }));
};
export default Skills;
