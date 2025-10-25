import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import ToyDeatilsCard from '../component/ToyDeatilsCard';
import { useLoaderData, useParams } from 'react-router';
import Footer from '../component/Footer';

const ToyDetails = () => {
    const data=useLoaderData();
    const {id}=useParams()
    const [toys,setToy]=useState({})
    const [loading, setLoading] = useState(true); 
    // console.log(data,id,toys)

    useEffect(()=>{
        const toydetails=data.find(singleToy => singleToy.id == id);
         if (toydetails) {
      setToy(toydetails);
    }
    setLoading(false);
    },[data,id])
     if (loading) {
   
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-emerald-600 text-xl font-semibold animate-pulse">
          Loading toy details...
        </p>
      </div>
    );
  }

  if (!toys || Object.keys(toys).length === 0) {
  
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg font-semibold">
          Toy not found 
        </p>
      </div>
    );
  }

    return (
        <div >
            <header className='container mx-auto px-4'><Navbar></Navbar></header>
           <main className='container mx-auto px-4 mt-10'>
            <section>
                <h2 className='font-bold text-[40px] text-center'>Toy-details are here</h2>
                <ToyDeatilsCard toy={toys}></ToyDeatilsCard>
                </section>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default ToyDetails;