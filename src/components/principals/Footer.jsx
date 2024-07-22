import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {AiFillTikTok} from 'react-icons/ai'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex  bg-black text-white flex-col  font-medium">
        <article className="flex justify-between">
          <p>© 2024 LocateSyle. All rights reserved.</p>
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
        </article>
        <article className="flex flex-row mt-9 m-auto">
          <ul className="grid grid-cols-3 gap-3">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://www.instagram.com/locatestyle/?next=%2F'}
            >
              <li className="flex items-center">
                <FiInstagram className="size-8" />
              </li>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://x.com/LocateStyleApp'}
            >
              <li className="flex items-center">
                <FaSquareXTwitter className="size-8" />
              </li>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://www.tiktok.com/@locatestyle?lang=es'}
            >
              <li className="flex items-center">
                <AiFillTikTok className="size-8" />
              </li>
            </Link>
          </ul>
        </article>
      </footer>
    </div>
  )
}

export default Footer
