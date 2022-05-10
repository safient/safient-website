export const Feature3 = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='#6B7280'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern id='d9d7687a-355f-4502-8ec4-7945db034688' x='0' y='0' width='.135' height='.30'>
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect fill='url(#d9d7687a-355f-4502-8ec4-7945db034688)' width='52' height='24' />
            </svg>
            <span className='relative'>Why Safient?</span>
          </span>{' '}
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Have you ever wondered how will you recover or pass on your{' '}
          <b>valuable crypto assets, secret instructions </b> to your loved ones in case of an
          unfortunate event, or what happens when you no longer have access to
          your unsafe secret backup ?
          <br /> <br />
          Worry no more, Safient protocol will help you securely manage all the critical
          information in a non-custodial way and help recover or inherit the assets so that
          your loved ones have access to them with <b>100 % surety </b> incase of
          any tragic event.
        </p>
      </div>
      <div className='grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3'>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/encrypted.svg' alt='' srcset='' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Secure Safes
          </h6>
          <p className='text-base text-gray-900'>
            Backup your secrets on our Safient safe that can only be
            recovered by you at any time.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/api.svg' alt='' srcset='' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Convenient Claimable Safes
          </h6>
          <p className='text-base text-gray-900'>
            The safes are accessed by the beneficiaries only after the decided claim conditions are met.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/confidential.svg' alt='' srcset='' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Trustless Protocol
          </h6>
          <p className='text-base text-gray-900'>
            The safes are protected and governed by multiple trustless
            guardians and arbitrators (Using Kleros) to ensure the highest
            degree of security and resilience.
          </p>
        </div>
      </div>
    </div>
  );
};
