

import { useState, useEffect, useContext } from 'react';
import { Row, Col, Form, Button, Card} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import FileBase64 from 'react-file-base64';
import * as React from 'react';
// import { rejects } from 'assert';

function AddProduct() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    // const[image, setImg] = useState("")


    const { user } = useContext(UserContext);


    //input states
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState('');
    const [category, setCategory] = useState();

    const [isActive, setIsActive] = useState(true);
    const [showEdit, setShowEdit] = useState(false);

    function createProduct(e) {

        e.preventDefault()

        let token = localStorage.getItem('token');
        console.log(token);

        fetch(`https://gamegalaxy-backend.onrender.com/products/`, {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({

                name: name,
                description: description,
                image: image,
                price: price,
                category: category

            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(price);
                console.log(data);

                if (price <= 0) {
                    Swal.fire({
                        title: "Something went wrong",
                        icon: "error",
                        text: "The price should not to be a zero or less than"
                    });
                }
                else {
                    if (data) {
                        Swal.fire({

                            icon: "success",
                            title: "Product Added"

                        })
                    }
                    else {
                        Swal.fire({

                            icon: "error",
                            title: "Unsuccessful Product Creation",
                            text: data.message

                        })
                    }
                }
            })
        setName("")
        setDescription("")
        setImage("")
        setPrice("");
        setCategory("default");
    }


    useEffect(() => {

        if (name !== '' && description !== '' && image !== null && price !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    }, [name, description, image, price]);
    
    function convertToBase64(e) {
        console.log(e)
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result)
        }
        reader.onerror = error => {
            console.log("Error: ", error)
        }
    }

    console.log(category)
    if(category === "default") {
        console.log("choose category")
    }

    console.log(image)
    
    return (
        <>
            <Row>
                <Col lg={{ span: 6, offset: 3 }}>
                    
                        <Form onSubmit={e => createProduct(e)}>
                            <Form.Group className='mt-2'>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter Name" 
                                    name='name' 
                                    required 
                                    value={name} 
                                    onChange={e => { setName(e.target.value) }} 
                                />
                            </Form.Group>
                            <Row>
                                <Col sm={12} lg={4}>
                                    <Form.Group className='mt-2'>
                                        <Form.Label>Price:</Form.Label>
                                        <Form.Control 
                                            className='InputNumber'
                                            type="number" 
                                            placeholder="Enter Price"
                                            name='price' 
                                            required 
                                            value={price} 
                                            onChange={e => { setPrice(e.target.value) }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} lg={4}>
                                    <Form.Group className='mt-2'>
                                        <Form.Label>Cetegory:</Form.Label>
                                            <Form.Select value={category} onChange={e => setCategory(e.target.value)} aria-label="Default select example">
                                                <option value='default'>Select Category</option>
                                                <option value="Desktop">Desktop</option>
                                                <option value="Laptop">Laptop</option>
                                                <option value="Console">Console</option>
                                                <option value="Accessories">Accessories</option>
                                                {/* <option value="Pancit">Pancit</option>
                                                <option value="Pampalamigs">Pampalamigs</option> */}
                                            </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} lg={4}>
                                    <Form.Group className='mt-2'>
                                        <Form.Label>Image:</Form.Label>
                                        <Form.Control 
                                            type="file"
                                            accept='.jpeg, .png, .jpg' 
                                            name='photo' 
                                            onChange={convertToBase64}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className='mt-2'>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    style={{ resize: 'none' }}
                                    as="textarea"
                                    rows={5}
                                    placeholder="Enter Description" 
                                    name='description' 
                                    required 
                                    value={description} 
                                    onChange={e => { setDescription(e.target.value) }}
                                />
                            </Form.Group>
                            
                            <Row className="mt-3">
                                <Col className='text-end'>
                                    {
                                        isActive
                                            ? <Button className="px-5" variant="primary" type="submit">Submit</Button>
                                            : <Button className="px-5" variant="primary" type="submit" disabled>Submit</Button>
                                    }
                                </Col>
                            </Row>
                        </Form>
                </Col>
            </Row>
        </>
    );
}

export default AddProduct;