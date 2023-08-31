import React from "react";
import profilePic from "../profilepicgrad.jpg";
export default function About() {
  return (
    
    <section id="about">
      <div className="flex flex-row mt-24 px-16 justify-end gap-8">
        <div className="flex flex-col">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          👋 Hello! I'm Sarath.
            <br className="hidden lg:inline-block" /> Computer Science is fun and exciting.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
    <p><strong>🎓 Educational Background:</strong> I hold a Master's degree in Computer Science from the prestigious University of Central Florida.</p>
    <p><strong>🔧 Technical Proficiency:</strong> With a strong command over Programming Languages, Frameworks, Databases and Tools, I pride myself on being a versatile developer. My certifications from Oracle, AWS, and Azure further attest to my commitment to continuous learning.</p>
    <p><strong>🌐 Professional Experience:</strong> I've made significant contributions to open-source projects like <strong>LinkLeap</strong> and <strong>AppSmith</strong>. My tenure as a Software Engineer Intern in India saw the successful development and deployment of a student app, catering to over 35,000 users.</p>
    <p><strong>🚀 Recent Projects:</strong> My project, <strong>CalorieCaptain</strong>, is a testament to my skills, where I seamlessly integrated React, Java, Spring Boot, and Azure to create a robust nutrition tracker.</p>
    <p><strong>🏆 Accolades:</strong> Beyond tech, I've showcased my dedication and competitive spirit with accolades in badminton from both the University of Florida and UCF.</p>
    <p><strong>🤝 Let's Connect:</strong> I'm on the lookout for dynamic SDE roles where I can leverage my skills, learn, and contribute. If you're seeking a dedicated, results-driven developer with a proven track record, <a href="mailto:sarath.mannam13@gmail.com">I'd love to 👉 chat!</a></p>

          </p>
         
        </div>
      <div className="container self-center">
          <img
            className="rounded"
            alt="hero"
            src={profilePic}
          />
        </div>
    </div>
    <div className="flex justify-center ">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
          
    </section>
  );
}


