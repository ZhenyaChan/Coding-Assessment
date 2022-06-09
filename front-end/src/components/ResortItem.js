import React from 'react';
import {Link} from 'react-router-dom';

const ResortItem = (props) => {
  return  (

    <div className="resort-card">

      <Link to = {`/resorts/${props.id}`}> 
          <img src={props.image} alt=""/>   
      </Link> 

      <div className="resortContent">
          <h3>{props.title}</h3>
          <p>${props.price} per night</p>
      </div>

  </div>

  );
};

export default ResortItem;
