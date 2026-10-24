import React from 'react'
import { SectionHeading, SectionHeadingSubtitle, SectionHeadingTitle } from '../common/SectionHeading'
import { cn } from 'cn'
import siteData from '@/data/siteData'

const GallerySection = () => {

  const galleryData = siteData.gallerySection

  const galleryMap = galleryData.galleryImages.map((item) => (
    <div className={cn('w-full h-full min-h-50', `row-span-${item.rowSpan} col-span-${item.colSpan}`)} key={item.id}>
      <GalleryCard
        item={item}
      />
    </div>
  ))

  return (
    <section id='gallery' className='bg-primary'>

      <div className='w-full max-w-7xl mx-auto lg:py-32 py-24 lg:px-0 px-3'>

        <SectionHeading className={'mb-6'}>

          <SectionHeadingSubtitle>

            {galleryData.subtitle}

          </SectionHeadingSubtitle>

          <SectionHeadingTitle className={'lg:text-4xl text-3xl text-background'}>

            {galleryData.title}

          </SectionHeadingTitle>

        </SectionHeading>

        <p className='lg:text-lg text-muted-foreground mb-10'>

          {galleryData.description}

        </p>

        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>

          {galleryMap}

        </div>

      </div>

    </section>
  )
}

export default GallerySection

function GalleryCard({ item }) {
  return (
    <div className='w-full h-full overflow-hidden rounded-2xl relative'>

      <img src={item.image} alt={item.name} className='w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-300 ease-in-out' />

    </div>
  )
}