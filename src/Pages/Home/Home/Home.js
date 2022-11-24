import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Service.js/Categories';
import ServiceBanner from '../Service.js/ServiceBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceBanner></ServiceBanner>
            <Categories></Categories>
        </div>
    );
};

export default Home;