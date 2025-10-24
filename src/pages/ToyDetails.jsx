import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import ToyDeatilsCard from '../component/ToyDeatilsCard';
import { useLoaderData, useParams } from 'react-router';

const ToyDetails = () => {
    const data=useLoaderData();
    const {id}=useParams()
    const [toys,setToys]=useState({})
    // console.log(data,id,toys)

    useEffect(()=>{
        const toydetails=data.find(singleToy => singleToy.id == id);
        setToys(toydetails)
    },[data,id])
    return (
        <div >
            <header className='container mx-auto px-4'><Navbar></Navbar></header>
           <main className='container mx-auto px-4'>
            <section>
                <h2>Toy-details are here</h2>
                <ToyDeatilsCard toys={toys}></ToyDeatilsCard>
            </section>
           </main>
        </div>
    );
};

export default ToyDetails;