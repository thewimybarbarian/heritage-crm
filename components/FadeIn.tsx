'use client'

import { motion } from 'framer-motion'

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    duration?: number
    className?: string
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    fullWidth?: boolean
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
    direction = 'up',
    fullWidth = false
}: FadeInProps) {
    const getHiddenVariant = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: 40 }
            case 'down': return { opacity: 0, y: -40 }
            case 'left': return { opacity: 0, x: 40 }
            case 'right': return { opacity: 0, x: -40 }
            case 'none': return { opacity: 0 }
            default: return { opacity: 0, y: 40 }
        }
    }

    const getVisibleVariant = () => {
        switch (direction) {
            case 'up': return { opacity: 1, y: 0 }
            case 'down': return { opacity: 1, y: 0 }
            case 'left': return { opacity: 1, x: 0 }
            case 'right': return { opacity: 1, x: 0 }
            case 'none': return { opacity: 1 }
            default: return { opacity: 1, y: 0 }
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: getHiddenVariant(),
                visible: getVisibleVariant()
            }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </motion.div>
    )
}

interface StaggerContainerProps {
    children: React.ReactNode
    delay?: number
    staggerDelay?: number
    className?: string
}

export function StaggerContainer({
    children,
    delay = 0,
    staggerDelay = 0.1,
    className = ""
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
