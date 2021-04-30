import React from 'react';
import { Nav } from '@components/NavBar';
import { Header } from '@components/Header';
import { Feature, Feature2, Feature3 } from '@components/Features';
import { Step } from '@components/How';
import { TechStack } from '@components/TechStack';
import { DevResources } from '@components/Resources';
import { TimeLine } from '@components/TimeLine';
import { Cta } from '@components/Cta';
import { Faq } from '@components/Faq';
import { Footer } from '@components/Footer';
import { Blog } from '@components/Blog';

function IndexPage() {
  return (
    <>
      <Nav />
      <Header />

      <Feature3 />
      <Step />
      <TechStack />
      <DevResources />
      <TimeLine />
      {/* <Blog /> */}
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}

export default IndexPage;
