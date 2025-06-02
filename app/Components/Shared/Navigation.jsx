'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowLeft } from 'lucide-react'

function Navigation({ currentPage = 'home', showBackButton = false }) {
  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center p-6 md:p-8 relative z-20"
    >
      {/* Left side - Logo or Back button */}
      <div className="flex items-center space-x-4">
        {showBackButton && (
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white hover:text-indigo-400 transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back</span>
            </motion.button>
          </Link>        )}
        
        {/* Enhanced Logo */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
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
      </div>

      {/* Right side - Navigation and Social */}
      <div className="flex items-center space-x-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.id}
              href={item.href} 
              className={`font-medium relative group transition-colors duration-300 ${
                currentPage === item.id 
                  ? 'text-indigo-400' 
                  : 'text-white hover:text-indigo-400'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 ${
                currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex space-x-3">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:text-indigo-400 hover:bg-white/20 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:text-blue-400 hover:bg-white/20 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:your@email.com"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:text-red-400 hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navigation
