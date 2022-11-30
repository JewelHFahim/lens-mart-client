import React from 'react';
import Advertise from '../Advertise/Advertise';
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
            <Advertise></Advertise>
            <DetaisInfo></DetaisInfo>
            <Subscribe></Subscribe>


        </div>
    );
};

export default Home;