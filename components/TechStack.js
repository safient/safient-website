import React from 'react';

function TechStack() {
  return (
    // <div classNameName='home__hero-section darkBg'>
    //   <div classNameName='container'>
    //     <div classNameName='heading'>
    //       <h1 classNameName='tech__heading'>Our TechStack</h1>
    //     </div>
    //     <div classNameName='Tech__container'>
    //       <div classNameName='box__1' data-aos='zoom-in'>
    //         <div classNameName='card__content'>
    //           <div classNameName='icon'>
    //             <img src='/images/filecoin.png' alt='' srcset='' />
    //           </div>

    //           <h3>Filecoin + Textile Hub, Powergate</h3>
    //         </div>
    //       </div>
    //       <div classNameName='box__1' data-aos='zoom-in'>
    //         <div classNameName='card__content'>
    //           <div classNameName='icon'>
    //             <img src='/images/TextileDB.png' alt='' srcset='' />
    //           </div>

    //           <h3>Textile ThreadDB</h3>
    //         </div>
    //       </div>

    //       <div classNameName='box__1' data-aos='zoom-in'>
    //         <div classNameName='card__content'>
    //           <div classNameName='icon'>
    //             <img src='/images/ceramicIdx.png' alt='' srcset='' />
    //           </div>

    //           <h3>Ceramic IDX</h3>
    //         </div>
    //       </div>

    //       <div classNameName='box__1' data-aos='zoom-in'>
    //         <div classNameName='card__content'>
    //           <div classNameName='icon'>
    //             <img src='/images/Ethereum.png' alt='' srcset='' />
    //           </div>

    //           <h3>Ethereun Platform</h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section className='text-gray-600 body-font d:px-24'>
      <div className='container px-5 py-24 mx-auto px-20'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Our Tech Stack
          </h1>
        </div>
        <div className='flex flex-wrap -m-4 text-center'>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div
              className='border-2 border-gray-200 px-4 py-6 rounded-lg centered'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src='/images/filecoin.svg' width='70px' alt='' srcset='' />

              <p className='leading-relaxed mt-5'>
                Filecoin + Textile Hub, Powergate
              </p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div
              className='border-2 border-gray-200 px-4 py-6 rounded-lg'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '166px',
              }}
            >
              <img
                src='/images/threddb.svg'
                alt=''
                width='70px'
                height='70px'
                srcset=''
              />

              <p className='leading-relaxed mt-5'>Textile ThreadDB</p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div
              className='border-2 border-gray-200 px-4 py-6 rounded-lg'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src='/images/idx.svg' width='140px' alt='' srcset='' />
              <p className='leading-relaxed mt-5'>Ceramic IDX</p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div
              className='border-2 border-gray-200 px-4 py-6 rounded-lg'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src='/images/magic.svg' width='180px' alt='' srcset='' />

              <p className='leading-relaxed mt-5'>Magic Link</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
