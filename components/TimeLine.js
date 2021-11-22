const Year = ({ year, quater, heading, children }) => (
  <div className='mb-10 border-t border-b divide-y bg-gray-50'>
    <div className='grid py-8 sm:grid-cols-4'>
      <div className='mb-4 ml-32 sm:mb-0'>
        <div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
          <a
            href='/'
            className='transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-lg'
            aria-label='Category'
          >
            {year}
          </a>
          <h4 className='text-gray-600 text-lg'>{quater}</h4>
        </div>
      </div>
      <div className='sm:col-span-3 lg:col-span-2 text-gray-700'>
        <div className='mb-3'>
          <a
            href='/'
            aria-label='Article'
            className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
          >
            <p className='font-medium text-gray-900 dark:text-gray-100 text-2xl'>
              {heading}
            </p>
          </a>
        </div>
        {children}
      </div>
    </div>
  </div>
);

export const TimeLine = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
    <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='34f481be-159a-4846-821d-9ca19fb6bcc5'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#34f481be-159a-4846-821d-9ca19fb6bcc5)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>What</span>
          </span>{' '}
          are we upto?
        </h2>
      </div>

      <Year heading='Safient concept ideation 💡' year='2020' quater='Q4'>
        <ul>
          <li className='text-gray-700'>
            {' '}
            - We began our user research for the problem and solution that we
            deviced for crypto asset inheritance.{' '}
          </li>
          <li>
            {' '}
            - Evaluated the technical and economical feasibility of the solution by integrating solutions such as Ceramic network, Textile ThreadDB, Kleros,  IPFS/ Filecoin.{' '}
          </li>
        </ul>
      </Year>

      <Year
        heading='Genesis of a sister product of Safient at ETHDenver 🚀'
        year='2021'
        quater='FEB'
      >
        <ul>
          We built a confidential portfolio sharing application (
          <a
            href='https://portex.xyz'
            target='_blank'
            style={{ textDecoration: 'underline' }}
          >
            Portex
          </a>
          ) at{' '}
          <a
            href='https://devfolio.co/submissions/portex-7c58'
            target='_blank'
            style={{ textDecoration: 'underline' }}
          >
            ETHDenver 2021{' '}
          </a>{' '}
          to validate the technical feasibility. Portex gained a lot of traction
          for the implementation and was recognized as one of the top 20 hacks
          🎊 .
        </ul>
      </Year>

      <Year heading='Safient design and prototype ✨' year='2021' quater='APRIL'>
        <p>
        Taking all the feedback from our hackathon project, we started to design and prototype the solution for Safient. We planned all the features, integrations and laid out our architecture for the initial implementation, and conducted a detailed user research survey to verify our solution approach.
        </p>
        <br/>
        <b>
        Safient was one of the top 3 projects in the <a
            href='https://filecoin.io/blog/posts/249k-for-17-projects-from-dorahacks-filecoin-grant-hackathon/'
            target='_blank'
            style={{ textDecoration: 'underline' }}
          >
            DoraHack's Filecoin Grant
          </a> {' '} program.
        </b>
      </Year>

      <Year heading='Demo and Private beta release 🧪' year='2021' quater='Q4'>
        Private beta demo to the community. Features include:
        <ul>
          <li className='mt-3'> - Initial community edition application for safekeeping and inheritance with a few safe claim approach.</li>
          <li> - SDKs to communicate with our alpha version of Safient protocol.  </li>
        </ul>
      </Year>
      <Year heading='Beta release to the community 🚀' year='2022' quater='Q1'>
        Features include:
        <ul>
          <li className='mt-3'> - Well tested and audited contracts for inheritance claims </li>
          <li> - Well tested Safient protocol to create, access, claim safes </li>
          <li> - Planned economics to generate the right traction (value) for the users and incentivized actors </li>
        </ul>
      </Year>
      <Year heading='Audit and mainnet release 🚀' year='2022' quater='Q2'>
        Main net release for the community. Features include:
        <ul>
          <li className='mt-3'> - Safient will undergo bug bounty program and security audit before the mainnet release </li>
        </ul>
      </Year>
    </div>
  );
};
