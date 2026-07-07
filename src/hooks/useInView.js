import { useEffect, useRef, useState } from 'react'

function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, options)

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return [ref, inView]
}

export default useInView
