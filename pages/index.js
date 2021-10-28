import React from 'react';
import MainSearch from '../components/MainSearchBar';
import Categories from "../components/Category";
import Header from '../components/Header';

const Landing = () => {
    return(
        <>
        <Header/>
        <MainSearch placeholder="search"/>
        <Categories /> 
        </>
    );
};


export default Landing;