import React from 'react';
import MainSearch from '../components/MainSearchBar';
import Categories from "../components/Category";

const Landing = () => {
    return(
        <>

        <MainSearch placeholder="search"/>
        <Categories /> 
        </>
    );
};


export default Landing;