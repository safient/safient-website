export const DevResources = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='#6B7280'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='34f481be-159a-4846-821d-9ca19fb6bcc5'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#34f481be-159a-4846-821d-9ca19fb6bcc5)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative text-gray-900'>Safex</span>
          </span>{' '}
          Resources
        </h2>
      </div>
      <div className='grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2'>
        <div className='duration-300 transform bg-white border-l-4 border-indigo-600 hover:-translate-y-2'>
          <div className='h-full p-5 border border-l-0 rounded-r shadow-sm text-gray-900'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <img src='/images/code.svg' width='25px' alt='' srcset='' />
            </div>
            <h6 className='mb-2 font-semibold leading-10'>Developers</h6>
            <p className='text-sm font-medium text-gray-800'>
              Safex maintains resources to help developers integrate their
              applications to seamlessly connect with safes tools and libraries.
            </p>
            <a href='https://docs.getsafex.co' target='_blank'>
              <p className=' py-2 text-base leading-6 text-indigo-700 text-gray-900'>
                Safex development documentation
              </p>
            </a>
          </div>
        </div>

        <div className='duration-300 transform bg-white border-l-4 border-indigo-600 hover:-translate-y-2'>
          <div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <img src='/images/individual.svg' width='25px' alt='' srcset='' />
            </div>
            <h6 className='mb-2 font-semibold leading-10'>Individuals</h6>
            <p className='text-sm text-gray-800 font-semibold'>
              Individuals can use our community version to create a safe and
              inheritance plan right away.
            </p>
            <a href='https://app.getsafex.co' target='_blank'>
              <p className=' py-2 text-base leading-6 text-indigo-700 text-gray-900 '>
                Checkout the community version
              </p>
            </a>
          </div>
        </div>

        <div className='duration-300 transform bg-white border-l-4 border-indigo-600 hover:-translate-y-2'>
          <div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
            <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
              <img src='/images/enterprise.svg' width='24px' alt='' srcset='' />
            </div>
            <h6 className='mb-2 font-semibold leading-10'>Enterprises</h6>
            <p className='text-sm text-gray-800 font-semibold'>
              We are working on our enterprise version to integrate with the
              existing crypto exchanges and custodial wallet services.
            </p>
            <a href='mailto:hello@getsafex.co' target='_blank'>
              <p className=' py-2 text-base leading-6 text-indigo-700 text-gray-900'>
                Contact us for the business version
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
