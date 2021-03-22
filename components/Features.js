import React from 'react';
// import Encrypted from '../public/FeaturesIcons/Encrypted';

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
                  <img src='/FeaturesIcons/encrypted.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  Encrypted Portfolio
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                All the crypto portfolio information is encrypted with an AES
                key to which only the user has access to.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <img src='/FeaturesIcons/api.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  Seamless Integration
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                Eventhough the portfolios are confidential, they are stored in
                decentralized storage that can be accessed and integrated with
                any application.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <img src='/FeaturesIcons/confidential.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  Confidential Exchange
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                The encrypted portfolio is exchanged with other users by
                confidentially sharing the encryption key.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <img src='/FeaturesIcons/tracker.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  Portfolio Tracker
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                Tracks all the assets owned by crypto portfolio accounts <br />
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
