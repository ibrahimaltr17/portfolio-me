import React, { useState, useEffect } from "react";
import background from "./assets/wallpaperflare.com_wallpaper.jpg";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Heroarea from "./components/Heroarea/Heroarea";
import SkillSection from "./components/SkillSection/SkillSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

const sections = ["hero", "about", "skills", "projects", "education", "contact"];

const App = () => {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const offsets = sections.map((id) =>
                document.getElementById(id)?.offsetTop || 0
            );

            for (let i = offsets.length - 1; i >= 0; i--) {
                if (scrollPosition + 150 >= offsets[i]) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center bg-fixed text-white"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Full-page blur overlay */}
            <div className="absolute inset-0 backdrop-blur-xl bg-black/40 z-0"></div>

            {/* Navbar */}
            <Navbar />

            {/* Main content layout */}
            <div className="relative z-10 flex pt-16">
                {/* Sidebar */}
                <Sidebar sections={sections} activeSection={activeSection} />

                {/* Scrollable main content */}
                <div className="flex-1 min-h-screen overflow-y-auto px-6 md:px-10 py-6 md:py-10 
                        ml-0 md:ml-32 space-y-16">
                    <section id="hero">
                        <Heroarea />
                    </section>

                    <section id="about">
                        <AboutMe />
                    </section>

                    <section id="skills">
                        <SkillSection />
                    </section>

                    <section id="projects">
                        <Projects />
                    </section>

                    <section id="education">
                        <Education />
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
