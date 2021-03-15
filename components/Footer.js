import Link from './Link';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';

export default function Footer() {
  return (
    <footer className='text-gray-700 font-body'>
      <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col '>
        <div className='flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first mobile-footer'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-grey-500 tracking-widest text-sm mb-3'>
              Products
            </h2>
            <nav className='list-none mb-10 font-normal '>
              <li>
                <a
                  href='#'
                  className='text-gray-400 hover:text-gray-800 cursor-pointer'
                >
                  Arbchain
                </a>
              </li>
              <li>
                <a
                  href='https://syndlend.com/'
                  target='_black'
                  className='text-gray-400 hover:text-gray-800 cursor-pointer'
                >
                  Syndlend
                </a>
              </li>
              <li>
                <a
                  href='https://gitfunded.consensolabs.com/docs/overview'
                  target='_blank'
                  className='text-gray-400 hover:text-gray-800 cursor-pointer'
                >
                  GitFunded
                </a>
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
                <a className='text-gray-400 hover:text-gray-800 cursor-pointer'>
                  Whitepaper
                </a>
              </li>
              <li>
                <a className='text-gray-400 hover:text-gray-800 cursor-pointer'>
                  Downloads
                </a>
              </li>
            </nav>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
              Company
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <Link
                  to='/about'
                  className='text-gray-400 hover:text-gray-800 cursor-pointer'
                >
                  About
                </Link>
              </li>

              <li>
                <a
                  href='https://angel.co/company/consensolabs/jobs'
                  target='_blank'
                  className='text-gray-400 hover:text-gray-800 cursor-pointer'
                >
                  Career
                </a>
              </li>
            </nav>
          </div>

          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
              Address
            </h2>
            <nav className='list-none mb-10'>
              <p className='text-gray-400 '>
                91springboard, 512/10, Service Lane, Outer Ring Rd, Mahadevpura
                Bengaluru, Karnataka, 560048
              </p>
            </nav>
          </div>
        </div>
      </div>
      <div className='  '>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-white text-sm text-center sm:text-left'>
            Portex © 2021
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
              href='https://twitter.com/consensolabs'
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
