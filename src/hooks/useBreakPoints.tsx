import React, { useEffect, useState } from 'react'

export type useBreakpointsType = ReturnType<typeof useBreakpoints>

// Source: https://tailwindcss.com/docs/breakpoints
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

const match = (breakpoint: keyof typeof breakpoints, width?: number) => {
  if (width === undefined) {
    return false
  }

  switch (breakpoint) {
    case 'sm':
      return width <= breakpoints.sm
    case 'md':
      return width <= breakpoints.md
    case 'lg':
      return width <= breakpoints.lg
    case 'xl':
      return width <= breakpoints.xl
    case '2xl':
      return width <= breakpoints['2xl']

    default:
      return false
  }
}

export const useBreakpoints = (breakpoint: keyof typeof breakpoints) => {
  const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return match(breakpoint, windowSize.width)
}

export default useBreakpoints
