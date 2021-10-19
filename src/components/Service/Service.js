import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {name, img, description, branch, place, contact} = props.service;
    return (
        <div>
            <Col>
                <Card className='service'>
                        <img src={img} alt="" />
                        <div className="service-des">
                          <h3 className='text-center text-primary my-3'>{name}</h3>
                          <p className='text-center my-0 mx-4'>{description}</p>
                          <h6 className='text-center my-0 mx-4'>Branch: {branch}</h6>
                          <h6 className='text-center my-0 mx-4'>Place: {place}</h6>
                          <h6 className='text-center my-0 mx-4'>Contact: {contact}</h6>
                        </div>
                </Card>
            </Col>
        </div>
    );
};

export default Service;