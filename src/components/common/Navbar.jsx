"use client"

import { playfairDisplay } from '@/lib/fonts'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import siteData from '@/data/siteData'

const Navbar = () => {

  const headerData = siteData.header

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='w-[90%] max-w-7xl py-3 px-4 rounded-full bg-primary/80 backdrop-blur-md flex items-center justify-between fixed top-10 left-1/2 -translate-x-1/2 z-50'>

      <div className='flex items-center gap-2'>

        <span className={`${playfairDisplay.className} w-10 h-10 bg-secondary text-foreground font-semibold rounded-full flex items-center justify-center`}>
          
          {headerData.brandNameInitials}

        </span>

        <p className={`${playfairDisplay.className} text-background text-lg font-semibold`}>

          {headerData.brandName}

        </p>

      </div>

      <ul className='text-sm lg:flex items-center gap-4 hidden'>

        {
          headerData.navLinks.map((link, index) => (

            <li key={index} className='text-background/85 dark:text-foreground/85 hover:text-background dark:hover:text-foreground font-medium hover:-translate-y-1 transition-transform duration-300 ease-in-out'>

              <a href={link.link}>

                {link.text}

              </a>

            </li>

          ))
        }

      </ul>

      <a href={headerData.cta.link} target="_blank" className='lg:flex hidden'>

        <Button variant="brandPrimary" size="brandSize" className={'px-4 bg-secondary'}>

          <FontAwesomeIcon icon={faCommentDots} className='mr-2' />

          {headerData.cta.text}

        </Button>

      </a>

      <div className='w-9 h-9 p-2 rounded-full bg-secondary flex items-center justify-center cursor-pointer lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>

        {
          isMenuOpen
            ?
            <FontAwesomeIcon icon={faTimes} className='text-primary' />
            :
            <FontAwesomeIcon icon={faBars} className='text-primary' />
        }

      </div>

      <div className={`w-full py-3 px-4 rounded-3xl bg-primary/80 backdrop-blur-md absolute top-[110%] left-0 ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} origin-top transition-transform duration-300 ease-in-out lg:hidden`}>

        <ul className='text-sm space-y-4'>

          {
            headerData.navLinks.map((link, index) => (

              <li key={index} className='text-background/85 dark:text-foreground/85 hover:text-background dark:hover:text-foreground font-medium hover:-translate-y-1 transition-transform duration-300 ease-in-out'>

                <a href={link.link} onClick={() => setIsMenuOpen(false)}>

                  {link.text}

                </a>

              </li>

            ))
          }

          <li>

            <a href={headerData.cta.link} target="_blank">

              <Button variant="brandPrimary" size="brandSize" className={'w-full bg-secondary'}>

                <FontAwesomeIcon icon={faCommentDots} className='mr-2' />

                {headerData.cta.text}

              </Button>

            </a>

          </li>

        </ul>

      </div>

    </header>
  )
}

export default Navbar