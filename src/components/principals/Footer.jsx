import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <p>© 2023 Stylist Finder. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a className="hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="hover:underline" href="#">
            Terms of Service
          </a>
          <a className="hover:underline" href="#">
            Contact Us
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer