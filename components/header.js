import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header class='text-gray-600 body-font md:px-24 bg-gray-900'>
      <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
          <img src='/logo.svg' alt='logo' />
        </a>
        <nav class='md:ml-auto flex flex-wrap items-center text-white justify-center'>
          <a class='mr-5 hover:text-gray-900'>Home</a>
          <a class='mr-5 hover:text-gray-900' href="https://github.com/koshikraj/portex" target="_blank">Developers</a>
          <a class='mr-5 hover:text-gray-900' href="https://blog.consensolabs.com/tag/portex" target="_blank">Blog</a>
        </nav>
        <button class='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          App
        </button>
      </div>
    </header>
  );
}
