import React from 'react';

function Hero() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Portex- Secure crypto portfolio management and exchange.
          </h1>
          <p className='mb-8 leading-relaxed'>
            Most of the existing crypto portfolio management tools are managed
            by services that don't guarantee complete confidentiality. Even the
            portfolio tools that guarantee such privacy don't have a mechanism
            to exchange and share it with other users in a secure manner.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Read More
            </button>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Goto App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
