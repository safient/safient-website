import React, { useState } from 'react';

import FaqComponent from './faqComponent';

function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Who can be part of the Arbchain platform?',
      answer:
        'Any stakeholder (Party, Arbitrator, Court, Witness, Expert, Registrar) can register an be part of the platform',
      open: false,
    },
    {
      question: 'Are the documents uploaded on the platform secure?',
      answer:
        'Yes, we use the safest encryption techniques to ensure that the documents are accessed only by the selected parties',
      open: false,
    },
    {
      question: 'Does it support all the arbitration procedures?',
      answer:
        'Although our platform is configurable with any arbitration proceeding, currently it is built to support LCIA institute.',
      open: false,
    },
    {
      question: 'Are the awards generated on the platform legally binding?',
      answer:
        'Yes, the award is legally compliant and binding like the conventional awards, Along with this, our platform simplifies the award generations and guaranties a quicker resolution.',
      open: false,
    },
    {
      question: 'Does Arbchain use smart contracts?',
      answer:
        'Yes, Arbchain is built on Ethereum Enterprise platform called Hyperledger Besu and executes smart contracts developed in Solidity language',
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
