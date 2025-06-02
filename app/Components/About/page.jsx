'use client'
import React, { Suspense, useRef } from 'react'
import Link from 'next/link'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, MeshDistortMaterial, Text3D, Center, Float, Stars, RoundedBox } from '@react-three/drei'
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
  ArrowLeft,
  Download,
  ExternalLink
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
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[size]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </Sphere>
  )
}

// Achievement Card Component
function AchievementCard({ icon: Icon, title, description, year, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <span className="text-sm text-indigo-300 font-medium">{year}</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Skill Progress Bar
function SkillBar({ skill, percentage, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-indigo-300 text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  )
}

function AboutPage() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Computer Science Degree",
      description: "Bachelor's in Computer Science with focus on algorithms, data structures, and software engineering principles.",
      year: "2024"
    },
    {
      icon: Award,
      title: "Dean's List Recognition",
      description: "Consistently maintained high academic performance with GPA above 3.8 throughout university.",
      year: "2023"
    },
    {
      icon: Code2,
      title: "Full-Stack Certification",
      description: "Completed comprehensive full-stack development bootcamp covering modern web technologies.",
      year: "2023"
    },
    {
      icon: Brain,
      title: "AI/ML Specialization",
      description: "Specialized coursework in machine learning, neural networks, and artificial intelligence applications.",
      year: "2024"
    }
  ]

  const skills = [
    { skill: "JavaScript/TypeScript", percentage: 92 },
    { skill: "Python", percentage: 88 },
    { skill: "React/Next.js", percentage: 90 },
    { skill: "Node.js", percentage: 85 },
    { skill: "Machine Learning", percentage: 78 },
    { skill: "Database Design", percentage: 82 },
    { skill: "System Design", percentage: 75 },
    { skill: "Cloud Computing", percentage: 80 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={300} depth={60} count={800} factor={5} />
            <AnimatedCube />
            
            {/* Skill Orbs */}
            <SkillOrb position={[-4, 2, -3]} color="#3b82f6" />
            <SkillOrb position={[4, -1, -2]} color="#10b981" />
            <SkillOrb position={[-3, -3, 1]} color="#f59e0b" />
            <SkillOrb position={[3, 3, -1]} color="#ef4444" />
            <SkillOrb position={[0, -4, -2]} color="#8b5cf6" />
            <SkillOrb position={[-2, 4, 0]} color="#ec4899" />
            
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}        <motion.nav 
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
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-indigo-400 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-indigo-400 font-medium">
                About
              </Link>
              <Link href="/projects" className="text-white hover:text-indigo-400 transition-colors font-medium">
                Projects
              </Link>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </motion.button>
          </div>
        </motion.nav>

        <div className="px-6 md:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}Me
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Passionate computer scientist with a love for creating innovative solutions 
                and pushing the boundaries of technology. Welcome to my journey.
              </p>
            </motion.div>

            {/* Personal Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <User className="w-8 h-8 mr-3 text-indigo-400" />
                  My Story
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hello! I'm a passionate computer science student and developer who believes 
                    in the power of technology to solve real-world problems. My journey began 
                    with curiosity about how things work and evolved into a deep appreciation 
                    for elegant code and innovative solutions.
                  </p>
                  <p>
                    I specialize in full-stack development, machine learning, and system design. 
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge with the developer community.
                  </p>
                  <p>
                    My goal is to create technology that makes a positive impact, whether it's 
                    building user-friendly applications, optimizing system performance, or 
                    developing AI solutions that enhance human capabilities.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {['Problem Solver', 'Team Player', 'Continuous Learner', 'Innovation Driven'].map((trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-medium"
                    >
                      {trait}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-purple-400" />
                  Skills & Expertise
                </h2>
                <div className="space-y-4">
                  {skills.map((skillData, index) => (
                    <SkillBar
                      key={skillData.skill}
                      skill={skillData.skill}
                      percentage={skillData.percentage}
                      delay={0.6 + index * 0.1}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center">
                <Award className="w-8 h-8 mr-3 text-yellow-400" />
                Achievements & Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <AchievementCard
                    key={index}
                    icon={achievement.icon}
                    title={achievement.title}
                    description={achievement.description}
                    year={achievement.year}
                    delay={0.8 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Philosophy Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 mr-3 text-yellow-400" />
                My Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Coffee className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
                  <p className="text-gray-300 text-sm">
                    Technology evolves rapidly, and I believe in staying curious and 
                    continuously updating my skills to keep pace with innovation.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <Book className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Quality Code</h3>
                  <p className="text-gray-300 text-sm">
                    Writing clean, maintainable, and efficient code is not just a practice 
                    but an art form that I continuously strive to perfect.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <ExternalLink className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                  <p className="text-gray-300 text-sm">
                    The best solutions come from diverse perspectives working together. 
                    I value teamwork and open communication in every project.
                  </p>
                </div>
              </div>            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mt-16"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Ready to see my work in action?
              </h2>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                >
                  Explore My Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage