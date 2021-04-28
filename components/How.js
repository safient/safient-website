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
          <div className='sm:w-40 sm:h-40 h-20 w-20 sm:mr-10 inline-flex items-center rounded-2xl justify-center bg-indigo-100 text-indigo-500 flex-shrink-0'>
            <img src='/How/create.svg' alt='' srcset='' />
          </div>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
            Create a safe
            </h2>
            <p className='leading-relaxed text-base'>
            The user creates a safe for secret credentials or secret notes. Beneficiaries for the safe can be added at any time.
            </p>
          </div>
        </div>
        <div className='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col'>
          <div className='sm:w-40 sm:h-40 h-20 w-20 sm:mr-10 inline-flex items-center rounded-2xl justify-center bg-indigo-100 text-indigo-500 flex-shrink-0'>
            <img src='/How/request.svg' alt='' srcset='' />
          </div>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
            Request to recover/ inherit the safe
            </h2>
            <p className='leading-relaxed text-base'>
            The safe owner or beneficiaries can request to recover or inherit the safe at anytime.
            </p>
          </div>
        </div>
        <div className='flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col'>
          <div className='sm:w-40 sm:h-40 h-20 w-20 sm:mr-10 inline-flex items-center rounded-2xl justify-center bg-indigo-100 text-indigo-500 flex-shrink-0'>
            <img src='/How/recover.svg' alt='' srcset='' />
          </div>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-gray-900 text-lg title-font font-medium mb-2'>
            Recover safe:
            </h2>
            <p className='leading-relaxed text-base'>
            Safe guardians will help recover the safes, quickly and safely after verifying the recovery claim.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default How;
