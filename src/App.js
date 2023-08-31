import React from "react";
import About from "./components/About";
import Academics from "./components/Academics";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Peers from "./components/Peers";
import Blogs from "./components/Blogs";
import Experience from "./components/Experience";
import Leetcode from "./components/leetcode";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Certifications/>
      <Academics/>
      <Blogs/>
      <Projects />
      <Leetcode/>
      <Skills />
      <Peers />
      <Contact />
    </main>
  );
}