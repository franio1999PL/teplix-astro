import LogoSvg from '/teplix-logo.svg'

type LinkType = {
  name: string
  slug: string
  newTab?: boolean
}

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
  return (
    <nav className='m-8 bg-white px-[55px] py-8 text-black z-10 top-0 left-0 sticky  w-[96%]'>
      <ul className='flex justify-around items-center'>
        {/* <img src='logo.png' className='w-1/8' alt='' /> */}
        <a href='/'>
          <img src={LogoSvg} className='w-[255px] h-[47.59px]' alt='' />
        </a>
        {Links.map(({ name, slug, newTab }) => (
          <li key={name}>
            <a
              className='text-base font-bold uppercase hover:border-b-2 border-[#583BD1] hover:py-2 px-2 hover:text-[#583BD1]/60 transition-all ease-out duration-100 text-sm'
              style={{ fontWeight: 700 }}
              href={slug}
              target={newTab ? '_blank' : ''}
            >
              {name}
            </a>
          </li>
        ))}
        <a href='/kontakt'>
          <button className='bg-[#583BD1] text-white p-4 text-md font-bold uppercase border-2 border-[#583BD1] hover:bg-white hover:text-[#583BD1] transition-all duration-300 ease-in hover:-translate-y-1 hover:shadow-2xl '>
            Kontakt
          </button>
        </a>
      </ul>
    </nav>
  )
}
