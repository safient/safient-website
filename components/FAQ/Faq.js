import React, { useState } from 'react';

import FaqComponent from './faqComponent';

function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Who should use Portex?',
      answer:
        'If you want to store and exchange your crypto portflio information confidentially, Portex is for you',
      open: false,
    },
    {
      question: 'Where is the portfolio information stored?',
      answer:
        <div>Encrypted portfolio information is stored on IPFS decentralized data storage using <a target="_blank" href="https://www.ceramic.network/" style={{textDecoration: "underline"}}>Ceramic Network </a> and 
        <a target="_blank" href="https://www.ceramic.network/" style={{textDecoration: "underline"}}> Textile ThreadDb</a>.</div>,
      open: false,
    },
    {
      question: 'Who can view my encryped portfolio?',
      answer:
        'Your portfolio is visible to everyone that you have given access to.',
      open: false,
    },
    {
      question: 'Do I need to reshare the portfolio when I update it?',
      answer:
        'No, since the same encryption key is used, you do not need to reshare the key or the portfolio.',
      open: false,
    },
    {
      question: 'Can I revoke the acess to my portfolio?',
      answer:
        'Yes, you can update the key and revoke the access to all or selective user (Coming soon)',
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
