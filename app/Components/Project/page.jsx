'use client'
import React, { Suspense, useRef, useState } from 'react'
import Link from 'next/link'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Box, Torus } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Code, 
  Database, 
  Brain, 
  Globe, 
  Smartphone, 
  Server,
  Eye,
  Calendar,
  Tag,
  Star,
  GitBranch,
  Users
} from 'lucide-react'

// 3D Animated Geometric Shapes
function AnimatedGeometry() {
  const sphereRef = useRef()
  const boxRef = useRef()
  const torusRef = useRef()
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.elapsedTime * 0.1
      boxRef.current.rotation.z = state.clock.elapsedTime * 0.4
    }
    if (torusRef.current) {
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.6
    }
  })

  return (
    <>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1.5, 100, 200]} position={[-3, 2, -4]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[3, -2, -3]}>
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.1}
          />
        </Box>
      </Float>
      
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={2.5}>
        <Torus ref={torusRef} args={[1, 0.4, 16, 100]} position={[0, 3, -5]}>
          <MeshDistortMaterial
            color="#f59e0b"
            attach="material"
            distort={0.2}
            speed={1.8}
            roughness={0}
          />
        </Torus>
      </Float>
    </>
  )
}

// Project Card Component
function ProjectCard({ project, index, onView }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group"
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <project.icon className="w-16 h-16 text-white" />
        </motion.div>
        
        {/* Tech Stack Pills */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-black/50 text-white rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Overlay Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onView(project)}
            className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <Eye className="w-5 h-5 text-white" />
          </motion.button>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <Github className="w-5 h-5 text-white" />
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">{project.stars}</span>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <GitBranch className="w-3 h-3" />
            <span>{project.commits} commits</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Project Detail Modal
function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      subtitle: "Smart productivity application with ML recommendations",
      description: "A full-stack task management app that uses machine learning to predict task priorities and suggest optimal scheduling.",
      fullDescription: "This project combines modern web development with artificial intelligence to create a smart task management system. The application learns from user behavior and uses machine learning algorithms to predict task priorities, suggest optimal scheduling, and provide personalized productivity insights.",
      icon: Brain,
      category: "AI/ML",
      techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "Express"],
      features: [
        "AI-powered task prioritization",
        "Smart scheduling recommendations", 
        "Real-time collaboration",
        "Analytics dashboard",
        "Mobile responsive design"
      ],
      githubUrl: "https://github.com/username/ai-task-manager",
      liveUrl: "https://ai-task-manager.demo.com",
      date: "2024",
      stars: 128,
      commits: 247
    },
    {
      id: 2,
      title: "Distributed Chat System",
      subtitle: "Real-time messaging with microservices architecture",
      description: "A scalable chat application built with microservices, featuring real-time messaging, file sharing, and user presence.",
      fullDescription: "A comprehensive real-time chat system designed with microservices architecture for maximum scalability. Features include instant messaging, file sharing, user presence indicators, and robust message delivery guarantees using WebSocket connections and message queues.",
      icon: Server,
      category: "Backend",
      techStack: ["Node.js", "Socket.io", "Redis", "Docker", "Kubernetes", "PostgreSQL"],
      features: [
        "Real-time messaging",
        "File sharing capabilities",
        "User presence indicators",
        "Message encryption",
        "Scalable microservices"
      ],
      githubUrl: "https://github.com/username/distributed-chat",
      liveUrl: null,
      date: "2024",
      stars: 89,
      commits: 189
    },
    {
      id: 3,
      title: "E-Commerce Analytics Platform",
      subtitle: "Data visualization dashboard for business insights",
      description: "A comprehensive analytics platform that processes large datasets to provide actionable business insights and predictions.",
      fullDescription: "Built for e-commerce businesses to track performance metrics, analyze customer behavior, and predict sales trends. The platform processes millions of data points in real-time and presents them through interactive visualizations and automated reports.",
      icon: Database,
      category: "Data Science",
      techStack: ["Python", "Django", "PostgreSQL", "D3.js", "Docker", "Apache Kafka"],
      features: [
        "Real-time data processing",
        "Interactive visualizations",
        "Predictive analytics",
        "Automated reporting",
        "Custom dashboard builder"
      ],
      githubUrl: "https://github.com/username/ecommerce-analytics",
      liveUrl: "https://analytics-demo.com",
      date: "2023",
      stars: 156,
      commits: 312
    },
    {
      id: 4,
      title: "Mobile Fitness Tracker",
      subtitle: "Cross-platform app with health monitoring",
      description: "A React Native fitness application with workout tracking, nutrition logging, and social features.",
      fullDescription: "A comprehensive fitness tracking application that helps users monitor their health goals, track workouts, log nutrition, and connect with friends. Built with React Native for cross-platform compatibility and includes integration with wearable devices.",
      icon: Smartphone,
      category: "Mobile",
      techStack: ["React Native", "Expo", "Firebase", "Redux", "Node.js", "MongoDB"],
      features: [
        "Workout tracking",
        "Nutrition logging",
        "Social features",
        "Wearable integration",
        "Progress analytics"
      ],
      githubUrl: "https://github.com/username/fitness-tracker",
      liveUrl: null,
      date: "2023",
      stars: 94,
      commits: 156
    },
    {
      id: 5,
      title: "Portfolio Website",
      subtitle: "3D animated personal portfolio with Three.js",
      description: "Modern portfolio website featuring 3D animations, smooth interactions, and responsive design.",
      fullDescription: "This very portfolio website you're viewing! Built with Next.js and Three.js to create an immersive 3D experience. Features include animated geometric shapes, smooth page transitions, and a fully responsive design optimized for all devices.",
      icon: Globe,
      category: "Frontend",
      techStack: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "React"],
      features: [
        "3D animations with Three.js",
        "Smooth page transitions",
        "Responsive design",
        "Interactive elements",
        "Modern UI/UX"
      ],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://your-portfolio.com",
      date: "2024",
      stars: 67,
      commits: 98
    },
    {
      id: 6,
      title: "Code Collaboration Tool",
      subtitle: "Real-time code editor with team features",
      description: "A collaborative coding platform allowing multiple developers to work together in real-time with integrated version control.",
      fullDescription: "A sophisticated code collaboration platform that enables teams to write, review, and debug code together in real-time. Features include synchronized editing, voice/video chat, integrated terminal, and seamless Git integration for version control.",
      icon: Code,
      category: "Developer Tools",
      techStack: ["TypeScript", "Socket.io", "Monaco Editor", "WebRTC", "Docker", "Git"],
      features: [
        "Real-time collaborative editing",
        "Integrated voice/video chat",
        "Terminal access",
        "Git integration",
        "Code review tools"
      ],
      githubUrl: "https://github.com/username/code-collab",
      liveUrl: "https://code-collab.demo.com",
      date: "2024",
      stars: 203,
      commits: 278
    }
  ]

  const categories = ['all', 'AI/ML', 'Backend', 'Frontend', 'Mobile', 'Data Science', 'Developer Tools']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const handleViewProject = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={300} depth={60} count={800} factor={5} />
            <AnimatedGeometry />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center p-6 md:p-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-indigo-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-indigo-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/projects" className="text-indigo-400 font-medium">
              Projects
            </Link>
          </div>
        </motion.nav>

        <div className="px-6 md:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                My
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Projects
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A showcase of my technical skills and creative problem-solving through 
                various software development projects.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onView={handleViewProject}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default ProjectPage