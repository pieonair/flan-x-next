import React from 'react';
import MainSearch from '../components/MainSearchBar';
import Categories from "../components/Category";
import Header from '../components/Header';

const Landing = () => {
    return(
        <>
        <Header/>
        {/* add bar here */}
        <section className="w-full h-screen mt-8 bg-mainOne bg-cover bg-center">
        </section>
        <section className="space-x-5 pt-8 pb-14 flex bg-white">
            <div className="m-4 p-12 w-full h-screen bg-mainTwo"></div>
            <div className="m-4 p-12 w-full bg-mainThree"></div>
            <div className="m-4 p-12 w-full bg-mainFour"></div>
        </section>
        <section className="w-full h-screen bg-white">
        <Categories/> 
        </section>
        <section className="flex w-full h-screen bg-mainJoinUs bg-cover bg-center">
            <div className="m-auto items-center">
                <button className="mt-28 h-12 w-36 text-white rounded-lg bg-button-blue">Sign Up Now</button> 
            </div>
        </section>
        <section className="w-full h-64 bg-white">
            about section
        </section>
        </>
    );
};


export default Landing;