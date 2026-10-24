import React from 'react'
import { SectionHeading, SectionHeadingSubtitle, SectionHeadingTitle } from '../common/SectionHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { cn } from 'cn'
import { playfairDisplay, roboto } from '@/lib/fonts'
import siteData from '@/data/siteData'

const MenuSection = () => {

  const menuData = siteData.menuSection

  const menuMap = menuData.menuItems.map((item) => (
    <MenuCard
      key={item.id}
      item={item}
    />
  ))

  return (
    <section id='menu'>

      <div className='w-full max-w-7xl mx-auto lg:py-32 py-24 lg:px-0 px-3'>

        <SectionHeading className={'mb-6'}>

          <SectionHeadingSubtitle>

            {menuData.subtitle}

          </SectionHeadingSubtitle>

          <SectionHeadingTitle className={'lg:text-4xl text-3xl'}>

            {menuData.title}

          </SectionHeadingTitle>

        </SectionHeading>

        <p className='lg:text-lg text-muted-foreground mb-10'>

          {menuData.description}

        </p>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10 mb-10'>

          {menuMap}

        </div>

        <menu className='text-center'>

          <a href={menuData.cta.link} className='text-primary font-medium py-3 px-4 border border-muted-foreground rounded-full group'>

            {menuData.cta.text}

            <FontAwesomeIcon icon={faUpRightFromSquare} className='ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out' />

          </a>

        </menu>

      </div>

    </section>
  )
}

export default MenuSection

function MenuCard({ item }) {
  return (
    <Card className={'p-0 ring-0 rounded-xl overflow-hidden relative'}>

      <div className='rounded-xl overflow-hidden'>

        <img src={item.image} alt={item.name} className='aspect-[1.08/1] object-cover rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out' />

      </div>

      <CardHeader className={'p-0 space-y-1'}>

        <CardTitle className={cn('text-lg text-primary flex items-center justify-between', playfairDisplay.className)}>
          {item.name}
          <span className={cn('text-sm text-secondary font-medium', roboto.className)}>${item.price}</span>
        </CardTitle>

        <CardDescription className={'text-muted-foreground'}>{item.description}</CardDescription>

      </CardHeader>

      <span className='absolute top-4 left-4 bg-background text-primary text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full'>
        {item.tag}
      </span>

    </Card>
  )
}