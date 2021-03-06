import React from 'react';
import Link from 'next/link';
export const Header = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col items-center justify-between lg:flex-row bg-white'>
        <div className='mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 lg:w-2/5'>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 font-sans font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              <span className=' text-5xl xl:inline'>Non-custodial secret</span>
              <span className=' text-5xl text-gradient bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 xl:inline'> Recovery </span>
              <span className=' text-5xl xl:inline'>and</span>
              <span className='text-5xl text-gradient bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 xl:inline'> Inheritance </span>
              <span className=' text-5xl xl:inline'>Protocol</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>

            Manage your crypto secrets securely and conveniently that help you or your
            beneficiaries to claim crypto assets without intermediaries.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            <Link href='https://try.safient.io/'>
              <a
                target='_next'
                className='bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400 inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-indigo-600 hover:text-gray-900 focus:shadow-outline focus:outline-none'
              >
                <span className='mr-3'>Try Now</span>
              </a>
            </Link>
            <Link href='https://resources.safient.io'>
              <a
                target='_next'
                aria-label=''
                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-indigo-900 transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-indigo-100 hover:bg-indigo-200 focus:shadow-outline focus:outline-none '
              >
               <span className='text-gradient bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400'> Read More  </span>
              </a>
            </Link>
          </div>
        </div>
        <div className='relative lg:w-3/5'>
          <img className=' w-full h-56 rounded  sm:h-96' src='/images/hero.svg' alt='crypto' />
        </div>
      </div>
    </div>
  );
};
