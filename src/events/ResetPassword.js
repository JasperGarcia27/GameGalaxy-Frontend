import { useState } from 'react';
import { Button, Collapse, Row, Col, Toast } from 'react-bootstrap';

import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";


function ResetPassword() {

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const token = localStorage.getItem('token'); // Replace with your actual JWT token
            const response = await fetch('https://gamegalaxy-backend.onrender.com/users/reset-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ newPassword: password }),
            });

            if (response.ok) {
                setMessage('Password reset successfully');
                setPassword('');
                setConfirmPassword('');
            } else {
                const errorData = await response.json();
                setMessage(errorData.message);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
            console.error(error);
        }
    };

    return (
        <>
            <Row>
                <Col lg={3}>
                    <Link onClick={toggleShowA} style={{ textDecoration: 'none', color: 'red' }} className='BannerContent'><strong>Reset Password</strong></Link>
                </Col>
                <Col className='bg-'>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Reset Password</strong>
                            <small>Settings</small>
                        </Toast.Header>
                        <Toast.Body>
                            <div className="container">
                                <form onSubmit={handleResetPassword}>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {message &&
                                        <Stack sx={{ width: '100%' }} spacing={2}>
                                            <Alert severity="error">
                                                <AlertTitle>Status</AlertTitle>
                                                This is an alert — <strong>{message}</strong>
                                            </Alert>
                                        </Stack>
                                    }
                                    {/* {message && <div className="alert alert-danger">{message}</div>} */}
                                    <Row>
                                        <Col className='d-flex justify-content-center'>
                                            <button type="submit" className="btn btn-primary mb-2">
                                                Reset Password
                                            </button>
                                        </Col>
                                    </Row>
                                    
                                </form>
                            </div>
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </>
    );
}

export default ResetPassword;