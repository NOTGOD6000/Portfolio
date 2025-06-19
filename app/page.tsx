"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Users,
  Lightbulb,
  Target,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Python", icon: Code, level: 85 },
    { name: "C/C++", icon: Code, level: 75 },
    { name: "HTML/CSS", icon: Globe, level: 80 },
    { name: "Git", icon: Database, level: 70 },
    { name: "Problem Solving", icon: Lightbulb, level: 90 },
    { name: "Team Collaboration", icon: Users, level: 85 },
  ]

  const projects = [
    {
      title: "Smart Calculator",
      description:
        "A feature-rich calculator built with Python featuring advanced mathematical operations and a clean GUI interface.",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      tags: ["Python", "Tkinter", "Mathematics"],
    },
    {
      title: "Personal Website",
      description:
        "Responsive portfolio website showcasing my projects and skills, built with modern web technologies.",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Data Structures Visualizer",
      description:
        "Interactive tool to visualize common data structures and algorithms, helping students understand complex concepts.",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      tags: ["C++", "Algorithms", "Education"],
    },
    {
      title: "Campus Event Manager",
      description:
        "Collaborative project for managing university events with features for registration and notifications.",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      demo: "#",
      tags: ["Python", "Database", "Teamwork"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Sehaj</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 px-4 capitalize text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">Sehaj</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                Aspiring Engineer | Passionate About Innovation and Technology
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl">
                First-year engineering student with a curiosity for solving complex problems and building innovative
                solutions that make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  View My Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Sehaj - Engineering Student"
                  className="rounded-full w-80 h-80 object-cover shadow-2xl border-8 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                  <Code size={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <ChevronDown
              size={32}
              className="text-gray-400 animate-bounce mx-auto cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know more about my journey, interests, and what drives my passion for engineering
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a first-year engineering student, I'm embarking on an exciting journey to understand how technology
                shapes our world. My curiosity drives me to explore various fields within engineering, from software
                development to innovative problem-solving approaches.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe in the power of collaboration and continuous learning. Every project I work on is an
                opportunity to grow, whether it's mastering a new programming language or working with teammates to
                tackle complex challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding or studying, I enjoy exploring new technologies, participating in hackathons, and
                contributing to open-source projects that align with my values of innovation and community impact.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="text-blue-600" size={20} />
                    Core Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Curiosity", "Creativity", "Teamwork", "Innovation", "Integrity", "Excellence"].map((value) => (
                      <Badge key={value} variant="secondary" className="bg-blue-100 text-blue-800">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="text-green-600" size={20} />
                    Interests & Hobbies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Artificial Intelligence & Machine Learning</li>
                    <li>• Sustainable Technology Solutions</li>
                    <li>• Open Source Contributions</li>
                    <li>• Tech Meetups & Conferences</li>
                    <li>• Photography & Digital Art</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A growing collection of technical and soft skills I've developed through coursework and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <skill.icon className="text-blue-600" size={24} />
                    </div>
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Proficiency</span>
                      <span className="font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work, from academic assignments to personal experiments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project idea, want to collaborate, or just want to say hello, I'd love to hear from
                you. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">sehaj@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Linkedin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <p className="text-gray-600">linkedin.com/in/sehaj</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Github className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">GitHub</p>
                    <p className="text-gray-600">github.com/sehaj</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your full name" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sehaj</h3>
              <p className="text-gray-400 leading-relaxed">
                Aspiring engineer passionate about innovation and technology. Always learning, always building.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Sehaj. All rights reserved. Built with passion and Next.js.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
