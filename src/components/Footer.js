import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const socials = [
    { href: "https://www.linkedin.com/in/anshul-rawal-54b075282/", icon: FaLinkedin },
    { href: "https://github.com/anshul2071", icon: FaGithub },
    { href: "mailto:anshul2071@gmail.com", icon: MdEmail },
];
const Footer = () => {
    return (_jsxs(motion.footer, { className: "py-6 text-center bg-background/80 backdrop-blur-md relative overflow-hidden", initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, children: [_jsx("div", { className: "absolute inset-0 opacity-30", children: _jsx(motion.div, { className: "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent", animate: {
                        scaleX: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }, transition: { duration: 3, repeat: Infinity } }) }), _jsx(motion.div, { className: "flex justify-center space-x-6 mb-4 relative z-10", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: socials.map((soc, index) => (_jsxs(motion.a, { href: soc.href, target: "_blank", rel: "noreferrer", className: "hover:text-accent transition-colors duration-300 relative group", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: 0.3 + index * 0.1 }, whileHover: {
                        scale: 1.1,
                        y: -5,
                        textShadow: "0 0 10px rgba(var(--accent), 0.8)"
                    }, whileTap: { scale: 0.95 }, children: [_jsx(soc.icon, { className: "w-6 h-6" }), _jsx(motion.div, { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300", whileHover: { width: "100%" } }), _jsx(motion.div, { className: "absolute inset-0 bg-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10", whileHover: {
                                scale: 1.2,
                                opacity: 0.3
                            } })] }, soc.href))) }), _jsx(motion.p, { className: "text-sm text-primary/60 relative z-10", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { delay: 0.6 }, children: _jsxs(motion.span, { animate: {
                        opacity: [0.6, 1, 0.6]
                    }, transition: { duration: 2, repeat: Infinity }, children: ["\u00A9 ", new Date().getFullYear(), " Anshul Rawal. All rights reserved."] }) }), _jsx("div", { className: "absolute inset-0 pointer-events-none", children: [...Array(5)].map((_, i) => (_jsx(motion.div, { className: "absolute w-1 h-1 bg-accent/40 rounded-full", initial: {
                        x: Math.random() * window.innerWidth,
                        y: 100,
                        opacity: 0
                    }, animate: {
                        y: -20,
                        opacity: [0, 1, 0]
                    }, transition: {
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                    } }, i))) })] }));
};
export default Footer;
