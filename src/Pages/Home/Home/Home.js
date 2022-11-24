import React from 'react';
import Banner from '../Banner/Banner';
import DetaisInfo from '../DetaisInfo/DetaisInfo';
import Categories from '../Service.js/Categories';
import ServiceBanner from '../Service.js/ServiceBanner';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceBanner></ServiceBanner>
            <Categories></Categories>
            <DetaisInfo></DetaisInfo>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;