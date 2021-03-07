import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

import SiteLogo from '../components/site-logo'

import Close from '../assets/close.svg'

const Header = () => {
  const headRef = useRef(null)

  useEffect(() => {
    gsap.to(headRef.current, {
      opacity: 1,
      y: 10,
      duration: 0.5,
      delay: 1,
    })
  }, [])

  return (
    <header ref={headRef} className="head">
      <nav className="head__nav">
        <SiteLogo />
        {location.pathname === '/' ? (
          <Link
            to="/"
            activeStyle={{ textDecoration: 'line-through' }}
            className="head__nav--link"
          >
            Portfolio
          </Link>
        ) : (
          <Link to="/" className="head__nav--close" aria-label="Back to Home">
            <Close />
          </Link>
        )}
        <Link
          to="/about"
          activeStyle={{ textDecoration: 'line-through' }}
          className="head__nav--link"
        >
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header