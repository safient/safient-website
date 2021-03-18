import Image from 'next/image';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Features from '../components/Features';
import How from '../components/How';
import Faq from '../components/FAQ/Faq';

export default function IndexPage() {
  return (
    <div className=' '>
      <Hero />
      <Why />
      <Features />
      <How />
      <Faq />
    </div>
  );
}
