import React from 'react';

function TechStack() {
  return (
    <section className='text-gray-600 body-font d:px-24'>
      <div className='container px-5 py-24 mx-auto px-20'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Our Tech Stack
          </h1>
        </div>
        <div className='flex flex-wrap -m-4 text-center'>
          <a className='p-4 md:w-1/2 sm:w-1/2 w-full' href="https://filecoin.io/" target="_blank">
            <div
              className='border-2 border-gray-200 px-4 py-6 rounded-lg centered'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src='/images/filecoin.svg' width='70px' alt='' srcset='' />

              <p className='leading-relaxed mt-6 font-bold border-b pb-5 mb-5 border-gray-200'>
                Filecoin + Textile Buckets
              </p>
              <p>
              Ensures that the safes available at all the time
              </p>
             
            </div>
            
          </a>

          <a className='p-4 md:w-1/2 sm:w-1/2 w-full' href="https://textile.io/" target="_blank">
            <div
              className='border-2 border-gray-200 px-4 py-6 rounded-lg centered'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src='/images/threddb.svg' width='70px' alt='' srcset='' />

              <p className='leading-relaxed mt-6 font-bold border-b pb-5 mb-5 border-gray-200'>
                  Textile ThreadDB
              </p>
              <p>
              Helps to store all the public information on a decentralized database.
              </p>
             
            </div>
            
          </a>
          
          <a className='p-4 md:w-1/2 sm:w-1/2 w-full' href="http://idx.xyz/" target="_blank">
            <div
              className='border-2 border-gray-200 px-4 py-6 rounded-lg'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src='/images/idx.svg' width='140px' alt='' srcset='' />
              <p className='leading-relaxed mt-6 font-bold border-b pb-5 mb-5 border-gray-200'>Ceramic IDX</p>
              <p>
              Acts as an identity solution for each Safex user.
              </p>
            </div>
          </a>
          <a className='p-4 md:w-1/2 sm:w-1/2 w-full' href="https://magic.link/" target="_blank">
            <div
              className='border-2 border-gray-200 px-4 py-6 rounded-lg'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src='/images/magic.svg' width='180px' alt='' srcset='' />

              <p className='leading-relaxed mt-6 font-bold border-b pb-5 mb-5 border-gray-200'>Magic Link</p>
              <p>
              Allows Safex users to authenticate to the application without a traditional username/ password or without having to install any Crypto wallets.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
