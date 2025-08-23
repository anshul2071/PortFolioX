import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { motion, useInView } from 'framer-motion';
import { glass } from "@/utils/theme";
const experiences = [
    {
        title: "React Developer",
        company: "Amnil Technologies",
        location: "Jhamiskhel, Lalitpur",
        timeframe: "Feb 2025 - May 2025",
        responsibilites: [
            " Built and maintained front-end features in React.js and TypeScript for multiple web applications. ",
            " Developed and secured authentication flows with Node.js, Express.js, JWT and a JSON-server mock backend.",
            " Created responsive, accessible UI components using Material UI and Ant Design.",
            " Integrated Google OAuth2 along with Gmail and Calendar APIs to power scheduling and communication features.",
            " Wrote clean, modular code following component-based best practices for reusability and maintainability.",
            " Used Git and GitHub for version control, collaborating via pull requests and peer code reviews."
        ]
    },
    {
        title: "Frontend Developer",
        company: "Veriason Creatives",
        location: "Pulchowk, Lalitpur",
        timeframe: "Current",
        responsibilites: [
            " Improved UI consistency and branding by standardizing typography, buttons, layouts, and responsive styling across all sections.",
            " Enhanced user experience with clickable cards/images, overlay navigation, optimized galleries, and redesigned blog, contact, and 404 pages.",
            " Built dynamic discount and “New Wine” logic, adding automated badges for promotions and newly released products.",
            " Strengthened SEO performance with dynamic H1/H2 titles, meta descriptions, and structured data (Homepage & Taxonomy Schema).",
            " Integrated and styled WordPress content dynamically into taxonomy pages with conditional rendering for headings and anchors.",
            " Ensured seamless usability by fixing text overflow, aligning subscription/FAQ sections, and refining overall responsiveness."
        ]
    },
];
const Experience = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return (_jsxs("section", {
        id: "experience", className: "py-20 bg-background px-4 relative overflow-hidden", children: [_jsxs("div", {
            className: "absolute inset-0 opacity-20", children: [_jsx(motion.div, {
                className: "absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-accent to-transparent", animate: {
                    opacity: [0.2, 0.8, 0.2],
                    scaleY: [0.8, 1.2, 0.8]
                }, transition: { duration: 4, repeat: Infinity }
            }), _jsx(motion.div, {
                className: "absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent", animate: {
                    opacity: [0.8, 0.2, 0.8],
                    scaleY: [1.2, 0.8, 1.2]
                }, transition: { duration: 5, repeat: Infinity }
            })]
        }), _jsx(motion.h2, {
            className: "text-center text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-accent relative z-10", initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: _jsx(motion.span, {
                animate: {
                    textShadow: [
                        "0 0 10px rgba(var(--accent), 0.5)",
                        "0 0 20px rgba(var(--accent), 0.8)",
                        "0 0 10px rgba(var(--accent), 0.5)"
                    ]
                }, transition: { duration: 2, repeat: Infinity }, children: "Experience"
            })
        }), _jsxs("div", {
            className: "mt-12 max-w-4xl mx-auto space-y-12 relative z-10", ref: ref, children: [_jsx(motion.div, { className: "absolute left-8 top-0 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full", initial: { height: 0 }, animate: isInView ? { height: "100%" } : { height: 0 }, transition: { duration: 1.5, ease: "easeInOut" } }), experiences.map((exp, idx) => (_jsxs(motion.div, {
                className: `${glass} relative pl-20 group`, initial: { opacity: 0, y: 50, x: -50 }, whileInView: { opacity: 1, y: 0, x: 0 }, viewport: { once: true, amount: 0.2 }, transition: { delay: idx * 0.2, type: "spring", stiffness: 60 }, whileHover: {
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    borderColor: "rgba(var(--accent), 0.5)"
                }, style: {
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)"
                }, children: [_jsx(motion.div, {
                    className: "absolute left-6 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg", initial: { scale: 0 }, whileInView: { scale: 1 }, transition: { delay: idx * 0.2 + 0.5, type: "spring", stiffness: 200 }, whileHover: { scale: 1.5 }, children: _jsx(motion.div, {
                        className: "absolute inset-0 bg-accent rounded-full", animate: {
                            scale: [1, 1.5, 1],
                            opacity: [1, 0, 1]
                        }, transition: { duration: 2, repeat: Infinity }
                    })
                }), _jsxs(motion.div, { className: "p-6", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { delay: idx * 0.2 + 0.3 }, children: [_jsx(motion.h3, { className: "text-2xl font-display text-accent mb-1 group-hover:text-primary transition-colors duration-300", whileHover: { x: 10 }, children: exp.title }), _jsx(motion.p, { className: "text-lg font-semibold mb-1 group-hover:text-accent transition-colors duration-300", whileHover: { x: 5 }, children: exp.company }), _jsxs(motion.p, { className: "text-sm text-muted-foreground mb-4 flex items-center gap-2", whileHover: { x: 5 }, children: [_jsx(motion.span, { animate: { rotate: [0, 360] }, transition: { duration: 20, repeat: Infinity, ease: "linear" }, className: "inline-block", children: "\uD83D\uDCCD" }), exp.location, " \u00B7 ", exp.timeframe] }), _jsx(motion.ul, { className: "list-disc list-inside space-y-2 text-base", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { delay: idx * 0.2 + 0.5 }, children: exp.responsibilites.map((resp, respIdx) => (_jsx(motion.li, { className: "hover:text-accent transition-colors duration-300 cursor-default", initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { delay: idx * 0.2 + 0.6 + respIdx * 0.1 }, whileHover: { x: 10, scale: 1.02 }, children: resp }, respIdx))) })] }), _jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500", initial: { opacity: 0 }, whileHover: { opacity: 1 } })]
            }, idx)))]
        })]
    }));
};
export default Experience;
