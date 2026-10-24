import React from 'react'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { SectionHeading, SectionHeadingSubtitle, SectionHeadingTitle } from '../common/SectionHeading'
import siteData from '@/data/siteData'

const HeroSection = () => {

  const heroData = siteData.heroSection;

  return (
    <section id='hero' className='w-full h-[95vh] lg:p-40 md:px-15 px-4 py-20 bg-[url("/images/hero-banner.webp")] bg-cover bg-center flex items-end relative'>

      <div className='bg-linear-to-t from-primary/90 to-primary/15 absolute inset-0'></div>

      <div className='w-full max-w-7xl mx-auto relative'>

        <div className="max-w-4xl space-y-8">

          <SectionHeading>

            <SectionHeadingSubtitle className={"lg:text-base"}>

              {heroData.subtitle}

            </SectionHeadingSubtitle>

            <SectionHeadingTitle className={"lg:text-8xl md:text-7xl text-5xl text-background dark:text-foreground"}>

              {heroData.title}

            </SectionHeadingTitle>

          </SectionHeading>

          <p className='max-w-lg text-xl text-background/75 dark:text-foreground/75'>

            {heroData.description}

          </p>

          <div className='flex gap-5 md:flex-nowrap flex-wrap'>

            <a href={heroData.cta[0].link} target="_blank" rel="noopener noreferrer">

              <Button variant="brandPrimary" size="brandSize">

                {heroData.cta[0].text}

                <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out' />

              </Button>

            </a>

            <a href={heroData.cta[1].link}>

              <Button variant="brandSecondary" size="brandSize">

                {heroData.cta[1].text}

                <FontAwesomeIcon icon={faArrowDown} className='ml-2 group-hover:translate-y-1 transition-transform duration-300 ease-in-out' />

              </Button>

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroSection