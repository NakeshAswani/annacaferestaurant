import React from 'react'
import { SectionHeading, SectionHeadingSubtitle, SectionHeadingTitle } from '../common/SectionHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import siteData from '@/data/siteData'

const AboutSection = () => {

  const aboutData = siteData.aboutSection

  return (
    <section id='about'>

      <div className='w-full max-w-7xl mx-auto lg:py-32 py-24 lg:px-0 px-3'>

        <div className='grid md:grid-cols-[1fr_1.2fr] lg:gap-24 gap-12 items-center'>

          <div className='w-full h-full'>

            <img src="/images/about-image.webp" alt="about image" className='w-full h-full aspect-4/5 rounded-4xl' />

          </div>

          <div className='space-y-8'>

            <SectionHeading>

              <SectionHeadingSubtitle>

                {aboutData.subtitle}

              </SectionHeadingSubtitle>

              <SectionHeadingTitle className={'lg:text-4xl text-3xl'}>

                {aboutData.title}

              </SectionHeadingTitle>

            </SectionHeading>

            <div className='space-y-5'>

              {
                aboutData.content.map((item, index) => (

                  <p key={index} className='lg:text-lg text-muted-foreground'>

                    {item}

                  </p>

                ))
              }

            </div>

            <a href={aboutData.cta.link} className='text-primary font-medium group'>

              {aboutData.cta.text}

              <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out' />

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutSection