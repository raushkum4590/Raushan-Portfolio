'use client'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, MeshDistortMaterial, Float, Stars, RoundedBox } from '@react-three/drei'
import { motion } from 'framer-motion'
import { 
  User, 
  GraduationCap, 
  Award, 
  Code2, 
  Brain, 
  Target, 
  Coffee, 
  Book, 
  Lightbulb,
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Github,
  Linkedin
} from 'lucide-react'

// 3D Animated Cube Component
function AnimatedCube() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
      <RoundedBox ref={meshRef} args={[2, 2, 2]} radius={0.1} smoothness={4}>
        <MeshDistortMaterial
          color="#f59e0b"
          attach="material"
          distort={0.2}
          speed={1}
          roughness={0.1}
          metalness={0.8}
        />
      </RoundedBox>
    </Float>
  )
}

// Floating Skills Orbs
function SkillOrb({ position, color, size = 0.3 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </Sphere>
    </Float>
  )
}

export default function About() {
  const skills = [
    { name: "JavaScript", level: 95, color: "#f7df1e" },
    { name: "React", level: 90, color: "#61dafb" },
    { name: "Python", level: 85, color: "#3776ab" },
    { name: "Node.js", level: 88, color: "#339933" },
    { name: "TypeScript", level: 82, color: "#3178c6" },
    { name: "MongoDB", level: 80, color: "#47a248" },
    { name: "Machine Learning", level: 75, color: "#ff6b6b" },
    { name: "AWS", level: 70, color: "#ff9900" }
  ]

  const achievements = [
    {
      year: "2024",
      title: "Full Stack Developer Certification",
      description: "Completed comprehensive program in modern web development",
      icon: Award
    },
    {
      year: "2023", 
      title: "AI/ML Specialization",
      description: "Advanced coursework in Machine Learning and Data Science",
      icon: Brain
    },
    {
      year: "2022",
      title: "Computer Science Degree",
      description: "Bachelor's in Computer Science with honors",
      icon: GraduationCap
    },
    {
      year: "2021",
      title: "First Programming Project",
      description: "Built first web application using React and Node.js",
      icon: Code2
    }
  ]

  const philosophies = [
    {
      icon: Target,
      title: "Problem Solving",
      description: "Every challenge is an opportunity to create innovative solutions"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and so should we"
    },
    {
      icon: Coffee,
      title: "Quality Code",
      description: "Clean, efficient, and maintainable code is the foundation of great software"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10" />
      <div className="fixed inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20 -z-10" />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <User className="w-8 h-8 text-indigo-400" />
                <span className="text-indigo-400 text-xl font-semibold">About Me</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                  Passionate
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
              >
                A dedicated Computer Science professional with a passion for creating 
                innovative digital solutions that make a difference in people's lives.
              </motion.p>
            </div>

            {/* Personal Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span>Available for work</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>hello@developer.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-semibold text-lg overflow-hidden flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span className="relative z-10">Download Resume</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-white/20 rounded-2xl font-semibold text-lg hover:border-indigo-400 hover:bg-white/5 transition-all duration-300 flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="group-hover:text-indigo-400 transition-colors">View Portfolio</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex space-x-6"
            >
              {[
                { Icon: Github, href: "#", color: "hover:text-gray-300" },
                { Icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                { Icon: Mail, href: "#", color: "hover:text-green-400" }
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${color} transition-all duration-300 p-3 rounded-xl hover:bg-white/10`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[600px] relative"
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -5]} color="#8b5cf6" intensity={0.5} />
              
              <Suspense fallback={null}>
                <AnimatedCube />
                {/* Skill Orbs */}
                <SkillOrb position={[3, 2, 0]} color="#f7df1e" size={0.3} />
                <SkillOrb position={[-3, 1, 1]} color="#61dafb" size={0.25} />
                <SkillOrb position={[2, -1, -1]} color="#3776ab" size={0.35} />
                <SkillOrb position={[-2, -2, 0]} color="#339933" size={0.3} />
                <SkillOrb position={[0, 3, 1]} color="#3178c6" size={0.28} />
                <SkillOrb position={[-1, 2, -1]} color="#47a248" size={0.32} />
                <Stars radius={50} depth={50} count={800} factor={2} saturation={0} fade />
              </Suspense>
              
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                enableRotate={true}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proficiency across modern technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-indigo-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`,
                      boxShadow: `0 0 10px ${skill.color}66`
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Key milestones in my development career
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-indigo-400 text-sm font-semibold">{achievement.year}</span>
                        <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                        <p className="text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                My Philosophy
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Core principles that guide my approach to development and life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6">
                  <philosophy.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{philosophy.title}</h3>
                <p className="text-gray-300 leading-relaxed">{philosophy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-semibold text-xl overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}
