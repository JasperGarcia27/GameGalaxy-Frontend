import {Row, Col, Form, Button, Card, FloatingLabel} from 'react-bootstrap';
import {useState, useEffect, useContext} from 'react';
import Swal from "sweetalert2";
import { Navigate, Link, userNavigate, useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import { Divider, Box, TextField } from '@mui/material';
import { GiGamepadCross } from "react-icons/gi";

export default function Register(){
	const {user, setUser} = useContext(UserContext);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");	
	const [address, setAddress] = useState("");	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	// State to determine whether the submit button is enabled or not
	const [isActive, setIsActive] = useState(false);

	const navigate = useNavigate();

	// Check if the values are logged

	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(address);
	console.log(password);
	console.log(confirmPassword);

	function registerUser(e){
		// Prevents page redirection via form submissions
		e.preventDefault();

		fetch(`https://gamegalaxy-backend.onrender.com/users/register`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				address: address,
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			
			// data will only contain an email property if we can properly save our user
			if(data){
				// Clear input fields
				setFirstName("");
				setLastName("");
				setAddress("");
				setEmail("");
				setPassword("");
				setConfirmPassword("")
				
				Swal.fire({
                    title: "Register Successful!",
                    icon: "success",
                    text: "Thank you for registration"
                })
				navigate("/login")
			} 
			else {
				Swal.fire({
                    title: "Failed to Register",
                    icon: "error",
                    text: "error for registration"
                })
			}
		})

	}

	useEffect(()=>{
		if(firstName !== "" && lastName !== "" && address !== "" && email !== "" && password !=="" && confirmPassword !== "" && password === confirmPassword){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	},[ firstName, lastName, address, email, password, confirmPassword])


	return(
		(user.id !== null) ?
            <Navigate to="/products"/>
        :
		<>    
            <Row id='RegisterPage' className='d-flex justify-content-end'>
                <Col md={{span:8, offset:2}}  lg={{span:4, offset:4}} >
                    <div className='bg-white px-4 pt-5' >
                        <Card.Body>
						
                            <Card.Title><h2 className="BrandTitle text-center">Register on <h1 className='BrandTitle'><Link className='text-dark' style={{ textDecoration: 'none' }} to={"/"}>Game <GiGamepadCross size={30} className='pb-1 m-0' /> Galaxy</Link></h1></h2></Card.Title>
							<Form onSubmit={(e) => registerUser(e)}>
								<Row>
									<Col lg={6} sm={12} class="col-lg-6">
										<Box className="mb-3">
											<TextField
											color='primary' 
											fullWidth 
											label="First Name" 
											id="firstName"

											type="text"
											placeholder="First Name"   
											required
											value={firstName} 
											onChange={e => {setFirstName(e.target.value)}} 
											/>
										</Box>
									</Col>
									<Col lg={6} sm={12} class="col-sm-6">
										<Box className="mb-3">
											<TextField
											color='primary' 
											fullWidth 
											label="Last Name" 
											id="lastName"

											type="text" 
											placeholder="Last Name"  
											required 
											value={lastName} 
											onChange={e => {setLastName(e.target.value)}}
											/>
										</Box>
									</Col>
								</Row>

								<Box className="mb-3">
									<TextField
									color='primary' 
									fullWidth 
									label="Address" 
									id="address"

									type="text"
									placeholder="Address"  
									required 
									value={address} 
									onChange={e => {setAddress(e.target.value)}}
									/>
								</Box>
								
								<Box className="mb-3">
									<TextField
									color='primary' 
									fullWidth 
									label="Email" 
									id="email"

									type="email"
									placeholder="Email"  
									required 
									value={email} 
									onChange={e => {setEmail(e.target.value)}}
									/>
								</Box>

								<Box className="mb-3">
									<TextField
									color='primary' 
									fullWidth 
									label="Password" 
									id="password"

									type="password"
									placeholder="Password"  
									required 
									value={password} 
									onChange={e => {setPassword(e.target.value)}}
									/>
								</Box>

								<Box className="mb-3">
									<TextField
									color='primary' 
									fullWidth 
									label="Verify Password" 
									id="verifyPassword"

									type="password" 
									placeholder="Verify Password" 
									required 
									value={confirmPassword} 
									onChange={e => {setConfirmPassword(e.target.value)}}
									/>
								</Box>

								<Row className='text-lg-end text-center'>
									<Col>
									{ 
										isActive
										?<Button variant="primary" type="submit" id="submitBtn">Submit</Button>
										:<Button variant="primary" type="submit" id="submitBtn" disabled>Submit</Button>
									}  
									</Col>
								</Row> 
							</Form>
                        </Card.Body>
						<Row>
							<Col className='text-center text-muted mb-5 mt-3'>
								<Divider>Already have an account? <Link to={"/login"}>Click here</Link> to log in.</Divider>
							</Col>
						</Row>
                    </div>
                </Col>
            </Row>
            
        </>

		
		
		
	)
	
}