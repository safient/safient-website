export const Feature3 = () => {
  return (
    <div className='px-20 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-gray-50 '>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='d9d7687a-355f-4502-8ec4-7945db034688'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#d9d7687a-355f-4502-8ec4-7945db034688)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Why Safex?</span>
          </span>{' '}
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Safex promises to securely and conveniently store any critical
          information that is needed to access and recover the assets in case of
          any tragic events. Safex also provides a trustless yet safe way to
          transfer and inherit the assets by close ones whenever such an
          unfortunate scenario occurs.
        </p>
      </div>
      <div className='grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 lg:px-20 '>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Secure safes
          </h6>
          <p className='text-base text-gray-900'>
            Backup your secrets on our trustless safes that can be only
            recovered by you at any time.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Convenient inheritance
          </h6>
          <p className='text-base text-gray-900'>
            Ensure that your safes are inherited by beneficiaries only incase of
            tragic events.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Trustless recovery protocol
          </h6>
          <p className='text-base text-gray-900'>
            The safes are protected and governed by completely decentralized
            guardians and arbitrators (Using Kleros) to ensure the highest
            degree of resilience.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Dispute resolution
          </h6>
          <p className='text-base text-gray-900'>
            Dipute resolution platform quickly resolves all the claims for
            inheritance of safes. Currently using{' '}
            <a href='https://kleros.io/integrations' target='_blank'>
              <u>Kleros court</u>
            </a>
            .
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Share portfolio
          </h6>
          <p className='text-base text-gray-900'>
            Safex allows to share portfolio confidentially on need to know basis
            with the beneficiaries even before the safe is recovered. Get to
            know more{' '}
            <a href='https://portex.xyz' target='_blank'>
              <u>here</u>
            </a>
            .
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Decentralization - simplified
          </h6>
          <p className='text-base text-gray-900'>
            Onboarding and using a trustless, decentralized application is
            always intimidating. Safex makes the user experience easier than
            ever with minimal and intuitive interactions.
          </p>
        </div>
      </div>
    </div>
  );
};
