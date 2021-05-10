export const Step = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div></div>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='#6B7280'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='84d09fa9-a544-44bd-88b2-08fdf4cddd38'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>How</span>
          </span>{' '}
          it Works?
        </h2>
        <p className='text-base text-gray-900 font-semibold md:text-lg'>
          Safex follws three simple steps to claim or inherit the crypto assets.
        </p>
      </div>
      <div className='grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3'>
        <div className='p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-indigo-600 hover:-translate-y-2'>
          <div className='flex items-center mb-2'>
            <p className='flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-600'>
              1
            </p>
            <p className='text-lg font-bold leading-10 text-gray-900'>
              {' '}
              Create a safe{' '}
            </p>
          </div>
          <p className='text-base mt-4  text-gray-800 '>
            The user creates a safe for secret credentials or secret notes.
            Beneficiaries for the safe can be added at any time.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-indigo-600 hover:-translate-y-2'>
          <div className='flex items-center mb-2'>
            <p className='flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-600'>
              2
            </p>
            <p className='text-lg font-bold leading-5 text-gray-900'>
              {' '}
              Request to claim/ inherit the safe
            </p>
          </div>
          <p className='text-sm text-gray-900 text-base mt-4'>
            The safe owner or beneficiaries can request to claim or inherit
            the safe at anytime.
          </p>
        </div>
        <div className='relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-indigo-600 hover:-translate-y-2'>
          <div className='flex items-center mb-2'>
            <p className='flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-indigo-600'>
              3
            </p>
            <p className='text-lg font-bold leading-5 text-gray-900'>
              Recover safe:
            </p>
          </div>
          <p className='text-base text-gray-900  mt-4'>
            The <b>trustless safe guardians</b> will help recover the safes, quickly and safely after
            verifying the recovery claim.
          </p>
          <p className='absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-indigo-600 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10'>
            <svg
              className='text-white w-7'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <polyline
                fill='none'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                points='6,12 10,16 18,8'
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};
