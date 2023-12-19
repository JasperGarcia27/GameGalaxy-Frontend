import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Swal from "sweetalert2";

// Components
import ProductSearchCard from '../components/ProductSearchCard ';

// Icon
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const ProductSearch = () => {
const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState([]);

const handleSearch = async () => {
    try {
      const response = await fetch(`https://gamegalaxy-backend.onrender.com/products/searchByName`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName: searchQuery })
      });
      const data = await response.json();
      setSearchResults(data);
      console.log(data);

      if(data.length === 0) {
        console.log("There are no results for what you are looking for.")
        Swal.fire({
					title: "Not Available",
					icon: "warning",
					text: "There are no results for what you are looking for."
				})
      }
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

  return (
    <div className='container'>
        <div className="form-group">
            <Row className='bg-'>
                <Col className='bg-' lg={6}>
                    <input
                        type="text"
                        id="productName"
                        className="form-control"
                        value={searchQuery}
                        onChange={event => setSearchQuery(event.target.value)}
                    />
                </Col>
                <Col className='bg-'>
                    <Button variant="outline-primary" onClick={handleSearch}><HiMiniMagnifyingGlass size={20}/></Button>
                </Col>
            </Row>
            
        </div>
        <hr/>
        <div className='mx-5'>
            {searchResults.map(product => (
                <ProductSearchCard  productProp={product} key={product._id}/>
            ))}
            
        </div>
    </div>
  );
};

export default ProductSearch;