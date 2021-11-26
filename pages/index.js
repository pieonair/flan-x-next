import React from 'react';
import MainSearch from '../components/MainSearchBar';
import Categories from "../components/Category";
import Header from '../components/Header';

const Landing = () => {
    return(
        <>
        <section className="w-full h-screen bg-mainOne bg-cover bg-center">
        <Header/>
        <MainSearch placeholder="search"/>
        </section>
        <div>
        <Categories /> 
        </div>
        </>
    );
};


export default Landing;