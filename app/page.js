'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { 
  Code, Database, Cpu, Terminal, Github, Linkedin, Mail, ChevronDown, 
  User, GraduationCap, Award, Brain, Target, Coffee, Book, Lightbulb,
  Download, ExternalLink, MapPin, Calendar, Phone, Folder, Eye,
  Sparkles, Zap, Globe, Menu, X, Monitor, Keyboard, Mouse, Wifi,
  Server, FileCode, GitBranch, Package, Settings, Layers,
  Trophy, Briefcase, Shield, Certificate, FileText, Star, CheckCircle,
  Medal, Bookmark
} from 'lucide-react'

// 2D Programmer Illustrations Components
function ProgrammerIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Code Snippets */}
        {[
          { code: "const", top: "10%", left: "10%", delay: 0 },
          { code: "{ }", top: "20%", right: "15%", delay: 0.5 },
          { code: "=>", top: "30%", left: "20%", delay: 1 },
          { code: "async", top: "40%", right: "10%", delay: 1.5 },
          { code: "function", top: "60%", left: "15%", delay: 2 },
          { code: "return", top: "70%", right: "20%", delay: 2.5 },
          { code: "import", top: "80%", left: "25%", delay: 3 },
          { code: "</div>", top: "15%", left: "60%", delay: 3.5 }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -10, 0] }}
            transition={{ 
              delay: item.delay,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-indigo-400 font-mono text-sm md:text-base font-bold"
            style={{ 
              top: item.top, 
              left: item.left, 
              right: item.right 
            }}
          >
            {item.code}
          </motion.div>
        ))}
      </div>

      {/* Central Programming Icons */}
      <div className="relative z-10 grid grid-cols-3 gap-8 p-8">
        {[
          { Icon: Code, color: "text-yellow-400", delay: 0.2 },
          { Icon: Terminal, color: "text-green-400", delay: 0.4 },
          { Icon: Database, color: "text-blue-400", delay: 0.6 },
          { Icon: Server, color: "text-purple-400", delay: 0.8 },
          { Icon: GitBranch, color: "text-orange-400", delay: 1.0 },
          { Icon: Settings, color: "text-cyan-400", delay: 1.2 }
        ].map(({ Icon, color, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className={`${color} p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300`}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Orbiting Elements */}
      <div className="absolute inset-0">
        {[
          { tech: "JS", color: "#f7df1e", angle: 0 },
          { tech: "React", color: "#61dafb", angle: 60 },
          { tech: "Node", color: "#339933", angle: 120 },
          { tech: "TS", color: "#3178c6", angle: 180 },
          { tech: "CSS", color: "#06b6d4", angle: 240 },
          { tech: "HTML", color: "#e34f26", angle: 300 }
        ].map((item, index) => (
          <motion.div
            key={item.tech}
            className="absolute w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
            style={{ backgroundColor: item.color }}
            initial={{ 
              x: "50%", 
              y: "50%",
              rotate: item.angle 
            }}
            animate={{
              rotate: item.angle + 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.3
            }}
            transformTemplate={({ rotate }) => {
              const radius = 150;
              const x = Math.cos((rotate * Math.PI) / 180) * radius;
              const y = Math.sin((rotate * Math.PI) / 180) * radius;
              return `translate(${x}px, ${y}px)`;
            }}
          >
            {item.tech}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function LaptopIllustration() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 400,
      y: Math.random() * 300,
      delay: Math.random() * 3
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Laptop SVG Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <svg viewBox="0 0 400 300" className="w-80 h-60">
          {/* Laptop Base */}
          <rect x="50" y="200" width="300" height="20" rx="10" fill="#1a1a1a" />
          
          {/* Laptop Screen */}
          <rect x="80" y="80" width="240" height="130" rx="5" fill="#2d3748" />
          <rect x="90" y="90" width="220" height="110" rx="3" fill="#0a0a0a" />
          
          {/* Screen Content - Code Editor */}
          <rect x="95" y="95" width="210" height="15" fill="#4a5568" />
          
          {/* Code Lines */}
          {[
            { width: 180, color: "#00ff41", y: 120 },
            { width: 160, color: "#61dafb", y: 135 },
            { width: 200, color: "#f7df1e", y: 150 },
            { width: 140, color: "#ff6b6b", y: 165 },
            { width: 190, color: "#4ecdc4", y: 180 }
          ].map((line, index) => (
            <motion.rect
              key={index}
              x="100"
              y={line.y}
              width={line.width}
              height="8"
              fill={line.color}
              initial={{ width: 0 }}
              animate={{ width: line.width }}
              transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
            />
          ))}
          
          {/* Blinking Cursor */}
          <motion.rect
            x="305"
            y="180"
            width="2"
            height="8"
            fill="#ffffff"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Keyboard */}
          <rect x="70" y="220" width="260" height="15" rx="3" fill="#2d3748" />
          
          {/* Keys */}
          {Array.from({ length: 15 }, (_, i) => (
            <rect
              key={i}
              x={80 + i * 15}
              y="225"
              width="12"
              height="5"
              rx="1"
              fill="#4a5568"
            />
          ))}
          
          {/* Trackpad */}
          <rect x="180" y="245" width="40" height="25" rx="3" fill="#1a1a1a" />
        </svg>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0">
          {[
            { Icon: FileCode, position: "top-2 left-2", color: "text-green-400" },
            { Icon: GitBranch, position: "top-2 right-2", color: "text-orange-400" },
            { Icon: Package, position: "bottom-2 left-2", color: "text-blue-400" },
            { Icon: Layers, position: "bottom-2 right-2", color: "text-purple-400" }
          ].map(({ Icon, position, color }, index) => (
            <motion.div
              key={index}
              className={`absolute ${position} ${color} p-2 rounded-lg bg-white/10 backdrop-blur-sm`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="w-5 h-5" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Code Particles - Only render after client hydration */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                opacity: 0
              }}
              animate={{
                y: [particle.y, particle.y - 20],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection('home')}
        >
          {/* Logo Icon */}
          <div className="relative">
            <motion.div 
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <span className="text-white font-bold text-lg">R</span>
            </motion.div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col leading-none">
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ backgroundPosition: "200% center" }}
              transition={{ duration: 0.8 }}
            >
              Raushan
            </motion.span>
            <span className="text-xs text-gray-400 font-medium tracking-wide">PORTFOLIO</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Certificates', id: 'certificates' },
            { name: 'Projects', id: 'projects' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-indigo-400 transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          {[
            { Icon: Github, href: "https://github.com/raushkum4590" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/raushan-kumar-a38a56295/" },
            { Icon: Mail, href: "mailto:3570kumarraushan@gmail.com" }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-4">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Certificates', id: 'certificates' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:text-indigo-400 transition-colors py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function page() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' }) // Reset form
      } else {
        setSubmitStatus('error')
        console.error('Failed to send email:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  // Data
  const skills = [
    { name: "JavaScript", level: 95, color: "#f7df1e" },
    { name: "React", level: 92, color: "#61dafb" },
    { name: "TypeScript", level: 88, color: "#3178c6" },
    { name: "Node.js", level: 90, color: "#339933" },
    { name: "Next.js", level: 85, color: "#000000" },
    { name: "MongoDB", level: 82, color: "#47a248" },
    { name: "PostgreSQL", level: 80, color: "#336791" },
    { name: "AWS", level: 75, color: "#ff9900" }
  ]

  // State for project interactions
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      title: "FormGenius",
      description: "Full-stack AI-Form Builder solution with React, Node.js, and SQL. Features include user authentication and payment integration.",
      tech: ["React", "Node.js", "SQL", "Stripe"],
      image: "/form.png",
      live: "https://formgennius.vercel.app/"
    },
    {
      title: "Food Donation",
      description: "Food Donation web app with real-time chat application with AI integration using OpenAI API. Features include message history, user rooms, and intelligent responses.",
      tech: ["Next.js", "OpenAI", "Prisma"],
      image: "/food.png",
     
      live: "https://fooddonation-2gpo.vercel.app/"
    },
    {
      title: "Designipy",
      description: "Collaborative Design management tool with drag-and-drop functionality, team collaboration, and progress tracking.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      image: "/design.png",
      live: "https://designpy-juqq.vercel.app/"
    },
    {
      title: "Weather Intelligence",
      description: "Data visualization dashboard for weather analytics with interactive charts, forecasting, and location-based insights.",
      tech: ["React", "openWeather", "Tailwind CSS"],
      image: "/weather.png",
      live: "https://weathers-one-delta.vercel.app/"
    },
     {
      title: "AI PDF ASSISTANT",
      description: "AI-powered PDF assistant for document analysis and summarization.",
      tech: ["React", "Node.js", "OpenAI"],
      image: "/ai-pdf.png",
      live: "https://glittering-flan-cea003.netlify.app/"
    },
     {
      title: "AI Interview",
      description: "AI-powered interview preparation tool with personalized question generation and performance tracking.",
      tech: ["React", "Node.js", "OpenAI"],
      image: "/ai-interview.png",
      live: "https://ai-recruiter-nu.vercel.app/"
    },

  ]

  const achievements = [
   
     {
      year: "2024", 
      title: "Hackathon",
      description: "Participated in Navikshaa Dev Battleground Hackathon for innovative web development solution",
      icon: Trophy
    },
     {
      year: "2023",
      title: "Internship",
      description: "Full Stack  Development Intern at leading Edunet Foundation",
      icon: Briefcase
    },
   
    {
      year: "2022",
      title: "React Specialist",
      description: "Specialized in React ecosystem and state management",
      icon: Code
    },
    {
      year: "2021",
      title: "First Production App",
      description: "Deployed first full-stack application to production",
      icon: GraduationCap
    }
  ]

  const certificates = [
    {
      title: "Hackathon",
      issuer: "Navikshaa Dev Battleground Hackathon",
      date: "2025",
    
      skills: ["React", "JavaScript", "Node.js", "SQL"],
      icon: Certificate,
      verified: true,
      description: "Comprehensive program covering React fundamentals, advanced React concepts, and front-end development best practices.",
      image:"/hack.png"
    },
    {
      title: "Internship",
      issuer: "Edunet Foundation",
      date: "2025",
      
      credentialId: "AICTENG25_34173",
      skills: ["React", "Mongodb","Nodejs", "Express", "JavaScript"],
      icon: Shield,
      verified: true,
      description: "Foundational understanding of Full Stack Web Development.",
      image: "/intern.png"
    },
    {
      title: "Ai and Cloud Computing",
      issuer: "Edunet Foundation",
      date: "2024",
      skills: ["AI", "Data Science", "Machine Learning", "Cloud Computing"],
      icon: FileText,
      verified: true,
      description: "Foundational understanding of IBM cloud concepts, services, security, architecture, pricing, and support.",
      image: "/ibm.png"
    },
    {
      title: "Internship",
      issuer: "A Joint Csr Initiative of Microsoft and  SAP",
      date: "2024",
   
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
      icon: Brain,
      verified: true,
      description: "Artificial Intelligence concepts including supervised learning, unsupervised learning, and neural networks.",
      image: "/Ai.png"
    },
    {
      title: "Internship",
      issuer: "CodeClause",
      date: "2023",

      skills: ["React","API", "JavaScript", "React", "Node.js", "Express"],
      icon: Code,
      verified: true,
      description: "Comprehensive full-stack development curriculum covering front-end and back-end technologies.",
      image: "/code.png"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Edunet Foundation",
      date: "2024",

      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
      icon: Brain,
      verified: true,
      description: "Advanced machine learning concepts including supervised learning, unsupervised learning, and neural networks.",
      image: "/llm.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Fixed Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10" />
      <div className="fixed inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20 -z-10" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <motion.span 
                className="text-lg font-semibold tracking-wide inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-gray-300">Hello, I'm</span>
                <motion.span 
                  className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-xl"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Raushan Kumar
                </motion.span>
                <motion.span
                  className="text-2xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  👋
                </motion.span>
              </motion.span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Web
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Crafting modern web applications with cutting-edge technology, 
              scalable architecture, and exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 border-2 border-white/20 rounded-2xl font-semibold text-lg hover:border-indigo-400 hover:bg-white/5 transition-all duration-300"
              >
                <span className="group-hover:text-indigo-400 transition-colors">Get In Touch</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right 2D Programmer Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[600px] relative"
          >
            <ProgrammerIllustration />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About 
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies 
              and a commitment to building scalable, user-focused applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm a passionate full-stack web developer who believes 
                  in the power of modern web technologies to create exceptional user experiences. 
                  My journey began with front-end development and evolved into full-stack expertise 
                  spanning both client and server-side technologies.
                </p>
                <p>
                  I specialize in React, Node.js, TypeScript, and cloud technologies. 
                  From responsive front-end interfaces to scalable backend APIs, 
                  I love building complete web solutions that solve real-world problems 
                  and deliver value to users and businesses.
                </p>
                <p>
                  My goal is to create web applications that are not only functional and performant, 
                  but also accessible, maintainable, and delightful to use. I'm always exploring 
                  new frameworks, tools, and best practices to stay at the forefront of web development.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Problem Solver', 'Team Collaborator', 'Tech Enthusiast', 'User-Focused'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-medium"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right 2D Laptop Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-96 relative"
            >
              <LaptopIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & 
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my web development skills and technical expertise.
            </p>
          </motion.div>

          {/* Skills Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-indigo-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievement Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">
              Key Achievements
            </h3>
            <div className="relative">
              {/* Timeline Line - Hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              
              {/* Mobile Timeline Line - Left aligned */}
              <div className="md:hidden absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-8 md:mb-12 ${
                    // Mobile: all items left-aligned, Desktop: alternating
                    index % 2 === 0 ? 'md:justify-start justify-start' : 'md:justify-end justify-start'
                  }`}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden w-full pl-16">
                    <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex-shrink-0">
                          <achievement.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-indigo-400 text-xs font-semibold">{achievement.year}</span>
                          <h4 className="text-base font-bold text-white mb-1">{achievement.title}</h4>
                          <p className="text-gray-300 text-xs leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-indigo-400 text-sm font-semibold">{achievement.year}</span>
                          <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                          <p className="text-gray-300 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Nodes */}
                  {/* Mobile Timeline Node */}
                  <div className="md:hidden absolute left-5 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-2 border-slate-900"></div>
                  
                  {/* Desktop Timeline Node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certificates & 
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Credentials
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional certifications and credentials that validate my expertise across various technologies and platforms.
            </p>
          </motion.div>

          {/* State for certificate interactions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300"
                onHoverStart={() => setExpandedProject(index + 1000)} // Use different range for certificates
                onHoverEnd={() => setExpandedProject(null)}
              >
                {/* Certificate Visual Container */}
                <div className="relative overflow-hidden h-64">
                  {/* Certificate Background with Icon */}
                  <motion.div 
                    className="relative h-full cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Certificate Image */}
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-cover"
                    />

                    {/* Hover Overlay with Certificate Details */}
                    <motion.div
                      className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center p-6 z-15"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: expandedProject === index + 1000 ? 1 : 0,
                        y: expandedProject === index + 1000 ? 0 : 20
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{ pointerEvents: expandedProject === index + 1000 ? 'auto' : 'none' }}
                    >
                      {/* Certificate Icon */}
                      <motion.div
                        className="flex justify-center mb-4"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: expandedProject === index + 1000 ? 1 : 0,
                          opacity: expandedProject === index + 1000 ? 1 : 0
                        }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                          
                        </div>
                      </motion.div>

                      {/* Certificate Title */}
                      <motion.h3 
                        className="text-lg font-bold text-white mb-2 text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: expandedProject === index + 1000 ? 0 : 20,
                          opacity: expandedProject === index + 1000 ? 1 : 0
                        }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        {certificate.title}
                      </motion.h3>

                      {/* Issuer */}
                      <motion.p 
                        className="text-indigo-400 font-medium text-sm mb-3 text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: expandedProject === index + 1000 ? 0 : 20,
                          opacity: expandedProject === index + 1000 ? 1 : 0
                        }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        Issued by {certificate.issuer}
                      </motion.p>

                      {/* Description */}
                      <motion.p 
                        className="text-gray-300 text-xs leading-relaxed mb-4 text-center line-clamp-3"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: expandedProject === index + 1000 ? 0 : 20,
                          opacity: expandedProject === index + 1000 ? 1 : 0
                        }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                      >
                        {certificate.description}
                      </motion.p>

                      {/* Skills Tags */}
                      <motion.div 
                        className="mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: expandedProject === index + 1000 ? 0 : 20,
                          opacity: expandedProject === index + 1000 ? 1 : 0
                        }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                      >
                        <div className="flex flex-wrap gap-1 justify-center">
                          {certificate.skills.slice(0, 5).map((skill, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: expandedProject === index + 1000 ? 1 : 0,
                                opacity: expandedProject === index + 1000 ? 1 : 0
                              }}
                              transition={{ delay: 0.6 + idx * 0.05, duration: 0.2 }}
                              className="px-2 py-1 text-xs bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-300 font-medium"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Credential ID */}
                      <motion.div
                        className="flex justify-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: expandedProject === index + 1000 ? 0 : 20,
                          opacity: expandedProject === index + 1000 ? 1 : 0
                        }}
                        transition={{ delay: 0.7, duration: 0.3 }}
                      >
                        <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-1">
                          <Bookmark className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-400 text-xs">ID: {certificate.credentialId}</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificate Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center mb-4">
                  <Medal className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{certificates.length}</h3>
                <p className="text-gray-300">Professional Certificates</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                <p className="text-gray-300">Verification Rate</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
                <p className="text-gray-300">Skills Validated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured 
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent web development projects and technical contributions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300"
                onHoverStart={() => setExpandedProject(index)}
                onHoverEnd={() => setExpandedProject(null)}
              >
                {/* Project Image Container */}
                <div className="relative overflow-hidden h-64">
                  {/* Main Project Image */}
                  <motion.div 
                    className="relative h-full cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Tech Stack Pills on Image - Always visible */}
                    <motion.div 
                      className="absolute top-4 left-4 flex flex-wrap gap-2 z-10"
                      animate={{ opacity: expandedProject === index ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-black/60 text-white rounded-full backdrop-blur-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-xs bg-black/60 text-white rounded-full backdrop-blur-sm font-medium">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </motion.div>

                    {/* Live Demo Button */}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors z-20"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                    )}

                    {/* Default Project Title - Hidden on hover */}
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 z-10"
                      animate={{ opacity: expandedProject === index ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <div className="text-sm text-gray-200 font-medium">
                        Hover to view details
                      </div>
                    </motion.div>

                    {/* Hover Overlay with Project Details */}
                    <motion.div
                      className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center p-6 z-15"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: expandedProject === index ? 1 : 0,
                        y: expandedProject === index ? 0 : 20
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{ pointerEvents: expandedProject === index ? 'auto' : 'none' }}
                    >
                      {/* Project Title */}
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-4 text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: expandedProject === index ? 0 : 20,
                          opacity: expandedProject === index ? 1 : 0
                        }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Project Description */}
                      <motion.p 
                        className="text-gray-300 text-sm leading-relaxed mb-4 text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: expandedProject === index ? 0 : 20,
                          opacity: expandedProject === index ? 1 : 0
                        }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Tech Stack */}
                      <motion.div 
                        className="mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: expandedProject === index ? 0 : 20,
                          opacity: expandedProject === index ? 1 : 0
                        }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.tech.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: expandedProject === index ? 1 : 0,
                                opacity: expandedProject === index ? 1 : 0
                              }}
                              transition={{ delay: 0.4 + idx * 0.05, duration: 0.2 }}
                              className="px-3 py-1 text-xs bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-300 font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Live Demo Button */}
                      {project.live && (
                        <motion.div
                          className="flex justify-center"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ 
                            y: expandedProject === index ? 0 : 20,
                            opacity: expandedProject === index ? 1 : 0
                          }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                          >
                            View Live Demo
                          </motion.a>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In 
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p>3570kumarraushan@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p>PATNA(BIHAR), INDIA</p>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { Icon: Github, href: "https://github.com/raushkum4590", color: "hover:text-gray-300" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/raushan-kumar-a38a56295/", color: "hover:text-blue-400" },
                    { Icon: Mail, href: "mailto:3570kumarraushan@gmail.com", color: "hover:text-green-400" }
                  ].map(({ Icon, href, color }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg bg-white/10 text-gray-300 ${color} transition-colors duration-300 hover:bg-white/20`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300"
                  >
                    ❌ Failed to send message. Please try again or contact me directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <p>&copy; 2024 Full Stack Web Developer Portfolio. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page