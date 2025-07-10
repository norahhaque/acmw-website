"use client"

import React from 'react'
import { FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa"

export default function Footer() {
  const socials = [
    {
      icon: <FaInstagram size={24} />,
      label: "Instagram",
      href: "https://www.instagram.com/acmwumn/",
    },
    {
      icon: <FaFacebook size={24} />,
      label: "Facebook",
      href: "https://www.facebook.com/ACMWMN",
    },
    {
      icon: <FaDiscord size={24} />,
      label: "Discord",
      href: "http://z.umn.edu/acmwdiscord",
    },
  ]

  return (
    <footer className="mt-20 px-3 text-center text-stone-500">
      <small className="mb-1.5 block text-[0.65rem]">
        &copy; 2025 UMN ACMW. All rights reserved.
      </small>
      <p className="text-[0.65rem] leading-tight">
        Site developed by <span className="font-semibold"><a href='norahhaque.com' target="_blank" rel="noopener noreferrer" className='underline'>Norah Haque</a></span> 
      </p>
    </footer>
  )
}
