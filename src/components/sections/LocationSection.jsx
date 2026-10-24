import React from 'react'
import { SectionHeading, SectionHeadingSubtitle, SectionHeadingTitle } from '../common/SectionHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import siteData from '@/data/siteData'

const LocationSection = () => {

  const locationData = siteData.locationSection

  return (
    <section id='location'>

      <div className='w-full max-w-7xl mx-auto lg:py-32 py-24 lg:px-0 px-3'>

        <div className='grid lg:grid-cols-[1.1fr_0.9fr] grid-cols-1 rounded-4xl overflow-hidden'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2158.6329782920875!2d73.0231655!3d26.301748699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d7389cdb5a7%3A0x791e6fccaaf2b963!2sAnna%20Cafe%20And%20Restaurant%E2%80%8D%20Jodhpur!5e1!3m2!1sen!2sin!4v1792784151910!5m2!1sen!2sin" className='w-full h-125' allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>

          <div className='bg-primary flex flex-col justify-center p-8 sm:p-12 lg:p-16'>

            <SectionHeading className={'mb-8'}>

              <SectionHeadingSubtitle>

                {locationData.subtitle}

              </SectionHeadingSubtitle>

              <SectionHeadingTitle className={'text-background lg:text-4xl text-3xl'}>

                {locationData.title}

              </SectionHeadingTitle>

            </SectionHeading>

            <ul className='space-y-5'>

              <li className='flex items-center gap-2'>

                <FontAwesomeIcon icon={faLocationDot} className='text-secondary' />

                <a href={locationData.location.link} className='text-background' target="_blank">

                  {locationData.location.address}

                </a>

              </li>

              <li className='flex items-center gap-2'>

                <FontAwesomeIcon icon={faPhone} className='text-secondary' />

                <a href={locationData.phone.link} className='text-background'>

                  {locationData.phone.number}

                </a>

              </li>

              <li className='flex items-center gap-2'>

                <FontAwesomeIcon icon={faClock} className='text-secondary self-start mt-1' />

                <ul className='space-y-2 text-background'>

                  {
                    locationData.hours.map((hour, index) => (

                      <li key={index} className='grid grid-cols-2 items-center gap-2'>

                        <span>{hour.day}</span>

                        <span className='text-right'>{hour.time}</span>

                      </li>

                    ))
                  }

                </ul>

              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}

export default LocationSection