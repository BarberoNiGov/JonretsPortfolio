import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <ChevronDown size={32} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with 5 years of experience building modern web applications. 
                I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find me 
                contributing to open-source projects or writing technical articles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillBadge name="React" level={90} />
            <SkillBadge name="TypeScript" level={85} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="AWS" level={75} />
            <SkillBadge name="Python" level={70} />
            <SkillBadge name="Docker" level={65} />
            <SkillBadge name="GraphQL" level={60} />
            <SkillBadge name="MongoDB" level={80} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-white" id="projects">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured e-commerce platform built with React, Node.js, and MongoDB"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
              tags={['React', 'Node.js', 'MongoDB']}
              link="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A real-time task management application with team collaboration features"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              tags={['React', 'Firebase', 'Tailwind']}
              link="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:john@example.com"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;