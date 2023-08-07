type LinkType = {
  name: string
  slug: string
  newTab?: boolean
}

const Links: LinkType[] = [
  {
    name: 'Projekty',
    slug: '/projekty'
  },
  {
    name: 'QrCode',
    slug: '/qrcode'
  },
  {
    name: 'Grzejniki Próżniowe',
    slug: 'https://grzejnikiprozniowe.pl',
    newTab: true
  },
  {
    name: 'QrCode',
    slug: '/qrcode'
  },
  {
    name: 'QrCode',
    slug: '/qrcode'
  }
]

export default function Navbar () {
  return (
    <nav className='m-8 bg-white p-4 text-black  '>
      <ul className='flex justify-around items-center'>
        <img src='logo.png' className='w-1/8' alt='' />
        {Links.map(({ name, slug, newTab }) => (
          <li key={name}>
            <a
              className='text-base font-bold uppercase hover:[#00b83f]'
              href={slug}
              target={newTab ? '_blank' : ''}
            >
              {name}
            </a>
          </li>
        ))}
        <li className='bg-[#00b83f] text-white p-4 text-md font-bold uppercase border-2 border-[#00b83f] hover:bg-white hover:text-[#00b83f] transition-all duration-300'>
          <a href='#'>Kontakt</a>
        </li>
      </ul>
    </nav>
  )
}
