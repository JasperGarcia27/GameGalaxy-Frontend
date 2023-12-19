import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"

export default function Product(props) {

    const { breakPoint, data } = props;
    const { _id, name, image, price } = data;


    console.log(breakPoint)
    return (
        <Col className="mx-auto my-2 mx-md-1 mx-lg-3" xs={12} md={6} lg={breakPoint} style={{ width: '15rem'}}>
            <Card className='cardHighlight shadow-lg bg-white rounded'>
                <Card.Img  variant="top" src={image} alt={name} style={{ height: '15rem'}} />
                <Card.Body>
                    <Link className="stretched-link" style={{ textDecoration: 'none' }} to={`/products/${_id}`}>
                        <Card.Title className='text-dark text-truncate' style={{ fontSize: '15px' }}>{name}</Card.Title>
                    </Link>
                    <Card.Text>₱{price.toLocaleString("en-US")}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}