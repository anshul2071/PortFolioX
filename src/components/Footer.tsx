import * as React from "react";
import {motion} from 'framer-motion';

const socials = [
    {href :"https://www.linkedin.com/in/anshulrawal/", label: "LinkedIn"},
    {href : "https://github.com/anshulrawal", label: "GitHub"},
    {href: "mailto:anshul2071@gmail.com", label: "Email"}
];

const Footer: React.FC = () => {
    return (
        <motion.footer  
           className="py-6 text-center bg-background/80 backdrop-blur-md relative overflow-hidden"
           initial = {{y:50, opacity: 0}}
           whileInView={{y:0, opacity: 1}}
           viewport={{once: true}}
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                    animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{duration: 3, repeat: Infinity}}
                />
            </div>

            <motion.div 
                className="flex justify-center space-x-6 mb-4 relative z-10"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
            >
                {socials.map((soc, index) => (
                    <motion.a 
                       key={soc.href}
                       href={soc.href}
                       target="_blank"
                       rel="noreferrer"
                       className="hover:text-accent transition-colors duration-300 relative group"
                       initial={{opacity: 0, y: 20}}
                       whileInView={{opacity: 1, y: 0}}
                       transition={{delay: 0.3 + index * 0.1}}
                       whileHover={{
                           scale: 1.1,
                           y: -5,
                           textShadow: "0 0 10px rgba(var(--accent), 0.8)"
                       }}
                       whileTap={{scale: 0.95}}
                    >
                        {soc.label}
                        
                        {/* Hover underline effect */}
                        <motion.div
                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                            whileHover={{width: "100%"}}
                        />
                        
                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 bg-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                            whileHover={{
                                scale: 1.2,
                                opacity: 0.3
                            }}
                        />
                    </motion.a>
                ))}
            </motion.div>

            <motion.p 
                className="text-sm text-primary/60 relative z-10"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.6}}
            >
                <motion.span
                    animate={{
                        opacity: [0.6, 1, 0.6]
                    }}
                    transition={{duration: 2, repeat: Infinity}}
                >
                    © {new Date().getFullYear()} Anshul Rawal. All rights reserved.
                </motion.span>
            </motion.p>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent/40 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: 100,
                            opacity: 0
                        }}
                        animate={{
                            y: -20,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>
        </motion.footer>
    )
}

export default Footer;
