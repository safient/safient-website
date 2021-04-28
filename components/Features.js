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
                Secure safes
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
              Backup your secrets on our trustless safes that can be only recovered by you at any time.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <img src='/FeaturesIcons/api.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                Convenient inheritance
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
              Ensure that your safes are inherited by beneficiaries only incase of tragic events.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <img src='/FeaturesIcons/confidential.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                Trustless recovery protocol
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
              The safes are protected and governed by completely decentralized guardians and arbitrators (Using Kleros) to ensure the highest degree of resilience. 
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <img src='/FeaturesIcons/tracker.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                Dispute resolution 
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                Dipute resolution platform quickly resolves all the claims for inheritance of safes.
                Currently using <a href="https://kleros.io/integrations" target="_blank"><u>Kleros court</u></a>.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <img src='/FeaturesIcons/tracker.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                Share portfolio
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                Safex allows to share portfolio confidentially on need to know basis with the beneficiaries even before 
                the safe is recovered.
                Get to know more <a href="https://portex.xyz" target="_blank"><u>here</u></a>.
              </dd>
            </div>

            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  <img src='/FeaturesIcons/tracker.svg' alt='' srcset='' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                Decentralization - simplified:
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
              Onboarding and using a trustless, decentralized application is always intimidating.
              Safex makes the user experience easier than ever with minimal and intuitive interactions.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
