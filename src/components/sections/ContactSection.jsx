import React from 'react'
import { SectionHeading, SectionHeadingSubtitle, SectionHeadingTitle } from '../common/SectionHeading'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { playfairDisplay } from '@/lib/fonts'
import siteData from '@/data/siteData'

const ContactSection = () => {

  const contactData = siteData.contactSection

  return (
    <section id='contact' className='bg-secondary text-primary'>

      <div className='w-full max-w-7xl mx-auto lg:py-32 py-24 lg:px-0 px-3'>

        <div className='grid lg:grid-cols-[0.9fr_1.1fr] grid-cols-1 gap-24'>

          <div>

            <SectionHeading className={'mb-6'}>

              <SectionHeadingSubtitle className={'text-primary'}>

                {contactData.subtitle}

              </SectionHeadingSubtitle>

              <SectionHeadingTitle className={'lg:text-5xl text-4xl'}>

                {contactData.title}

              </SectionHeadingTitle>

            </SectionHeading>

            <p className='lg:text-lg text-primary mb-10'>

              {contactData.description}

            </p>

            <div className='flex gap-5 md:flex-nowrap flex-wrap'>

              <a href={contactData.cta[0].link} target="_blank" rel="noopener noreferrer">

                <Button variant="brandPrimary" size="brandSize" className={'bg-primary text-background'}>

                  {contactData.cta[0].text}

                  <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out' />

                </Button>

              </a>

              <a href={contactData.cta[1].link} target="_blank" rel="noopener noreferrer">

                <Button variant="brandSecondary" size="brandSize" className={'text-primary border-primary'}>

                  <FontAwesomeIcon icon={faPhone} className='mr-2' />

                  {contactData.cta[1].text}

                </Button>

              </a>

            </div>

          </div>

          <form className='bg-background rounded-4xl p-8 sm:p-12 lg:p-16'>
    
            <p className={`${playfairDisplay.className} text-3xl mb-8`}>Leave us a note</p>

            <div className='mb-5'>

              <label className='block mb-2 text-primary text-sm font-medium'>Your name</label>

              <input type="text" className='w-full p-3 border border-primary rounded-xl' placeholder='Rohan Sharma' />

            </div>

            <div className='mb-5'>

              <label className='block mb-2 text-primary text-sm font-medium'>Your message</label>

              <textarea className='w-full h-25 p-3 border border-primary rounded-xl' placeholder='I would love to reserve a table for ...' />

            </div>

            <Button variant="brandPrimary" size="brandSize" className={'w-full bg-primary text-background'}>

              Send Message

              <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out' />

            </Button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default ContactSection