export const TechStack = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full max-w-screen-xl md:px-24 lg:px-32 lg:py-20 bg-gray-50'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='#6B7280'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='db164e35-2a0e-4c0f-ab05-f14edc6d4d30'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Web3</span>
          </span>{' '}
          Stacks that make this happen
        </h2>
      </div>

      <div className='flex flex-wrap -m-4 text-center'>
        <a
          className='p-4 md:w-1/2 sm:w-1/2 w-full'
          href='https://filecoin.io/'
          target='_blank'
        >
          <div
            className='border-2 border-gray-200 px-4 py-6 rounded-lg centered'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '260px',
              background: '#fff',
            }}
          >
            <img src='/images/filecoin.svg' width='70px' alt='' srcset='' />

            <p className='leading-relaxed mt-6 font-bold border-b pb-5 mb-5 border-gray-200'>
              Filecoin + Textile Buckets
            </p>
            <p>Ensures that the safes available at all the time</p>
          </div>
        </a>

        <a
          className='p-4 md:w-1/2 sm:w-1/2 w-full'
          href='https://textile.io/'
          target='_blank'
        >
          <div
            className='border-2 border-gray-200 px-4 py-6 rounded-lg centered'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '260px',
              background: '#fff',
            }}
          >
            <img src='/images/threddb.svg' width='70px' alt='' srcset='' />

            <p className='leading-relaxed mt-6 font-bold border-b pb-5 mb-5 border-gray-200'>
              Textile ThreadDB
            </p>
            <p>
              Helps to store all the public information on a p2p
              database.
            </p>
          </div>
        </a>

        <a
          className='p-4 md:w-1/2 sm:w-1/2 w-full'
          href='http://idx.xyz/'
          target='_blank'
        >
          <div
            className='border-2 border-gray-200 px-4 py-6 rounded-lg'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '260px',
              background: '#fff',
            }}
          >
            <img src='/images/idx.svg' width='140px' alt='' srcset='' />
            <p className='leading-relaxed mt-6 font-bold border-b pb-5 mb-5 border-gray-200'>
              Ceramic IDX
            </p>
            <p>Acts as an identity solution for each Safient user.</p>
          </div>
        </a>
        <a
          className='p-4 md:w-1/2 sm:w-1/2 w-full'
          href='https://magic.link/'
          target='_blank'
        >
          <div
            className='border-2 border-gray-200 px-4 py-6 rounded-lg'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#fff',
            }}
          >
            <img src='/images/magic.svg' width='180px' alt='' srcset='' />

            <p className='leading-relaxed mt-6 font-bold border-b pb-5 mb-5 border-gray-200'>
              Magic Link
            </p>
            <p>
              Allows Safient users to authenticate to the application without a
              traditional username/ password or without having to install any
              Crypto wallets.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
