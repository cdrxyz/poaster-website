'use client'

import { motion } from 'framer-motion'
import { assetUrl } from '@/lib/asset'

export function Logo({ className }) {
  return (
    <img
      alt="Poaster"
      src={assetUrl('/logo/poaster.svg')}
      className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
    />
  )
}

export function Mark({ className }) {
  return (
    <img
      alt="Poaster"
      src={assetUrl('/logo/poaster.svg')}
      className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
    />
  )
}
