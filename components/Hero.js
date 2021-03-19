import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    // <section classNameName='text-gray-600 body-font px-24'>
    //   <div classNameName='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
    //     <div classNameName='text-center lg:w-2/3 w-full'>
    //       <h1 classNameName='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
    //         Portex- Secure crypto portfolio management and exchange.
    //       </h1>
    //       <p classNameName='mb-8 leading-relaxed'>
    //         Most of the existing crypto portfolio management tools are managed
    //         by services that don't guarantee complete confidentiality. Even the
    //         portfolio tools that guarantee such privacy don't have a mechanism
    //         to exchange and share it with other users in a secure manner.
    //       </p>
    //       <div classNameName='flex justify-center'>
    //         <button classNameName='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
    //           Read More
    //         </button>
    //         <button classNameName='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
    //           Goto App
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className='relative bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
            <nav
              className='relative flex items-center justify-between sm:h-10 lg:justify-start'
              aria-label='Global'
            >
              <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <a href='#'>
                    <span className='sr-only'>Home</span>
                    <img className='h-8 w-auto sm:h-10' src='/logo-blue.svg' />
                  </a>
                  {/* mobile */}
                  <div className='-mr-2 flex items-center md:hidden'>
                    <button
                      type='button'
                      className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                      aria-expanded='false'
                    >
                      <span className='sr-only'>Open main menu</span>

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
                          d='M4 6h16M4 12h16M4 18h16'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='hidden md:block md:ml-10 md:pr-4 md:space-x-8'>
                <a
                  href='#'
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  Home
                </a>
                <a
                  href="https://github.com/koshikraj/portex" target="_blank"
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  Developers
                </a>

                <a
                  href="https://blog.consensolabs.com/tag/portex/" target="_blank"
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>

          <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <img className='h-8 w-auto' src='/logo-blue.svg' alt='' />
                </div>
                <div className='-mr-2'>
                  <button
                    type='button'
                    className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  >
                    <span className='sr-only'>Close main menu</span>

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
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className='px-2 pt-2 pb-3 space-y-1'>
                <a
                  href='#'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                >
                  Home
                </a>

                <a
                  href="https://github.com/koshikraj/portex" target="_blank"
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                >
                  Developers
                </a>

                <a
                  href="https://blog.consensolabs.com/tag/portex/" target="_blank"
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                >
                  Blog
                </a>
              </div>
            </div>
          </div>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block xl:inline'>
                  Share Your Crypto Portfolio
                </span>
                <span className='block text-indigo-600 xl:inline'>
                  {' '}
                  Securely.
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Exchange your portfolio confidentially with other users without exposing it to
                any intermediaries.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <Link href='https://app.portex.xyz/'>
                    <a
                      target='_next'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                    >
                      Try now
                    </a>
                  </Link>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <Link href='https://blog.consensolabs.com/portex-textile-thread/'>
                    <a
                      target='_next'
                      className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
                    >
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80'
          alt=''
        />
      </div>
    </div>
  );
}

export default Hero;
