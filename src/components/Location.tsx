const LocationPage = () => {
  const afterChange = true
  const GoogleMapsUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.17429140243024!2d21.991295970040735!3d50.06017629754254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb79d8d6a205%3A0xee90b09c846707d4!2sInneftech!5e0!3m2!1spl!2spl!4v1691534531933!5m2!1spl!2spl'
  return !afterChange ? (
    <>
      <section className='flex items-center justify-around md:flex-row flex-col-reverse'>
        <div className='border-[6px] border-primary drop-shadow-2xl ml-0 md:ml-48 md:w-[600px] md:h-[450px] w-[calc(100svw-20px)] h-[calc(100vh-600px)]'>
          <iframe
            src={GoogleMapsUrl}
            // style='border:0; width: 100%; height: 100% '
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <a
          href='https://goo.gl/maps/xkkKFeYrw7s38E8Q7'
          target='_blank'
          className='min-w-[90%] md:min-w-fit'
        >
          <div className='p-8 bg-primary hover:border-4 hover:bg-white hover:text-primary border-4 border-white hover:border-primary text-white md:mr-48 text-2xl relative transition-all duration-300'>
            <h1 className='font-bold p-2'>
              Firma: <span className='font-normal'>Inneftech</span>
            </h1>
            <p className='font-bold p-2'>
              Adres: <span className='font-normal'>Wspólna 2G, Rzeszów</span>
            </p>
            <div className='absolute -top-2 -right-2 '>
              <span className='relative flex h-6 w-6'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-50'></span>
                <span className='relative inline-flex rounded-full h-6 w-6 bg-amber-300'></span>
              </span>
            </div>
          </div>
        </a>
      </section>
    </>
  ) : (
    <>
      <section>
        <div>
          <iframe
            src={GoogleMapsUrl}
            // style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <a href='https://goo.gl/maps/xkkKFeYrw7s38E8Q7' target='_blank'>
          <div>
            <h1>
              Firma: <span className='font-normal'>Inneftech</span>
            </h1>
            <p>
              Adres: <span className='font-normal'>Wspólna 2G, Rzeszów</span>
            </p>
            <div>
              <span className='relative flex h-6 w-6'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-50'></span>
                <span className='relative inline-flex rounded-full h-6 w-6 bg-amber-300'></span>
              </span>
            </div>
          </div>
        </a>
      </section>
    </>
  )
}

export default LocationPage
