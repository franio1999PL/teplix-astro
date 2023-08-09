type FooterLinksType = {
  sectionName: string
  name: string
  url: string
  newTab?: boolean
}

const FooterLinks: FooterLinksType[] = [
  {
    sectionName: 'Serwis',
    name: 'Polityka prywatności',
    url: 'https://grzejnikiprozniowe.pl/strona/polityka-prywatnosci',
    newTab: true
  },
  {
    sectionName: 'Kontakt',
    name: '📩 biuro@inneftech.pl',
    url: 'mailto:biuro@inneftech.pl'
  },
  {
    sectionName: 'Lokalizacja',
    name: 'Tutaj nas znajdziesz!',
    url: 'https://goo.gl/maps/xkkKFeYrw7s38E8Q7',
    newTab: true
  }
]

export default function Footer () {
  return (
    <footer className='w-full p-32 flex justify-between items-center'>
      <div className='flex justify-evenly items-center w-3/5'>
        {FooterLinks.map(({ sectionName, name, url, newTab }) => (
          <div key={name} className='flex flex-col gap-4'>
            <span className='font-bold text-[#583BD1]'>{sectionName}</span>
            <a href={url} target={newTab ? '_blank' : ''}>
              {name}
            </a>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center gap-4'>
        Śledź nas na Social Mediach:
        <img className='w-3 cursor-pointer' src='/fb.svg' alt='' />
      </div>
    </footer>
  )
}
