type LinkType = {
  name: string
  slug: string
}

const Links: LinkType[] = [
  {
    name: 'Projekty',
    slug: '/projekty'
  },
  {
    name: 'Testowy',
    slug: '/test'
  }
]

export default function Navbar () {
  return (
    <nav className='bg-slate-900 text-white p-4'>
      <ul className='flex justify-around items-center'>
        {Links.map(({ name, slug }) => (
          <li key={name}>
            <a href={slug}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
