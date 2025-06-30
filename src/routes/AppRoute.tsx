import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

const AppRoute: React.FC = () => (
  <main className="pt-20"> {/* offset for your fixed NavBar */}
    <section id="hero">
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="experience">
      <Experience />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="contact">
      <ContactForm />
    </section>
  </main>
);

export default AppRoute;
