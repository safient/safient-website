export const Feature3 = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-gray-50 '>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='#6B7280'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern id='d9d7687a-355f-4502-8ec4-7945db034688' x='0' y='0' width='.135' height='.30'>
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect fill='url(#d9d7687a-355f-4502-8ec4-7945db034688)' width='52' height='24' />
            </svg>
            <span className='relative'>Why Safient?</span>
          </span>{' '}
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Have you ever wondered how will you pass on your{' '}
          <b>valuable crypto assets </b> to your loved ones in case of an
          unfortunate event, or what happens when you no longer have access to
          your unsafe secret backup ?
          <br /> <br />
          Worry no more, Safient will help you securely manage all the critical
          information that is needed to access and recover the assets so that
          your loved ones can inherit them with <b>100 % surety </b> incase of
          any tragic event.
        </p>
      </div>
      <div className='grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 lg:px-28 '>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/encrypted.svg' alt='' srcset='' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Secure Safes
          </h6>
          <p className='text-base text-gray-900'>
            Backup your secrets on our Safient safe that can only be
            recovered by you at any time.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/api.svg' alt='' srcset='' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Convenient Inheritance
          </h6>
          <p className='text-base text-gray-900'>
            Ensure that your safes are inherited by beneficiaries only incase of tragic events.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/confidential.svg' alt='' srcset='' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Trustless Recovery Protocol
          </h6>
          <p className='text-base text-gray-900'>
            The safes are protected and governed by trustless
            guardians and arbitrators (Using Kleros) to ensure the highest
            degree of resilience.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/dispute.svg' alt='dispuite' srcset='' width='24px' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Dispute Resolution
          </h6>
          <p className='text-base text-gray-900'>
            Dipute resolution platform quickly resolves all the claims for inheritance of safes. Currently using{' '}
            <a href='https://kleros.io/integrations' target='_blank'>
              <u>Kleros court</u>
            </a>
            .
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/shared.svg' alt='shared' srcset='' width='24px' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Share Portfolio
          </h6>
          <p className='text-base text-gray-900'>
            Safient allows to share portfolio confidentially on need to know
            basis with the beneficiaries even before the safe is recovered. Get
            to know more{' '}
            <a href='https://portex.xyz' target='_blank'>
              <u>here</u>
            </a>
            .
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <img src='/FeaturesIcons/decentralized.svg' alt='decentralized' width='24px' srcset='' />
          </div>
          <h6 className='mb-2 text-lg text-gray-900 font-semibold leading-5'>
            Decentralization - Simplified
          </h6>
          <p className='text-base text-gray-900'>
            Onboarding and using a trustless, decentralized application is
            always intimidating. Safient makes the user experience easier than
            ever with minimal and intuitive interactions.
          </p>
        </div>
      </div>
    </div>
  );
};
