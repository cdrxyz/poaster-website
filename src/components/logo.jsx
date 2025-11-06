'use client'

import { motion } from 'framer-motion'

export function Logo({ className }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <img
      alt="Poaster"
      src="/logo/poaster.svg"
      className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
    />
  )
}

export function Mark({ className }) {
  return (
    <img
      alt="Poaster"
      src="/logo/poaster.svg"
      className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
    />
  )
}
