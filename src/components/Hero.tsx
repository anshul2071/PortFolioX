import * as React from "react";
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from 'react-icons/md'
import { FaUpwork } from "react-icons/fa6";

const codeSnippet = `const developer = (Profile) => {
    const dedicatedProfessional: boolean: true;
    const hardWorking: boolean: true;
    const teamPlayer: boolean: true;
    const solutionOriented: boolean: true;

    const profile: Profile = {
      name: "Anshul Rawal",
      title: "Software Developer",
      skills: [
      "React", "Node.js", "Next.js", "TailwindCSS", "TypeScript", "JavaScript", "HTML", "CSS",
    
      ]

      hireable: true,
      
      };

    return profile;
  }
}`

const Hero: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set(event.clientX - centerX);
        mouseY.set(event.clientY - centerY);
    };


    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 lg:px-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.6, 0.3, 0.6],
                        x: [0, -30, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            <div className="space-y-6 text-center md:text-left relative z-10">
                <motion.p
                    className="text-lg"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, color: "var(--accent)" }}
                >
                    Hello My Name is
                </motion.p>

                <motion.h1
                    className="text-5xl md:text-7xl font-display font-bold leading-tight"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-gray-500"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Anshul Rawal
                    </motion.span>
                </motion.h1>

                <motion.h2
                    className="text-3xl md:text-4xl font-semibold flex items-center justify-center md:justify-start"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Software Developer
                    <motion.span
                        className="ml-2 w-3 h-3 bg-accent rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.h2>

                <motion.div
                    className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button asChild>
                            <motion.a
                                href="port-folio/src/downloads/Anshul_s_Resume.pdf"
                                download={true}
                                className="px-6 py-3 bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                            >
                                Download Resume
                            </motion.a>
                        </Button>
                    </motion.div>

                    <div className="relative inline-block text-left">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant={"outline"}
                                className="px-6 py-3 flex items-center space-x-2 hover:bg-accent/10 transition-all duration-300"
                                onClick={() => {
                                    document.getElementById('about')?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                <span>More About Me</span>
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <ChevronDown size={16} className="w-4 h-4" />
                                </motion.div>
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="text-sm text-muted-foreground max-w-md mx-auto md:mx-0 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <span>Connect With me on</span>
                    <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                        <motion.a
                            href="https://www.linkedin.com/in/anshul-rawal-54b075282/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center space-x-1 hover:text-accent transition-colors duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <FaLinkedin size={20} />
                            </motion.div>
                            <span>LinkedIn</span>
                        </motion.a>

                        <motion.a
                            href="https://www.github.com/anshul2071"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center space-x-1 hover:text-accent transition-colors duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, -360] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            >
                                <FaGithub size={20} />
                            </motion.div>
                            <span>GitHub</span>
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/anshul-rawal-54b075282/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center space-x-1 hover:text-accent transition-colors duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <FaUpwork size={20} />
                            </motion.div>
                            <span>Upwork</span>
                        </motion.a>

                        <span>or send me an email</span>

                        <motion.a
                            href="mailto:anshul2071@gmail.com"
                            className="inline-flex items-center space-x-1 hover:text-accent transition-colors duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <MdEmail size={20} />
                            </motion.div>
                            <span>Email</span>
                        </motion.a>
                        <span>.</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="flex justify-center md:justify-end relative z-10"
                onMouseMove={handleMouseMove}
                style={{ perspective: 1000 }}
            >
                <motion.pre
                    className="p-6 bg-card text-card-foreground rounded-2xl overflow-auto font-mono text-sm leading-relaxed shadow-neumorph max-w-lg border border-accent/20"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        rotateX,
                        rotateY,
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                        backdropFilter: "blur(20px)"
                    }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                >
                    <motion.code
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        {codeSnippet}
                    </motion.code>

                    {/* Typing cursor effect */}
                    <motion.span
                        className="inline-block w-2 h-5 bg-accent ml-1"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </motion.pre>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
        </section>
    );
}

export default Hero;
