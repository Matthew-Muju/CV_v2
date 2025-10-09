'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, Github, MapPin, Calendar, Briefcase, GraduationCap, Award, Code, ChevronDown, ExternalLink, Menu, X, Download } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['home', 'experience', 'education', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const workExperience = [
    {
      title: "Casemix Staff",
      company: "Siloam Hospital Paal Dua, Manado",
      period: "Jun 2025 – Present",
      description: "Verified completeness of medical records (physical & digital). Organized documentation to maintain accurate patient folders. Collaborated with medical and admin teams for compliance.",
      type: "full-time"
    },
    {
      title: "Front Office Assistant",
      company: "Siloam Hospital Paal Dua, Manado",
      period: "Mar 2025 – May 2025",
      description: "Handled patient registration and appointment scheduling. Educated patients on hospital policies, improving satisfaction. Processed payments and managed front-office documentation.",
      type: "full-time"
    },
    {
      title: "Staff ALC",
      company: "PT Lotte Shopping Indonesia",
      period: "Sep 2020 – May 2024",
      description: "Led inventory and transaction verification, reducing discrepancies. Provided IT and network support for smooth operations. Streamlined data management processes for efficiency.",
      type: "full-time"
    }
  ]

  const projects = [
    {
      title: "JASKUB (Jasa Kuli Bangunan)",
      description: "Android app connecting clients with construction workers. Features: real-time tracking, negotiation, worker-client matching.",
      tech: ["React Native", "JavaScript", "Firebase", "Google Maps API"],
      type: "mobile"
    },
    {
      title: "Professional Portfolio Website",
      description: "Modern, responsive portfolio website showcasing skills, projects, and professional experience. Features smooth animations, mobile-first design, and interactive user interface.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
      type: "web"
    }
  ]

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "PHP", "C++", "C#", "Java", "HTML", "CSS"],
    "Technologies": ["MySQL", "React (basic)", "Git", "Figma", "Blender", "Unity", "Photoshop", "Linux", "Windows Server 2012"],
    "Soft Skills": ["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability"]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">Matthew Muju</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'experience', 'education', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              {['home', 'experience', 'education', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left capitalize py-2 px-4 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-primary ${
                    activeSection === section ? 'text-primary bg-slate-50' : 'text-slate-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 group animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/40 rounded-full animate-pulse scale-110 opacity-75 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                <img
                  src="https://z-cdn-media.chatglm.cn/files/993b7bf2-910f-419c-8d97-c024562827fb_WhatsApp%20Image%202025-10-08%20at%2009.09.56.jpeg?auth_key=1791523355-9ce32697f3154acf8caebb509e1dcc40-0-0d6e9d9349573dc4ba0a3f4af5b75ee1"
                  alt="Matthew Muju Profile"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg">
                <div className="w-full h-full rounded-full bg-green-500 animate-ping absolute"></div>
              </div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-blue-500 rounded-full border-3 border-white shadow-lg"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Matthew Muju
            </h1>
            <p className="text-xl text-slate-600 mb-6">Computer Science Graduate & Full Stack Developer</p>
            <p className="text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Computer Science graduate with expertise in web and mobile development, administration, and technical support. 
              Skilled in Python, JavaScript, PHP, C++, and C#. Strong problem-solving and teamwork abilities with proven experience in hospital operations and IT systems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>Tomohon, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-4 h-4" />
              <span>mujumatthew@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Github className="w-4 h-4" />
              <span>github.com/Matthew-Muju</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-primary text-primary-foreground">
              Get In Touch
            </Button>
            <Button onClick={() => scrollToSection('projects')} variant="outline" size="lg">
              View Projects
            </Button>
            <Button variant="secondary" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-slate-400" />
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className={`py-20 px-4 transition-all duration-1000 ${
        visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-slate-600">My professional journey</p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-700">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-4 bg-white/50 transition-all duration-1000 ${
        visibleSections.has('education') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-slate-600">Academic background</p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">Bachelor of Technology (Informatics)</CardTitle>
                  <CardDescription className="text-lg font-medium text-slate-700 mb-2">
                    Universitas Klabat – Airmadidi
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>Graduated 2023</span>
                    <Badge variant="secondary">Magna Cum Laude</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Focused on programming, web development, database management, and networking.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Adobe Certified Professional (ACP)</p>
                    <p className="text-sm text-slate-500">Universitas Klabat (2023–2026)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 transition-all duration-1000 ${
        visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-slate-600">Featured work and applications</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.type === 'mobile' ? 'default' : project.type === 'web' ? 'secondary' : 'outline'}>
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 bg-white/50 transition-all duration-1000 ${
        visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-slate-600">Technical and soft skills</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Languages</h3>
                <div className="flex justify-center gap-6">
                  <div>
                    <p className="font-medium">English</p>
                    <Badge variant="outline">Fluent</Badge>
                  </div>
                  <div>
                    <p className="font-medium">Indonesian</p>
                    <Badge variant="outline">Native</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 transition-all duration-1000 ${
        visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-600">Let's connect and discuss opportunities</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:mujumatthew@gmail.com" className="text-slate-700 hover:text-primary transition-colors">
                    mujumatthew@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-slate-700">0858-2510-0962 / 0878-8252-8062</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Github className="w-5 h-5 text-primary" />
                  <a href="https://github.com/Matthew-Muju" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-primary transition-colors flex items-center gap-1">
                    github.com/Matthew-Muju
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-slate-700">Tomohon, Indonesia</span>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <a href="mailto:mujumatthew@gmail.com">Send Email</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/Matthew-Muju" target="_blank" rel="noopener noreferrer">
                    View GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Matthew Muju. Built with Next.js and TypeScript.
          </p>
        </div>
      </footer>
    </div>
  )
}