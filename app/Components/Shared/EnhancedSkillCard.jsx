'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function EnhancedSkillCard({ icon: Icon, title, description, delay, gradient = "from-indigo-500 to-purple-600" }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Background glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
      
      {/* Main card */}
      <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
        <div className="flex items-start space-x-4">
          <motion.div 
            className={`p-3 bg-gradient-to-r ${gradient} rounded-lg`}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <motion.h3 
              className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-3 right-3 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

export default EnhancedSkillCard
