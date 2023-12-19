import { useState, useEffect, useContext } from 'react';
import { Container, Card, InputGroup, Button, Row, Col, Form, Stack } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Divider, Chip } from '@mui/material';

// Icons
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

// Components
import Footer from '../components/Footer'
import AppNavbar from './AppNavBar';




export default function ProductView() {
	const { productId } = useParams();
	const { user } = useContext(UserContext);

	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const [isActive, setIsActive] = useState(true);


	// Checkout
	const getOrder = (productId) => {

		fetch(`https://gamegalaxy-backend.onrender.com/users/getOrder`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity
			})
		})
			.then(res => res.json())
			.then(data => {
				console.log(quantity)

				console.log(data.message);

				if (quantity <= 0) {
					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "The quantity should not to be a zero or less than"
					});
				}
				else {
					if (data.message !== 'Order Successfully.') {
						Swal.fire({
							title: "Successfully Checkout",
							icon: 'success',
							text: `You have successfully checkout the ${name}`
						});
						navigate("/products");
					} else {
						Swal.fire({
							title: "Something went wrong",
							icon: "error",
							text: "Please try again."
						});
					}
				}
			});
	};

	// Add To Cart
	const getCart = (productId) => {

		fetch(`https://gamegalaxy-backend.onrender.com/users/getCart`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity
			})
		})
			.then(res => res.json())
			.then(data => {
				console.log(quantity)

				console.log(data.message);

				if (quantity <= 0) {
					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "The quantity should not to be a zero or less than"
					});
				}
				else {
					if (data.message !== 'Order Successfully.') {
						Swal.fire({
							title: "Added to Cart",
							icon: 'success',
							text: "You have successfully add to cart for this product."
						});
						navigate("/products");
					} else {
						Swal.fire({
							title: "Something went wrong",
							icon: "error",
							text: "Please try again."
						});
					}
				}
			});
	};

	useEffect(() => {

		console.log(productId);

		fetch(`https://gamegalaxy-backend.onrender.com/products/${productId}`)
			.then(res => res.json())
			.then(data => {

				console.log(data);

				setName(data.name);
				setDescription(data.description);
				setImage(data.image);
				setPrice(data.price);
			});

		if (quantity === 0) {
			setIsActive(false);
		} else {
			setIsActive(true);
		}

	}, [productId, quantity]);
	console.log(name)

	const increment = () => {
		setQuantity(quantity + 1);
	};

	const decrement = () => {
		if (quantity >= 1) {
			setQuantity(quantity - 1);
		}
	};
	console.log(quantity)

	return (
		<div className='ProductDetails'>
			<AppNavbar />
			<Row id='ProductDetailsPage'>
				<Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
					<Row className='pb-3'>
						<Stack direction="horizontal" gap={5}>
							<Col>
								<img
									className='shadow-lg bg-white rounded'
									src={image}
									alt={name}
									style={{ maxWidth: '100%' }}
								/>
							</Col>
							<Col className='d-flex align-items-center'>
								<Row>
									<Col className="text-lg-start" >
										<Card.Title className='ProductName'>{name.toUpperCase()}</Card.Title>
										<Row className='d-flex my-2'>
											<Card.Subtitle className='myProduct'>Price: <strong className='text-danger'>₱{price.toLocaleString("en-US")}</strong></Card.Subtitle>
											{/* <Card.Text className='text-danger'><strong>₱{price.toLocaleString("en-US")}</strong></Card.Text> */}
										</Row>


										<Row className='mb-2'>
											<Col>
												<Form onSubmit={e => getOrder(e, productId)}>
													<Form.Group controlId="productQuantity">

														<Card.Subtitle className='myProduct'>Quantity:</Card.Subtitle>
														<div className='myProduct'>
															<Link className="text-dark" onClick={decrement}><FaSquareMinus className='decrAndincr' size={35} /></Link>
															<span className="mx-2">{quantity}</span>
															<Link className="text-dark" onClick={increment}><FaSquarePlus className='decrAndincr' size={35} /></Link>
														</div>

													</Form.Group>
												</Form>
											</Col>
										</Row>

										<Row>
											<Col className='text-start'>
												{user.id !== null
													?
													<>
														{
															isActive
																? <Button
																	variant="primary"
																	block
																	onClick={() => getOrder(productId)}>Checkout</Button>

																: <Button
																	variant="primary"
																	type="submit"
																	id="submitBtn"
																	disabled>Checkout</Button>
														}
														{/* {
															isActive
																? <Button
																	className='mx-1'
																	variant="danger"
																	block
																	onClick={() => getCart(productId)}
																>Add to Cart</Button>

																: <Button
																	className='mx-1'
																	variant="danger"
																	type="submit"
																	id="submitBtn"
																	disabled>Add to Cart</Button>
														} */}
													</>

													: <Link className="btn btn-success btn-block" to="/login">Log in to Checkout</Link>
												}
											</Col>
										</Row>

									</Col>
								</Row>

							</Col>
						</Stack>



					</Row>
					<Divider><Chip label="Description" className='mb-0 mt-1' /></Divider>
					<Row className='ProductDescription mt-4 p-5'>
						<Card.Text>{description}</Card.Text>
					</Row>


				</Col>
				{/* <Divider><Chip label="More Products" className='mt-3 mb-0'/></Divider> */}
				{/* <UserFeaturedProducts /> */}
				{/* <Footer /> */}
			</Row>
			<Footer />
		</div>
	)
}

/*
import { useState, useEffect, useContext } from 'react';
import { Container, Card, InputGroup, Button, Row, Col, Form } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import { Divider, Chip } from '@mui/material';

// Icons
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

// Components
import Footer from '../components/Footer'
import AppNavbar from './AppNavBar';




export default function ProductView() {
	const { productId } = useParams();
	const { user } = useContext(UserContext);

	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const [isActive, setIsActive] = useState(true);


	// Checkout
	const getOrder = (productId) => {

		fetch(`https://gamegalaxy-backend.onrender.com/users/getOrder`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity
			})
		})
			.then(res => res.json())
			.then(data => {
				console.log(quantity)

				console.log(data.message);

				if (quantity <= 0) {
					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "The quantity should not to be a zero or less than"
					});
				}
				else {
					if (data.message !== 'Order Successfully.') {
						Swal.fire({
							title: "Successfully Checkout",
							icon: 'success',
							text: `You have successfully checkout the ${name}`
						});
						navigate("/products");
					} else {
						Swal.fire({
							title: "Something went wrong",
							icon: "error",
							text: "Please try again."
						});
					}
				}
			});
	};

	// Add To Cart
	const getCart = (productId) => {

		fetch(`https://gamegalaxy-backend.onrender.com/users/getCart`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId: productId,
				quantity: quantity
			})
		})
			.then(res => res.json())
			.then(data => {
				console.log(quantity)

				console.log(data.message);

				if (quantity <= 0) {
					Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "The quantity should not to be a zero or less than"
					});
				}
				else {
					if (data.message !== 'Order Successfully.') {
						Swal.fire({
							title: "Added to Cart",
							icon: 'success',
							text: "You have successfully add to cart for this product."
						});
						navigate("/products");
					} else {
						Swal.fire({
							title: "Something went wrong",
							icon: "error",
							text: "Please try again."
						});
					}
				}
			});
	};

	useEffect(() => {

		console.log(productId);

		fetch(`https://gamegalaxy-backend.onrender.com/products/${productId}`)
			.then(res => res.json())
			.then(data => {

				console.log(data);

				setName(data.name);
				setDescription(data.description);
				setImage(data.image);
				setPrice(data.price);
			});

		if (quantity === 0) {
			setIsActive(false);
		} else {
			setIsActive(true);
		}

	}, [productId, quantity]);
	console.log(name)

	const increment = () => {
		setQuantity(quantity + 1);
	};

	const decrement = () => {
		if (quantity >= 1) {
			setQuantity(quantity - 1);
		}
	};
	console.log(quantity)

	return (
		<div className='ProductDetails'>
			<AppNavbar />
			<Row>
				<Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
					<Row className='pb-3 bg-danger'>

						<Col lg={5} className=''>
							<img
								className='shadow-lg bg-white rounded'
								src={image}
								alt={name}
								style={{ maxWidth: '100%' }}
							/>
						</Col>

						<Col lg={{span:5, offset:2}} className='d-flex align-items-center shadow-lg bg-white rounded'>
							<Row>
								<Col className="text-lg-start" >
									<Card.Title>{name.toUpperCase()}</Card.Title>
									<Row className='d-flex'>
										<Card.Subtitle>Price: <strong className='text-danger'>₱{price.toLocaleString("en-US")}</strong></Card.Subtitle>
										
										</Row>



										<Form className='mb-3' onSubmit={e => getOrder(e, productId)}>
											<Form.Group controlId="productQuantity">
												<Row className='d-flex justify-content-start'>
													<Col lg={7}>
														<Row>
															<Form.Label>Quantity:</Form.Label>
															<div>
																<Link className="text-dark" onClick={decrement}><FaSquareMinus className='decrAndincr' size={35} /></Link>
																<span className="mx-2">{quantity}</span>
																<Link className="text-dark" onClick={increment}><FaSquarePlus className='decrAndincr' size={35} /></Link>
															</div>
														</Row>
	
													</Col>
												</Row>
											</Form.Group>
										</Form>
										<Row>
											<Col className='text-start'>
												{user.id !== null
													?
													<>
														{
															isActive
																? <Button
																	variant="primary"
																	block
																	onClick={() => getOrder(productId)}>Checkout</Button>
	
																: <Button
																	variant="primary"
																	type="submit"
																	id="submitBtn"
																	disabled>Checkout</Button>
														}
														{
															isActive
																? <Button
																	className='mx-1'
																	variant="danger"
																	block
																	onClick={() => getCart(productId)}
																>Add to Cart</Button>
	
																: <Button
																	className='mx-1'
																	variant="danger"
																	type="submit"
																	id="submitBtn"
																	disabled>Add to Cart</Button>
														}
													</>
	
													: <Link id='LogintoCheckout' className="btn btn-block" to="/login">Log in to Checkout</Link>
												}
											</Col>
										</Row>
	
									</Col>
								</Row>
	
							</Col>
						</Row>
						<Divider><Chip label="Description" className='mb-0' /></Divider>
						<Row className='ProductDescription mt-4 p-5'>
							<Card.Text>{description}</Card.Text>
						</Row>
	
	
					</Col>
				</Row>
				<Footer />
			</div>
		)
	}
*/