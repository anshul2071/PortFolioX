import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from 'framer-motion';
import { glass } from "@/utils/theme";
import { useState } from "react";
const ContactForm = () => {
    const [sent, setSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        setSent(true);
    };
    const handleInputChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    if (sent) {
        return (_jsxs(motion.div, {
            className: "min-h-screen flex items-center justify-center relative overflow-hidden", initial: { opacity: 0 }, animate: { opacity: 1 }, children: [_jsx("div", {
                className: "absolute inset-0", children: [...Array(20)].map((_, i) => (_jsx(motion.div, {
                    className: "absolute w-2 h-2 bg-accent/30 rounded-full", initial: {
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: 0
                    }, animate: {
                        y: [null, -100],
                        opacity: [0, 1, 0]
                    }, transition: {
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2
                    }
                }, i)))
            }), _jsxs(motion.div, {
                className: "text-center z-10", initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { type: "spring", stiffness: 200, damping: 20 }, children: [_jsx(motion.div, {
                    className: "w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center", animate: {
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }, transition: {
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                    }, children: _jsx(motion.span, { className: "text-3xl", animate: { rotate: [0, -360] }, transition: { duration: 2, repeat: Infinity, ease: "linear" }, children: "\u2713" })
                }), _jsx(motion.p, { className: "text-2xl text-accent mb-4", initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.3 }, children: "Thank you! I'll get back to you soon." }), _jsx(motion.button, { className: "px-6 py-2 bg-primary/20 text-accent rounded-lg hover:bg-primary/30 transition-colors", onClick: () => setSent(false), initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.5 }, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Send Another Message" })]
            })]
        }));
    }
    return (_jsxs("section", {
        id: "contact", className: "py-20 px-4 relative overflow-hidden", children: [_jsxs("div", {
            className: "absolute inset-0 opacity-30", children: [_jsx(motion.div, {
                className: "absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl", animate: {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }, transition: { duration: 4, repeat: Infinity }
            }), _jsx(motion.div, {
                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl", animate: {
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.3, 0.6]
                }, transition: { duration: 5, repeat: Infinity }
            })]
        }), _jsx(motion.h2, {
            className: "text-4xl font-display mb-8 text-center relative z-10", initial: { x: -100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, viewport: { once: true }, transition: { type: "spring", stiffness: 120, damping: 12 }, children: _jsx(motion.span, {
                className: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent", animate: {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }, transition: { duration: 3, repeat: Infinity }, children: "Let's Build Something Great Together"
            })
        }), _jsxs(motion.form, {
            onSubmit: handleSubmit, className: `${glass} max-w-3xl mx-auto grid gap-6 relative z-10 p-8 rounded-2xl border border-accent/20`, initial: { scale: 0.9, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { type: "spring", stiffness: 100, damping: 20 }, style: {
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(20px)"
            }, children: [_jsxs(motion.label, { className: "space-y-2", initial: { x: -20, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { delay: 0.1 }, children: [_jsx("span", { className: "text-sm font-medium text-accent", children: "Name" }), _jsx(motion.input, { type: "text", name: "name", required: true, value: formData.name, onChange: handleInputChange, className: "w-full p-4 rounded-lg border border-accent/30 bg-background/50 backdrop-blur-sm focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300", placeholder: "Your full name", whileFocus: { scale: 1.02 } })] }), _jsxs(motion.label, { className: "space-y-2", initial: { x: -20, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { delay: 0.2 }, children: [_jsx("span", { className: "text-sm font-medium text-accent", children: "Email" }), _jsx(motion.input, { type: "email", name: "email", required: true, value: formData.email, onChange: handleInputChange, className: "w-full p-4 rounded-lg border border-accent/30 bg-background/50 backdrop-blur-sm focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300", placeholder: "your.email@example.com", whileFocus: { scale: 1.02 } })] }), _jsxs(motion.label, { className: "space-y-2", initial: { x: -20, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { delay: 0.3 }, children: [_jsx("span", { className: "text-sm font-medium text-accent", children: "Message" }), _jsx(motion.textarea, { name: "message", required: true, value: formData.message, onChange: handleInputChange, className: "w-full p-4 rounded-lg border border-accent/30 bg-background/50 backdrop-blur-sm focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 h-32 resize-none", placeholder: "Tell me about your project...", whileFocus: { scale: 1.02 } })] }), _jsxs(motion.button, { type: "submit", disabled: isLoading, className: "bg-gradient-to-r from-primary to-accent text-background px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 disabled:opacity-50 relative overflow-hidden", initial: { y: 20, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: { delay: 0.4 }, whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 }, children: [_jsx(AnimatePresence, { mode: "wait", children: isLoading ? (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center justify-center gap-2", children: [_jsx(motion.div, { className: "w-4 h-4 border-2 border-background border-t-transparent rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" } }), "Sending..."] }, "loading")) : (_jsx(motion.span, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: "Send Message" }, "send")) }), _jsx(motion.div, { className: "absolute inset-0 bg-white/20", initial: { x: "-100%" }, whileHover: { x: "100%" }, transition: { duration: 0.6 } })] })]
        })]
    }));
};
export default ContactForm;
