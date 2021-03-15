import React from 'react';

function Why() {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div class='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Why Portex?
          </h1>
          <p class='mb-8 leading-relaxed'>
            Most of the existing management tools are managed by services that
            don't guarantee complete confidentiality. Even the portfolio tools
            that guarantee don't have a mechanism to exchange and share it with
            other users in a secure manner. We feel that it can be solved with
            the help of a user-controlled profile (Decentralized Identities) and
            an open yet secure way of exchanging messages.
          </p>
        </div>
        <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            class='object-cover object-center rounded'
            alt='hero'
            src='/why.svg'
          />
        </div>
      </div>
    </section>
  );
}

export default Why;
