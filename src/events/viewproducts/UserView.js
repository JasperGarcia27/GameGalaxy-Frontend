import React, { useState, useEffect } from 'react';

import {Row,Col} from "react-bootstrap"

// Components
import ProductSearchCard  from '../../components/ProductSearchCard';
import Footer from  '../../components/Footer'
import UserViewProducts from '../../components/products/UserViewProducts';

export default function UserView({productsData}) {
    // console.log(productsData, "products")
    const [products, setProducts] = useState([])

    useEffect(() => {
        const productsArr = productsData.map(product => {
            
            if(product.isActive === true) {
                return (
                    <ProductSearchCard productProp={product} key={product._id}/> 
                )
            } else {
                return null;
            }
        })

        
        setProducts(productsArr)

    }, [productsData])

    return(
        <Row id='ProductPage'>
            <Col>
            {/* { products } */}
            
            
            <UserViewProducts />
            <Footer />
            </Col>
        </Row>
        )
}
