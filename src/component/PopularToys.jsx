import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/Toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto bg-lime-600 rounded-xl ">
      <div className="text-center mb-10 psace-y-2">
        <h2 className="text-5xl font-extrabold text-center mt-20"
          style={{ fontFamily: "Poppins, sans-serif" }}>
          Popular In Store
        </h2>

        <p className="mt-4 text-2xl text-white">
          Customers’ favorite products this week. What’s so special?{" "}
          <span className="font-bold">Check it out!</span>
        </p>
      </div>
      <div className="px-6 md:px-12 lg:px-5 py-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toys.map((toy) => (
            <div
              key={toy.id}
              className="card bg-base-100 shadow-md transition-transform duration-500  hover:scale-105 hover:-translate-y-3 hover:shadow-2xl "
            >
              <figure>
                <img
                  src={toy.thumbnail}
                  alt={toy.toyName}
                  className="h-50 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{toy.toyName}</h2>
                <p>Rating: ⭐ {toy.rating}</p>
                <p>Available: {toy.availableQuantity}</p>
                <p>Price: {toy.price}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/toy-details/${toy.id}`}
                    className="btn btn-sm bg-[#5c7a72] text-white"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
