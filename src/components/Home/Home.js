import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[]);
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 main-part">
                <div className="col main-part">
                <div>
                <h1 className='headerpart'>IMTIAZ HOSPITAL AND LAB</h1>
                <p>Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.The hospital is a showcase of synergy of medical technology and advances in ICT through paperless medical records. </p>
                </div>
                </div>
                <div className="col main-img">
                    <img src="https://png.pngtree.com/png-vector/20210207/ourlarge/pngtree-hospital-building-vector-illustration-in-flat-style-png-image_2897178.jpg" alt="" />
                </div>

            </div>
            <div>
            <h1 className='text-center text-danger my-4'>Our Services</h1>
            <div className="services-portal">
            <Row xs={1} md={2} className="g-4">
            {
                services.map(service => <HomeService
                    key={service.id}
                    service = {service}>

                </HomeService>
                )}
        </Row>
        </div>
            </div>
        </div>
    );
};

export default Home;