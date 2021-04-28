import React, { useState } from 'react';

import FaqComponent from './faqComponent';

function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Who should use Safex?',
      answer:
        'If you hold valuable crypto assets, but currently do not have a secure backup or inheritance plan, Safex is for you.',
      open: false,
    },
    {
      question: 'Where is the safe information stored?',
      answer: 'Encrypted safe information is stored on IPFS decentralized data storage using Ceramic Network and Textile Buckets. Even though the safe is stored on decentralized storage, it cannot be recovered without guardians collectively do so.',
      // answer:
      //   <div>Encrypted portfolio information is stored on IPFS decentralized data storage using <a target="_blank" href="https://www.ceramic.network/" style={{textDecoration: "underline"}}>Ceramic Network </a> and 
      //   <a target="_blank" href="https://www.ceramic.network/" style={{textDecoration: "underline"}}> Textile ThreadDb</a>.</div>,
      open: false,
    },
    {
      question: 'Can the beneficiary access the safe information?',
      answer:
        'The safe content cannot be accessed by the beneficiary unless the beneficiary claim is passed.',
      open: false,
    },
    {
      question: 'Does the beneficiary get to know what assets are stored?',
      answer:
        'The safe creator can share the crypto portfolio and the type of data stored on a need to know basis that is end to end encrypted for the beneficiary',
      open: false,
    },
    {
      question: 'Can I update the safe?',
      answer:
        'Yes, the safe can be updated any number of times.',
      open: false,
    },
    {
      question: 'Can I delete the safe?',
      answer:
        'Yes, the safe can be destroyed.',
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className='App'>
      <div className='container px-5 py-24 mx-auto'>
        <h1
          className='sm:text-3xl text-2xl font-medium text-center title-font font-body mb-0 text-gray-900'
          data-aos='zoom-in'
        >
          Frequently asked Questions
        </h1>

        <div className='faqs font-body' data-aos='zoom-in'>
          {faqs.map((faq, i) => (
            <FaqComponent faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
