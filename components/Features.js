import React from 'react';

function Features() {
  return (
    <div className='py-12 my-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h1 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
            Features
          </h1>
     
        </div>

        <div className='mt-20'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                    />
                  </svg>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  Encrypted Portfolio
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                All the crypto portfolio information is encrypted with an AES key to which only the user has access to.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                    />
                  </svg>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  Seamless Integration
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
              Eventhough the portfolios are confidential, they are stored in decentralized storage 
              that can be accessed and integrated with any application.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  Confidential Exchange
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                The encrypted portfolio is exchanged with other users by confidentially sharing the encryption key.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                    />
                  </svg>
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  Portfolio Tracker
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                Tracks all the assets owned by crypto portfolio accounts  <br/>
                (Coming soon).
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
