import React from 'react';

function Why() {
  return (
    <section className='text-gray-600 body-font  md:px-24 bg-gray-50'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Why Safex?
          </h1>
          <p className='mb-8 leading-relaxed'>
          Safex promises to securely and conveniently store any critical information that is needed to access and recover the assets in case of any tragic events. Safex also provides a trustless yet safe way to transfer and inherit the assets by close ones whenever such an unfortunate scenario occurs.
          </p>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='/why.svg'
          />
        </div>
      </div>
    </section>
  );
}

export default Why;
