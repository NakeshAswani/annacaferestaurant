import React from 'react'
import { SectionHeading, SectionHeadingSubtitle, SectionHeadingTitle } from '../common/SectionHeading'
import { Card } from '../ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { playfairDisplay } from '@/lib/fonts'
import siteData from '@/data/siteData'

const TestimonialSection = () => {

  const testimonialData = siteData.testimonialSection

  const testimonialMap = testimonialData.testimonials.map((item) => (
    <TestimonialCard key={item.id} item={item} />
  ))

  return (
    <section id='testimonials'>

      <div className='w-full max-w-7xl mx-auto lg:py-32 py-24 lg:px-0 px-3'>

        <SectionHeading className={'mb-12 text-center'}>

          <SectionHeadingSubtitle>

            {testimonialData.subtitle}

          </SectionHeadingSubtitle>

          <SectionHeadingTitle className={'lg:text-4xl text-3xl'}>

            {testimonialData.title}

          </SectionHeadingTitle>

        </SectionHeading>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>

          {testimonialMap}

        </div>

      </div>

    </section>
  )
}

export default TestimonialSection

function TestimonialCard({ item }) {
  return (
    <Card className={'p-7'}>
      <FontAwesomeIcon icon={faQuoteRight} className='text-4xl text-secondary' />
      <div>
        {
          Array.from({ length: item.rating }, (_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} className='text-secondary' />
          ))
        }
      </div>
      <p className={`text-primary text-lg ${playfairDisplay.className}`}>
        "{item.content}"
      </p>
      <span className='font-semibold text-primary/60'>
        {item.author.split(' ')[0]} {item.author.split(' ').at(-1)?.[0]}.
      </span>
    </Card>
  )
}