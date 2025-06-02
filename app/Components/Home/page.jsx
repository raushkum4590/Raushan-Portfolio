'use client'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Text3D, Center } from '@react-three/drei'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Database, Cpu, Terminal, Github, Linkedin, Mail, ChevronDown, Sparkles, Zap, Globe } from 'lucide-react'
import Navigation from '../Shared/Navigation'

// Enhanced 3D Animated Sphere Component
function AnimatedSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.8}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  )
}

// Enhanced 3D Floating Icons
function FloatingIcon({ position, icon: Icon, color, rotationSpeed = 0.5 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.3}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

// Particle System Component
function ParticleField() {
  const points = useRef()
  const particleCount = 1000
  
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  )
}

// Enhanced Skill Card Component
function SkillCard({ icon: Icon, title, description, delay, gradient, glowColor }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring", bounce: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Enhanced glow effect */}
      <motion.div 
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-lg opacity-0 transition-all duration-500`}
        animate={{ 
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 1
        }}
      />
      
      {/* Main card with glass morphism */}
      <motion.div 
        className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500"
        animate={{ 
          y: isHovered ? -5 : 0,
          rotateY: isHovered ? 5 : 0
        }}
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 10px 25px -3px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="flex items-start space-x-4">
          <motion.div 
            className={`p-4 bg-gradient-to-r ${gradient} rounded-xl relative overflow-hidden`}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0 
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-7 h-7 text-white relative z-10" />
            {/* Icon glow effect */}
            <motion.div 
              className="absolute inset-0 bg-white/20 rounded-xl"
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <div className="flex-1">
            <motion.h3 
              className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300"
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-gray-300 leading-relaxed"
              animate={{ 
                x: isHovered ? 8 : 0,
                color: isHovered ? "#e2e8f0" : "#d1d5db"
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Hover shine effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            transform: 'translateX(-100%)'
          }}
          animate={{ 
            translateX: isHovered ? '100%' : '-100%'
          }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  )
}

// Main HomePage Component
function HomePage() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS with modern UI/UX practices",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "blue"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Node.js, Python, MongoDB, PostgreSQL, RESTful APIs",
      gradient: "from-green-500 to-emerald-500",
      glowColor: "green"
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "TensorFlow, PyTorch, Data Science, AI model development",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "purple"
    },
    {
      icon: Terminal,
      title: "DevOps & Tools",
      description: "Docker, AWS, Git, CI/CD, Linux system administration",
      gradient: "from-orange-500 to-red-500",
      glowColor: "orange"
    }
  ]

  const techIcons = [
    { icon: Code, position: [3, 2, 0], color: "#3b82f6" },
    { icon: Database, position: [-3, 1, 1], color: "#10b981" },
    { icon: Cpu, position: [2, -1, -1], color: "#8b5cf6" },
    { icon: Terminal, position: [-2, -2, 0], color: "#f59e0b" },
    { icon: Globe, position: [0, 3, 1], color: "#06b6d4" },
    { icon: Zap, position: [-1, 2, -1], color: "#ef4444" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Enhanced Navigation */}
      <Navigation />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20" />

      {/* Hero Section */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
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
              <span className="text-indigo-400 text-lg font-semibold tracking-wide">Hello, I'm</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                Computer
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Science
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
              Crafting innovative digital experiences with cutting-edge technology, 
              beautiful design, and intelligent solutions.
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
                className="group px-8 py-4 border-2 border-white/20 rounded-2xl font-semibold text-lg hover:border-indigo-400 hover:bg-white/5 transition-all duration-300"
              >
                <span className="group-hover:text-indigo-400 transition-colors">Get In Touch</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
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
                <AnimatedSphere />
                <ParticleField />
                {techIcons.map((tech, index) => (
                  <FloatingIcon 
                    key={index}
                    position={tech.position}
                    icon={tech.icon}
                    color={tech.color}
                    rotationSpeed={0.3 + index * 0.1}
                  />
                ))}
                <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade />
              </Suspense>
              
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                enableRotate={true}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>

            {/* Floating elements */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-xl"
            />
            <motion.div 
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20 blur-xl"
            />
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
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.section 
        style={{ y: y2 }}
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging modern technologies to build scalable, efficient, and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={index * 0.2}
                gradient={skill.gradient}
                glowColor={skill.glowColor}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default HomePage