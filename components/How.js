import React from 'react';

function How() {
  return (
    <section className='text-gray-600 body-font bg-gray-50 '>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4'>
            How it works?
          </h1>
        </div>
        <div className='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col'>
          <div className='sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
            <img src='/How/upload.svg' alt='' srcset='' />
          </div>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
              Update Portfolio
            </h2>
            <p className='leading-relaxed text-base'>
              User updates their crypto portfolio and stores the encrypted data.
            </p>
          </div>
        </div>

        <div className='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col'>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
              Request Portfolio
            </h2>
            <p className='leading-relaxed text-base'>
              Request portfolio details of any users on the platform using email
              or unique ID (DID).
            </p>
          </div>
          <div className='sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='sm:w-16 sm:h-16 w-10 h-10'
              viewBox='0 0 24 24'
            >
              <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
              <circle cx='12' cy='7' r='4'></circle>
            </svg>
          </div>
        </div>
        <div className='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col'>
          <div className='sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
            <img src='/How/accept.svg' alt='' srcset='' />
          </div>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
              Accept/reject Request:
            </h2>
            <p className='leading-relaxed text-base'>
              User can accept or reject the portfolio share requests.
            </p>
          </div>
        </div>

        <div className='flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col'>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
              View shared portfolio details
            </h2>
            <p className='leading-relaxed text-base'>
              Decrypt and view the shared portfolios.
            </p>
          </div>
          <div className='sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0'>
            <img src='/How/view.svg' alt='' srcset='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default How;
