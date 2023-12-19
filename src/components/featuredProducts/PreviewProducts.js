import React from 'react';
import {Col, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react"


export default function Product(props){

	const {breakPoint, data} = props;
	const {_id, name, description, image, price} =  data;
    const [productImages, setProductImages] = useState(null);

	
	return(
        <Row className='mx-1'>
            <Col className="my-2 my-lg-0" xs={12} md={breakPoint}>            
                {/* <Card className="cardFeaturedHighlight" style={{width: "18rem"}}> */}
                <Card className="cardFeaturedHighlight">
                    <Card.Img className="cardFeaturedImage" variant="top" src={image}  />
                    {/* <Card.Img className="cardFeaturedImage" variant="top" src={image} style={{maxWidth: '100%', maxHeight: '100%', width: "18rem"}}/> */}
                    <Card.Body>
                        <Card.Title className="text-center text-truncate">{name}</Card.Title>
                        <Card.Text className='text-truncate'>{description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h5 className="text-center">₱{price.toLocaleString("en-US")}</h5>
                        <Link id='seemore' className="btn d-block" to={`/products/${_id}`}>Details</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
	)
}