import React from 'react';
import Hero from './Hero';
import Features from './Features';
import WorkProcess from './WorkProcess';
import Advantages from './Advantages';
import SupplyChainInfographic from './SupplyChainInfographic';
import Statistics from './Statistics';
import Partners from './Partners';
import Reviews from './Reviews';
import Calculator from './Calculator';
import Blog from './Blog';
import Locations from './Locations';
import Certificates from './Certificates';
import Team from './Team';
import FAQ from './FAQ';
import ServicesOverview from './ServicesOverview';
import CallToAction from './CallToAction';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <WorkProcess />
      <Advantages />
      <SupplyChainInfographic />
      <Statistics />
      <Partners />
      <ServicesOverview />
      <Reviews />
      <Calculator />
      <Blog />
      <Locations />
      <Certificates />
      <Team />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default Home; 