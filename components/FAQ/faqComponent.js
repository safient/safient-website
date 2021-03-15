import React from 'react';
// import './faq.css';

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className='faq-question cursor-pointer text-gray-900'>
        {faq.question}
      </div>
      <div className='faq-answer text-gray-600 px-4'>{faq.answer}</div>
    </div>
  );
}

export default FAQ;
