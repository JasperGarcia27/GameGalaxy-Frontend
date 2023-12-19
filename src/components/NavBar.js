import { useState } from 'react';
import { Button, Collapse, Row, Col, Toast } from 'react-bootstrap';

import * as React from 'react';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


function UpdateProfile() {

    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleUpdateProfile = async () => {
        setIsUpdating(true);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://gamegalaxy-backend.onrender.com/users/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    address,
                }),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data) {
                        setFirstName("");
                        setLastName("");
                        setAddress("");


                        /*Swal.fire({
                          title: "Success",
                          icon: "success",
                          text: "User Profile Successfully Updated"
                        })*/
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

                        let timerInterval
                        Swal.fire({
                            title: 'Updating...',
                            html: 'Updatinging Users Profile <b></b>',
                            timer: 1000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                                const b = Swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft()
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                console.log('I was closed by the timer')
                            }
                        })
                        /*Toast.fire({
                          icon: 'success',
                          title: 'Successfully Updated'
                        })*/
                    } else {
                        Swal.fire({
                            title: "Error",
                            icon: "error",
                            text: "User Profile Unsuccessfully Updated"
                        })
                    }
                })

            if (response.ok) {
                console.log('Profile updated successfully');
            } else {
                console.error('Error updating profile');
            }
        } catch (error) {
            console.error('Error updating profile', error);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <>
            <Row>
                <Col className='d-flex justify-content-end bg-' lg={4}>
                    {/* <Button onClick={toggleShowA} className="">
                        Update Profile
                    </Button> */}
                    <Link onClick={toggleShowA} style={{ textDecoration: 'none' }}>Update Profile</Link>
                </Col>
                <Col className='bg-'>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Update Profile</strong>
                            <small>Settings</small>
                        </Toast.Header>
                        <Toast.Body>
                            <div className="container">
                                        <div className="mb-3">
                                            <label htmlFor="firstName">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="form-control"
                                                value={firstName}
                                                required
                                                onChange={handleFirstNameChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="form-control"
                                                value={lastName}
                                                required
                                                onChange={handleLastNameChange}
                                            />
                                        </div>
                                <div className="mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        id="Address"
                                        className="form-control"
                                        value={address}
                                        required
                                        onChange={handleAddressChange}
                                    />
                                </div>
                                <Row>
                                    <Col className='d-flex justify-content-center'>
                                        <button className="btn btn-primary" onClick={handleUpdateProfile}>
                                            Update Profile
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </>
    );
}

export default UpdateProfile;