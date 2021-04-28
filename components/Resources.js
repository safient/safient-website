import React from 'react';
// import Encrypted from '../public/FeaturesIcons/Encrypted';

function Resources() {
  return (
    <div className='py-12 my-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h1 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
            Resources
          </h1>
        </div>

        <div className='mt-20'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10'>
            <div className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-white'>
                  <img src='/images/code.svg' alt='' srcset='' className='h-8 w-8' />
                </div>
             
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                Developers
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
              Safex maintains resources to help developers integrate their applications to seamlessly integrate with safes.
              </dd>
            </div>

            <div className='relative'>
              <dt>
              <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-white'>
                  <img src='/images/individual.svg' alt='' srcset='' className='h-8 w-8' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                Individuals
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
              Ensure that your safes are inherited by beneficiaries only incase of tragic events.
              </dd>
            </div>

            <div className='relative'>
              <dt>
              <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-white'>
                  <img src='/images/enterprise.svg' alt='' srcset='' className='h-8 w-8' />
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                Enterprises
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
              The safes are protected and governed by completely decentralized guardians and arbitrators (Using Kleros) to ensure the highest degree of resilience. 
              </dd>
            </div>

          
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Resources;
