import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, []);

    return (
        <div className='doctors-panel'>
            <div className="doctors-portal">
            <Row xs={1} md={2} className="g-4">
            {
                doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor = {doctor}
                ></Doctor>)
            }
        </Row>
            
            </div>
        </div>
    );
};

export default Doctors;