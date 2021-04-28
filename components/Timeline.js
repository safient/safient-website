import { useState } from 'react';

const Divider = () => {
  return (
    <div className='border border-gray-200 dark:border-gray-600 w-full my-8' />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className='text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className='mb-4 ml-2'>
      <div className='flex items-center mb-2 text-green-700 dark:text-green-300'>
        <span className='sr-only'>Check</span>
        <svg className='h-4 w-4 mr-2' viewBox='0 0 24 24'>
          <g
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
            <path d='M22 4L12 14.01l-3-3' />
          </g>
        </svg>
        <p className='font-medium text-gray-900 dark:text-gray-100'>{title}</p>
      </div>
      <p className='text-gray-700 dark:text-gray-400 ml-6'>{children}</p>
    </li>
  );
};

export default function Timeline() {
  return (
    <div className='container mx-auto px-32 py-8 bg-gray-50'>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-10 mt-8 text-black dark:text-white'>
        What are we upto ? 
      </h3>
      <Year>2020 - Q4</Year>
      <ul>
        <Step title='Safex concept ideation 💡'>
          <ul>
          <li> - We began our user research for the problem and solution that we deviced for crypto asset inheritance. </li>
          <li> - Evaluated the technical and economical feasibility of the solution </li>
          </ul>
          
        </Step>
      </ul>
      <Divider />
      <Year>2021 - Feb</Year>
      <ul>
        <Step title='Genesis of a sister product of Safex at ETHDenver 🚀'>
        We built a confidential portfolio sharing application (<a href="https://portex.xyz" target="_blank" style={{textDecoration: "underline"}}>Portex</a>) at <a href="https://devfolio.co/submissions/portex-7c58" target="_blank" style={{textDecoration: "underline"}}>ETHDenver 2021 </a> to validate the technical feasibility. Portex gained a lot of traction for the implementation and was recognized as one of the top 20 hacks 🎊 . 
        </Step>
      </ul>
      <Divider />
      <Year>2021 - April</Year>
      <ul>
        <Step title='Safex design and prototype ✨'>
          <p>Taking all the feedbacks from our hackathon project, we started to design and prototype the solution for Safex.
           We planned all the features, integrations and layed our architecture for our initial implementation.
          </p>
        </Step>
      </ul>
      <Divider />
      <Year>2021 - Q2</Year>
      <ul>
        <Step title='Closed beta release'>
        Closed beta release for the community. Features include:
        <ul>
          <li> - Secret sharing mechanism using guardians </li>
          <li> - Inheritance claims using Kleros </li>
          <li> - Identity management for users </li>
        </ul>
        </Step>
        <Step title='Beta release'>
        Beta release for the community. Features include:
        <ul>
          <li> - Well tested and audited contracts for inheritance claims</li>
          <li> - Well tested secret sharing with optimised incentivization mechanism</li>
        </ul>
        </Step>
        
      </ul>
      <Divider />
    </div>
  );
}
