import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from "sweetalert2";
import { Divider, Box, TextField } from '@mui/material';

import { GiGamepadCross } from "react-icons/gi";


export default function Login(props) {
    const { user, setUser } = useContext(UserContext);

    // State hooks to store the values of the input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(true);

    function authenticate(e) {

        // Prevents page redirection via form submission
        e.preventDefault();
        fetch(`https://gamegalaxy-backend.onrender.com/users/login`, {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email: email,
                password: password

            })
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                if (typeof data.access !== "undefined") {

                    localStorage.setItem('token', data.access);
                    window.localStorage.setItem('isLoggedIn', true);

                    console.log(data.access)

                    retrieveUserDetails(data.access)

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    setUser({
                        access: localStorage.getItem('token')
                    })
                    // window.localstorage.getItem("isLoggedIn", true)


                } else {

                    Swal.fire({
                        title: "Authentication Failed Succesful",
                        icon: "error",
                        text: "Check your Login details"
                    })

                }
            })
        // Clear input fields after submission
        setEmail('');
        setPassword('');


    }

    const retrieveUserDetails = (token) => {
        fetch(`https://gamegalaxy-backend.onrender.com/users/getUserDetails`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
                })
            })
    }

    console.log(email)
    console.log(password)

    useEffect(() => {

        if (email !== '' && password !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    }, [email, password]);

    return (
        (user.id !== null)
            ? <Navigate to="/products" />
            : <Row id='LogiPage' style={{height:'100vh'}}>
                
                <Row className='d-flex align-items-center'>
                    <Col md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 4 }} >
                        <div className=' mb-1 bg-white my-lg-4 py-5 px-4 my-5'>

                            <h2 className="BrandTitle my-5 text-center">Login to <h1 className='BrandTitle'><Link className='text-dark' style={{ textDecoration: 'none' }} to={"/"}>Game <GiGamepadCross size={30} className='pb-1 m-0' /> Galaxy</Link></h1></h2>
                            <Form onSubmit={(e) => authenticate(e)}>
                                <Col className='text-start'>

                                    <Box className="mb-3">
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Box>
                                    <Box>
                                        <TextField
                                            fullWidth
                                            label="Password"
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </Box>
                                </Col>
                                <Row>
                                    <Col className='mt-4 mb-5' md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }}>
                                        <Row>
                                            {
                                                isActive
                                                    ? <Button variant="primary" type="submit" id="submitBtn">Submit</Button>
                                                    : <Button variant="primary" type="submit" id="submitBtn" disabled>Submit</Button>
                                            }
                                        </Row>
                                    </Col>
                                </Row>
                            </Form>
                            <Col className='text-center text-muted'>
                                <Divider>New to <Link className='text-muted' style={{ textDecoration: 'none' }} to={"/"}><strong>Game Galaxy</strong></Link>? <Link to={"/register"}>Create Account</Link></Divider>
                            </Col>
                        </div>
                        
                    </Col>
                </Row>
                {/* <Row>
                    <Col className='text-center text-muted' sm={{ span: 2, offset: 0 }} md={{ span: 4, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                        <Divider>New to <Link className='text-muted' style={{textDecoration:'none'}} to={"/"}><strong>Game Galaxy</strong></Link>? <Link to={"/register"}>Create Account</Link></Divider>
                    </Col>
                </Row> */}
            </Row>
    )
}