import { useState } from 'react';

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border rounded shadow-sm'>
      <button
        type='button'
        aria-label='Open item'
        title='Open item'
        className='flex items-center justify-between w-full p-4 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='text-lg font-medium text-gray-900'>{title}</p>
        <div className='flex items-center justify-center w-8 h-8 border rounded-full'>
          <svg
            viewBox='0 0 24 24'
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              points='2,7 12,17 22,7'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className='p-4 pt-0'>
          <p className='text-gray-900'>{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div class='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div class='flex flex-col mb-16 sm:text-center'>
          <div class='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl'>
            <h2 class='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span class='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='#6B7280'
                  class='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='ec5d8ef5-b853-4714-b94f-df28ec98eeb7'
                      x='0'
                      y='0'
                      width='.135'
                      height='.30'
                    >
                      <circle cx='1' cy='1' r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)'
                    width='52'
                    height='24'
                  />
                </svg>
                <span class='relative'>Frequently</span>
              </span>{' '}
              asked Questions
            </h2>
          </div>
        </div>
        <div class='space-y-4 text-gray-900'>
          <Item title='Who should use safient?'>
            If you hold valuable crypto assets, but currently do not have a
            secure backup or inheritance plan, Safient is for you.
          </Item>
          <Item title='Where is the safe information stored?'>
            Encrypted safe information is stored on IPFS decentralized
            storage network using Ceramic Network and Textile Buckets. Even though the
            safe is stored on decentralized storage, it cannot be recovered
            without the guardians collectively reconstructing it.
          </Item>
          <Item title='Can the beneficiary access the safe information?'>
            The safe content cannot be accessed by the beneficiary unless the
            beneficiary claim is passed.
          </Item>
          <Item title='Does the beneficiary get to know what assets are stored?'>
            The safe creator can share the crypto portfolio and the type of data
            stored on a need to know basis that is end to end encrypted for the
            beneficiary.
          </Item>
          <Item title='Can I update the safe?'>
            Yes, the safe can be updated any number of times.
          </Item>
          <Item title='Can I delete the safe?'>
            Yes, the safe can be destroyed by making it unrecoverable.
          </Item>
        </div>
      </div>
    </div>
  );
};
