import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from '@mui/material/Badge';

function Cart() {

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [previews, setPreviews] = useState([])

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    // useEffect(() => {
    //     fetch(`https://gamegalaxy-api.onrender.com/users/getUserOrders`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)

    //             const numbers = []
    //             const addToCartProducts = []
    //             const cart = []

    //             const generatedRandomNums = () => {
    //                 let randomNum = Math.floor(Math.random() * data.length)
    //                 if (numbers.indexOf(randomNum) === -1) {
    //                     numbers.push(randomNum)
    //                 }
    //                 else {
    //                     generatedRandomNums()
    //                 }
    //             }

    //             addToCartProducts.push(data)
                
    //             console.log(data.length)
    //             setPreviews(data)
    //         })
    // }, [])

    // // for(let i = 0; i < previews.length; i++) {
    // //     console.log(previews[i].products)
    // // }
    // console.log(previews.length)

    return (
        <>
            {values.map((v, idx) => (
                <Link className='text-dark text-center m-2' key={idx} onClick={() => handleShow(v)}>
                    <Badge badgeContent={4} color="error">
                        <AiOutlineShoppingCart size={25} color="action" />
                    </Badge>
                </Link>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    );
}

export default Cart;