import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  let footerStyle = {
    position: "aboslute",
    bottom: "0%",
    marginTop: "10%",
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
    <p className="text-center">
    Copyright &copy; <Link to="/">calculatesipreturn.com</Link>
    </p>
</footer>
  )
}
