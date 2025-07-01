"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
const Preloader = ({ onFinish }) => {
    useEffect(() => {
        const tOut = setTimeout(() => onFinish && onFinish(), 3000);
        return () => clearTimeout(tOut);
    }, [onFinish]);
    return (_jsx(AnimatePresence, { children: _jsxs(motion.div, { className: "fixed inset-0 flex items-center justify-center bg-background relative overflow-hidden z-50", initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 1 }, children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx(motion.div, { className: "absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl", animate: {
                                scale: [1, 1.5, 1],
                                opacity: [0.2, 0.5, 0.2],
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                            }, transition: { duration: 4, repeat: Number.POSITIVE_INFINITY } }), _jsx(motion.div, { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl", animate: {
                                scale: [1.5, 1, 1.5],
                                opacity: [0.5, 0.2, 0.5],
                                x: [0, -80, 0],
                                y: [0, 30, 0],
                            }, transition: { duration: 5, repeat: Number.POSITIVE_INFINITY } })] }), _jsxs("div", { className: "text-center relative z-10", children: [_jsx(motion.h1, { className: "text-6xl font-display text-primary mb-8", initial: { scale: 0, rotate: -180 }, animate: { scale: 1, rotate: 0 }, transition: { type: "spring", stiffness: 120, damping: 12 }, children: _jsx(motion.span, { className: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent", animate: {
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }, transition: { duration: 2, repeat: Number.POSITIVE_INFINITY }, children: "Port-folio" }) }), _jsx(motion.div, { className: "flex justify-center space-x-2 mb-8", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, children: [0, 1, 2].map((index) => (_jsx(motion.div, { className: "w-3 h-3 bg-accent rounded-full", animate: {
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }, transition: {
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: index * 0.2,
                                } }, index))) }), _jsx(motion.p, { className: "text-muted-foreground text-lg", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1 }, children: _jsx(motion.span, { animate: {
                                    opacity: [0.5, 1, 0.5],
                                }, transition: { duration: 2, repeat: Number.POSITIVE_INFINITY }, children: "Loading amazing things..." }) }), _jsx(motion.div, { className: "w-64 h-1 bg-muted/30 rounded-full mx-auto mt-8 overflow-hidden", initial: { opacity: 0, scaleX: 0 }, animate: { opacity: 1, scaleX: 1 }, transition: { delay: 1.5, duration: 0.5 }, children: _jsx(motion.div, { className: "h-full bg-gradient-to-r from-accent to-primary rounded-full", initial: { width: "0%" }, animate: { width: "100%" }, transition: { delay: 1.5, duration: 1.5, ease: "easeInOut" } }) }), _jsx("div", { className: "absolute inset-0 pointer-events-none", children: [...Array(10)].map((_, i) => (_jsx(motion.div, { className: "absolute w-2 h-2 bg-accent/40 rounded-full", style: {
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }, animate: {
                                    y: [0, -100, 0],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                }, transition: {
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.3,
                                } }, i))) })] })] }) }));
};
export default Preloader;
