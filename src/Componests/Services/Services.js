import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))


    } ,[])

    return (
        <div>
            <h1 className='best'>Featured Services</h1>

      <p><span>Most Demanded Services</span></p>
          <div className='service-site container mb-5'>
              {
                service.map(servic => <Service
                    key={servic.id}
                    servic={servic}
                >

                </Service>)  
              }
          </div>
            
        </div>
    );
};

export default Services;