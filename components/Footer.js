import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='text-gray-700 body-font bg-gray-900'>
      <div className='container px-24 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col '>
        <div className='flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first mobile-footer'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
              About Us
            </h2>
            <nav className='list-none mb-10 font-normal '>
              <li>
                <a
                  href='https://consensolabs.com/#/about'
                  className='text-gray-400 hover:text-gray-800 cursor-pointer'
                >
                  <a target='_blank'>About</a>
                </a>
              </li>
              <li>
                <Link
                  href='https://consensolabs.com/#/team/'
                  className='text-gray-400 hover:text-gray-800 cursor-pointer'
                >
                  <a target='_black'>Team</a>
                </Link>
              </li>
            </nav>
          </div>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white  text-sm mb-3'>
              Developer Resources
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <a className='text-gray-400 hover:text-gray-800 cursor-pointer'>
                  Documentation
                </a>
              </li>
              <li>
                <Link href='https://github.com/getsafex'>
                  <a
                    target='_blank'
                    className='text-gray-400 hover:text-gray-800 cursor-pointer'
                  >
                    Github
                  </a>
                </Link>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
              Contact Us
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <Link href='https://www.consensolabs.com/contact'>
                  <a className='text-gray-400 hover:text-gray-800 cursor-pointer'>
                    Contact
                  </a>
                </Link>
              </li>

              <li>
                <Link href='https://angel.co/company/consensolabs/jobs'>
                  <a
                    className='text-gray-400 hover:text-gray-800 cursor-pointer'
                    target='_blank'
                  >
                    Career
                  </a>
                </Link>
              </li>
            </nav>
          </div>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
              Community
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <Link href='https://twitter.com/getsafex'>
                  <a
                    className='text-gray-400 hover:text-gray-800 cursor-pointer'
                    target='_blank'
                  >
                    Twitter
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://discord.gg/tttGQAwuZx'>
                  <a
                    className='text-gray-400 hover:text-gray-800 cursor-pointer'
                    target='_blank'
                  >
                    Discord
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://blog.consensolabs.com/tag/safex'>
                  <a
                    className='text-gray-400 hover:text-gray-800 cursor-pointer'
                    target='_blank'
                  >
                    Blog
                  </a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=' px-24 '>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-white text-sm text-center sm:text-left'>
            Safex © 2021
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start cursor-pointer'>
            <a
              href='https://www.facebook.com/consensolabs'
              target='_next'
              className='text-gray-500'
            >
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a
              href='https://twitter.com/getsafex'
              target='_blank'
              className='ml-3 text-gray-500 cursor-pointer'
            >
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>

            <a
              href='https://www.linkedin.com/company/consensolabs'
              target='blank'
              className='ml-3 text-gray-500 cursor-pointer'
            >
              <svg
                fill='currentColor'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='0'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
