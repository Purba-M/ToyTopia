import React, { useEffect, useState } from 'react';

const PopularToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('/Toys.json')
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto  ">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Toys</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {toys.map((toy) => (
          <div key={toy.id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={toy.thumbnail}
                alt={toy.toyName}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {toy.toyName}
                
              </h2>
              <p>Rating: ⭐ {toy.rating}</p>
              <p>Available: {toy.availableQuantity}</p>
              <p>Price: {toy.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm bg-[#5c7a72] text-white">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularToys;
