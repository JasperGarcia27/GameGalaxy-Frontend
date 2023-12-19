import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import {
    Row,
    Col,
    Card,
    Form,
    Button,
    Modal,
    InputGroup,
    Offcanvas
} from 'react-bootstrap';
import Swal from "sweetalert2";


import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

// Components
import ProductSearchCard  from './ProductSearchCard';

// Icon
import { HiMiniMagnifyingGlass } from "react-icons/hi2";


function SearchProductCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const [isActive, setIsActive] = useState(true);

    const [invalidResult, setInvalidResult] = useState('');

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

            if (data.length === 0) {
                console.log("There are no results for what you are looking for.")
                Swal.fire({
                    title: "Not Available",
                    icon: "warning",
                    text: "There are no results for what you are looking for."
                })
                setInvalidResult("There are no results for what you are looking for.")
                return;
  
                
            }
        } catch (error) {
            console.error('Error searching for products:', error);
        }
    };

    console.log(searchQuery)

    useEffect(() => {

        if (searchQuery !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    }, [searchQuery]);

    return (
        <>
            <Link className='text-dark' onClick={handleShow}><HiMiniMagnifyingGlass size={25} /></Link>

            <Modal scrollable show={show} onHide={handleClose}>
                <Modal.Header closeButton>

                    <InputGroup className="mt-1">
                        <Form.Control
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            id="productName"
                            value={searchQuery}
                            onChange={event => setSearchQuery(event.target.value)}
                        />
                        {/* <Button variant="primary" onClick={handleSearch}><HiMiniMagnifyingGlass size={20} /></Button> */}
                        {
                                isActive
                                    ? <Button variant="outline-primary" onClick={handleSearch}><HiMiniMagnifyingGlass size={20} /></Button>
                                    : <Button variant="outline-primary" onClick={handleSearch} disabled ><HiMiniMagnifyingGlass size={20} /></Button>
                            }

                    </InputGroup>

                </Modal.Header>

                <Modal.Body>
                    

                    {searchResults.map(product => (
                        <ProductSearchCard  productProp={product} key={product._id} />
                    ))}

                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchProductCard;