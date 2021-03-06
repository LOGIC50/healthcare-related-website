import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[]);
    return (
        <div>
            <h1 className='text-center text-primary'>Our Services</h1>
            <div className="services-portal">
            <Row xs={1} md={2} className="g-4">
            {
                services.map(service => <Service
                    key={service.id}
                    service = {service}
                ></Service>)
            }
        </Row>
            
            </div>
            
        </div>
    );
};

export default Services;