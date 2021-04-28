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
              Safex maintains resources to help developers integrate their applications to seamlessly connect with safes tools and libraries.
              </dd>
              <a href="https://resources.getsafex.co" target="_blank">
              <p className='ml-16 py-2 text-base leading-6 text-indigo-700 text-gray-900'>
                Safex development documentation 
                </p>
                </a>
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
              Individuals can use our community version to create a safe and inheritance plan right away.
              </dd>
              <a href="https://app.getsafex.co" target="_blank">
              <p className='ml-16 py-2 text-base leading-6 text-indigo-700 text-gray-900'>
                Checkout the community version
                </p>
                </a>
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
              We are working on our enterprise version to integrate with the existing crypto exchanges and custodial wallet services.</dd>
              <a href="mailto:hello@getsafex.co" target="_blank">
              <p className='ml-16 py-2 text-base leading-6 text-indigo-700 text-gray-900'>
                Contact us for the business version
                </p>
                </a>
            </div>

          
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Resources;
