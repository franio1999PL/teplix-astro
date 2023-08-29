import React, { useState } from 'react'
import { FaBars, FaX as Xicon } from 'react-icons/fa6'
import LogoSvg from '/teplix-logo.svg'

// Typ danych dla linków nawigacyjnych
type LinkType = {
  name: string
  slug: string
  newTab?: boolean
}

// Dane linków
const Links: LinkType[] = [
  {
    // name: 'Strona Główna',
    name: 'Panele Grzewcze',
    slug: '/'
  },
  {
    name: 'QrCode',
    slug: '/qrcode'
  },
  {
    name: 'Projekty',
    slug: '/projekty'
  },
  {
    name: 'Lokalizacja',
    slug: '/lokalizacja'
  },
  {
    name: 'Blog',
    slug: '/blog'
  },
  {
    name: 'Grzejniki Próżniowe',
    slug: 'https://grzejnikiprozniowe.pl',
    newTab: true
  }
]

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='m-8 bg-white px-[55px] py-8 text-black z-10 top-0 left-0 sticky w-[96%]'>
      <div className='flex items-center justify-between'>
        <a href='/'>
          <img
            src={LogoSvg}
            className='block w-auto max-h-[68px] max-w-[70%]'
            alt=''
          />
        </a>
        <div className='hidden md:block'>
          <ul className='flex justify-center md:justify-around gap-8 items-center'>
            {Links.map(({ name, slug, newTab }) => (
              <li key={name}>
                <a
                  className='font-bold uppercase hover:border-b-2 border-primary hover:py-2 px-2 hover:text-primary/60 transition-all ease-out duration-100 text-sm'
                  style={{ fontWeight: 700 }}
                  href={slug}
                  target={newTab ? '_blank' : ''}
                  rel={newTab ? 'noopener noreferrer' : ''}
                >
                  {name}
                </a>
              </li>
            ))}
            <a href='/kontakt'>
              <button className='bg-primary text-white p-4 px-6 text-md font-bold uppercase border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 ease-in hover:-translate-y-1 hover:shadow-2xl'>
                Kontakt
              </button>
            </a>
          </ul>
        </div>
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='bg-primary p-4 rounded-full'
          >
            {!isOpen ? (
              <FaBars className='text-white' />
            ) : (
              <Xicon className='text-white' />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='flex flex-col items-center list-none justify-around h-2/3 sticky left-0 top-0 md:hidden bg-slate-700 mt-16'>
          <ul>
            {Links.map(({ name, slug, newTab }) => (
              <li key={name}>
                <a
                  className='font-bold uppercase hover:border-b-2 border-primary hover:py-2 px-2 hover:text-primary/60 transition-all ease-out duration-100 text-sm'
                  style={{ fontWeight: 700 }}
                  href={slug}
                  target={newTab ? '_blank' : ''}
                  rel={newTab ? 'noopener noreferrer' : ''}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
