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
    <footer className='w-full md:p-32 p-8 flex justify-between md:justify-center text-center items-center flex-col md:flex-row'>
      <div className='flex justify-evenly md:justify-center items-center flex-col md:flex-row w-full md:w-3/5 gap-4 '>
        {FooterLinks.map(({ sectionName, name, url, newTab }) => (
          <div key={name} className='flex flex-col gap-4'>
            <span className='font-bold text-primary'>{sectionName}</span>
            <a href={url} target={newTab ? '_blank' : ''}>
              {name}
            </a>
          </div>
        ))}
      </div>
      <div className='flex md:flex-row flex-col  justify-center items-center gap-4'>
        Śledź nas na Social Mediach:
        <img className='w-3 cursor-pointer' src='/fb.svg' alt='' />
      </div>
    </footer>
  )
}
