import React, { useEffect, useState } from 'react'

export default function ScrollToTop({ style }) {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="scroll-to-top" style={style}>
      {isVisible && (
        <div className="btn btn-secondary gradient" onClick={scrollToTop}>
          <span className="material-icons m-0" style={{ fontSize: '18px' }}>
            north
          </span>
        </div>
      )}
    </div>
  )
}
