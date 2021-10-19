import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HomeService.css'

const HomeService = (props) => {
    const {name, img, description} = props.service;
    return (
        <div>
            <Col>
                <Card className='service'>
                        <img src={img} alt="" />
                        <div className="service-des">
                          <h3 className='text-center text-primary my-3'>{name}</h3>
                          <p className='text-center my-0 mx-4'>{description}</p>
                          <div className='btn'>
                          <button><NavLink className='button-link' to='/services'>Details</NavLink>
                          </button>
                          </div>
                        </div>
                </Card>
            </Col>
        </div>
    );
};

export default HomeService;