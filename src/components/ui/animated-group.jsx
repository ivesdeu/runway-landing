import React, { Children } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils.js'

/**
 * @typedef {'fade'|'slide'|'scale'|'blur'|'blur-slide'|'zoom'|'flip'|'bounce'|'rotate'|'swing'} PresetType
 */

/** @type {import('framer-motion').Variants} */
const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

/** @type {import('framer-motion').Variants} */
const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

/** @type {Record<string, { container: import('framer-motion').Variants; item: import('framer-motion').Variants }>} */
const presetVariants = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
  },
  'blur-slide': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)', y: 20 },
      visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 300, damping: 8 },
      },
    },
  },
}

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {{ container?: import('framer-motion').Variants; item?: import('framer-motion').Variants }} [props.variants]
 * @param {PresetType} [props.preset]
 * @param {import('framer-motion').ViewportOptions} [props.viewport]
 */
export function AnimatedGroup({ children, className, variants, preset, viewport }) {
  const reduceMotion = useReducedMotion()
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants }
  const containerVariants = variants?.container ?? selectedVariants.container
  const itemVariants = variants?.item ?? selectedVariants.item

  const view = viewport ?? { once: true, margin: '0px 0px 100px 0px' }

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={view}
      variants={containerVariants}
      className={cn(className)}
    >
      {Children.map(children, (child, index) => (
        <Motion.div key={index} variants={itemVariants}>
          {child}
        </Motion.div>
      ))}
    </Motion.div>
  )
}
