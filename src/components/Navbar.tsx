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
    name: 'Grzejniki Próżniowe',
    slug: 'https://grzejnikiprozniowe.pl',
    newTab: true
  },
  {
    name: '(Wyłączony link)',
    slug: '#'
  },
  {
    name: '(Wyłączony link)',
    slug: '#'
  }
]

export default function Navbar () {
  return (
    <nav className='m-8 bg-white p-8 text-black z-10 top-0 left-0 sticky  w-[96%] hover:drop-shadow-lg transition-all duration-300'>
      <ul className='flex justify-around items-center'>
        <img src='logo.png' className='w-1/8' alt='' />
        {Links.map(({ name, slug, newTab }) => (
          <li key={name}>
            <a
              className='text-base font-bold uppercase hover:text-[#00b83f]'
              href={slug}
              target={newTab ? '_blank' : ''}
            >
              {name}
            </a>
          </li>
        ))}
        <a href='/kontakt'>
          <button className='bg-[#00b83f] text-white p-4 text-md font-bold uppercase border-2 border-[#00b83f] hover:bg-white hover:text-[#00b83f] transition-all duration-300 ease-in hover:-translate-y-1 hover:shadow-2xl '>
            Kontakt
          </button>
        </a>
      </ul>
    </nav>
  )
}
