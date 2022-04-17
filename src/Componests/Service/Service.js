import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import './Service.css';

const Service = ({ servic }) => {

  const {id, img, name } = servic;
  return (
    <div>
    

      <div className='servies-box'>
        <div className='single-service'>
          <img src={img} alt="" />
          <h3>{name}</h3>
          <p>This is a Best Photograpy service provider Maker. I can any Photograpy short and excellent all photo Click our service.</p>

          {/* <button className='btn btn-primary'>Details</button> */}

          <Link to={`/details/${id}`}>
          <button className="btn-primary mb-3 px-3 py-2 rounded-2"><span className="fw-bold">{name}:Details</span></button>
        </Link>


{/* <Details></Details> */}
        </div>
      </div>

    </div>
  );
};

export default Service;