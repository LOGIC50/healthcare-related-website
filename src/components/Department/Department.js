import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Department.css'

const Department = (props) => {
    const {name, img, details} = props.department;
    return (
        <div>
            <Card className="text-center">
              <Card.Body className='body'>
                <img src={img} alt="" />
              <Card.Title className='text-danger fw-bold'>{name}</Card.Title>
              <Card.Text>
                {details}
              </Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
        </div>
    );
};

export default Department;