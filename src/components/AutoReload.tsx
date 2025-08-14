'use client'

import { useEffect } from 'react'

const AutoReload = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload()
    }, 30000) // every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return null
}

export default AutoReload
