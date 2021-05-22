import React, { useEffect, useState } from 'react'

export default function ScrollToTopMobile() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
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

    // *CleanupFunction*
    return () => {
      setIsVisible(false)
    }
  }, [])

  return (
    <div className="scroll-to-top">
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
