import React from 'react'
import { playfairDisplay } from '@/lib/fonts'
import siteData from '@/data/siteData'

const Footer = () => {

  const footerData = siteData.footer

  return (
    <footer className='bg-primary text-muted-foreground'>

      <div className='w-full max-w-7xl mx-auto py-8 flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-4'>

        <div className='flex items-center gap-2'>

          <span className={`${playfairDisplay.className} w-10 h-10 bg-secondary text-foreground font-semibold rounded-full flex items-center justify-center`}>

            {footerData.brandNameInitials}

          </span>

          <p className={`${playfairDisplay.className} text-background text-lg font-semibold`}>

            {footerData.brandName}

          </p>

        </div>

        <div className='text-sm flex items-center gap-3 flex-wrap'>

          {
            footerData.links.map((link, index) => (

              <a key={index} href={link.link} target="_blank" className='hover:text-background transition-all duration-300 ease-in-out'>

                {link.text}

              </a>

            ))
          }

          <p>

            &copy; {new Date().getFullYear()} {footerData.brandName}. All rights reserved.

          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer