import LogoSvg from '/teplix-logo.svg'

type LinkType = {
  name: string
  slug: string
  newTab?: boolean
}

const Links: LinkType[] = [
  {
    name: 'Strona Główna',
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
    name: 'Grzejniki Próżniowe',
    slug: 'https://grzejnikiprozniowe.pl',
    newTab: true
  },
  {
    name: 'Blog',
    slug: '/blog'
  }
]

export default function Navbar () {
  return (
    <nav className='m-8 bg-white p-8 text-black z-10 top-0 left-0 sticky  w-[96%] hover:drop-shadow-md transition-all duration-300'>
      <ul className='flex justify-around items-center'>
        {/* <img src='logo.png' className='w-1/8' alt='' /> */}
        <img src={LogoSvg} className='w-[248px]' alt='' />
        {Links.map(({ name, slug, newTab }) => (
          <li key={name}>
            <a
              className='text-base font-bold uppercase hover:text-[#583BD1]'
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
