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
        <section className="space-x-5 pt-8 pb-14 flex bg-blue-50">
            <div className="m-4 p-12 flex items-center w-full h-screen bg-mainTwo">
                <h1 className="pl-20 pt-24">Find Freelancers</h1>
                <p className="pt-72">Find Freelancers working online from over 30 different platforms</p>
            </div>
            <div className="m-4 p-12 flex items-center w-full h-screen bg-mainThree">
                <h1 className="pl-20 pt-24">Check Platforms</h1>
                <p className="pt-72">Check which platforms the freelancer you are looking for is on</p>
            </div>
            <div className="m-4 p-12 flex items-center w-full h-screen bg-mainFour">
                <h1 className="pl-20 pt-24">Verify Freelancers</h1>
                <p className="pt-72">Verify the freelancer through other clients' reviews across platforms</p>
            </div>
        </section>
        <section className="w-full h-screen bg-white">
        <Categories /> 
        </section>
        <section className="flex w-full h-screen bg-mainJoinUs bg-cover bg-center">
            <div className="m-auto items-center">
                <p>Create quick beautiful prototypes using Containers Web Wireframe Kit and use the tools to create working prototypes and user journey map.</p>
                <button className="mt-12 h-12 w-36 text-white rounded-lg bg-button-blue">Sign Up Now</button> 
            </div>
        </section>
        <section className="w-full h-screen bg-white">
            about section
        </section>
        </>
    );
};


export default Landing;