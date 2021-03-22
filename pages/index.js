import Image from 'next/image';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Features from '../components/Features';
import How from '../components/How';
import Faq from '../components/FAQ/Faq';
import Cta from '../components/Cta';
import TechStack from '@components/TechStack';
import Header from '@components/header';
import Timeline from '@components/Timeline';

export default function IndexPage() {
  return (
    <div className=' '>
      <Header />
      <Hero />
      <Why />
      <Features />
      <How />
      <TechStack />
      <Timeline />
      <Faq />
      <Cta />
    </div>
  );
}
