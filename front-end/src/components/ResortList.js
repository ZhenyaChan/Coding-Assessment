import React, {useState, useEffect} from 'react';

import ResortItem from "./ResortItem";


const ResortList = () => {

  const [resorts, setResorts] = useState([{
    id: 0,
    title: "",
    price: 0,
    image: null
  }]);

  useEffect(()=>{
    const URL = "http://localhost:5000/resorts";

    fetch(URL)
    .then(response=>response.json())
    .then(json=>{
      setResorts(json.results);
    })
    .catch(err=>console.log(err));

  }, []);

  return (
    <section id="section-resort-list">
      <div className="container">

        <h1>Featured Resort</h1>

        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          {resorts.map(resort=>(<ResortItem id={resort._id} title={resort.title} image={resort.imageSrc} price={resort.price} />))}
        </div>
      </div>
    </section>

  );
};

export default ResortList;
