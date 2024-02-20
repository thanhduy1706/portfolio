"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      type: "tween",
      duration: 0.2,
    }}

    className='hidden w-0.5 h-12 my-24 bg-gray-300 rounded-full sm:block'></motion.div>
  )
}
