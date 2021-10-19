import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const {name, specialities, group, practiseDay, practiseTime, img} = props.doctor;

    return (
        <div className='l'>
            <Col>
                <Card className='card'>
                        <img src={img} alt="" />
                        <div className="card-des">
                        <h4 className='text-primary'>Name: {name}</h4>
                        <h6 className='text-success'>Specialist: {specialities}</h6>
                        <h6>Group: {group}</h6>
                        <p>Available in: {practiseDay}</p>
                        <p>Time: {practiseTime}</p>
                        </div>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;