
import { useState } from 'react';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

import {
	Button,
	Modal,
	Form,
	Row,
	Col,
	Tooltip,
	OverlayTrigger,
	Offcanvas
} from 'react-bootstrap';

// Icon
// import { TiEdit } from "react-icons/ti";
import { RiFileEditFill } from "react-icons/ri";


export default function EditProduct({ product, fetchData }) {

	const [productId, setProductId] = useState('');

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState();

	const [showEdit, setShowEdit] = useState(false);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const openEdit = (productId) => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/${productId}`)
			.then(res => res.json())
			.then(data => {
				setProductId(data._id);
				setName(data.name);
				setDescription(data.description);
				setImage(data.image);
				setPrice(data.price);
				setCategory(data.category);
			})
		setShowEdit(true)
	}



	const closeEdit = () => {
		setShowEdit(false);
		setName("");
		setDescription("");
		setImage(null);
		setPrice("");
		setCategory("default");
	}

	const editProduct = (e, productId) => {
		e.preventDefault()

		fetch(`https://gamegalaxy-backend.onrender.com/products/${productId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`
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
				console.log(data)
				if (data !== true) {
					Swal.fire({
						title: "Success",
						icon: "success",
						text: "Product Successfully Updated"
					})
					closeEdit();
					fetchData()
				}
				else {
					Swal.fire({
						title: "Error",
						icon: "error",
						text: "Please Try Again"
					})
					closeEdit()
				}
			})
	}
	function updateImageUpload(e) {
		e.preventDefault()
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





	return (
		<>
			{['top'].map((placement) => (
				<OverlayTrigger
					key={placement}
					placement={placement}
					overlay={<Tooltip>Update Product</Tooltip>}>
					<Link className=" text-primary" onClick={() => openEdit(product)}><RiFileEditFill size={30} /></Link>
					{/* <Button variant="primary" size="sm" onClick={()=>openEdit(product)}><AiTwotoneEdit size={30}/></Button> */}
				</OverlayTrigger>
			))}

			<Offcanvas show={showEdit} onHide={closeEdit} >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Update Product</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Form onSubmit={e => editProduct(e, productId)}>
						<Row>
							<Col>
								{/* <Form.Group controlId="formFile" className="mb-5 mt-2"> */}
								<Form.Group controlId="formFile" className="d-flex justify-content-center ">
									{/* <Form.Label>Image:</Form.Label> */}
									<label for='UpdateImage'><img src={image} style={{ width: '15rem', cursor: 'pointer' }} /></label>


									<Form.Control type="file" id='UpdateImage' accept='.jpeg, .png, .jpg' style={{ display: 'none', visibility: 'none' }} onChange={updateImageUpload} />

								</Form.Group>
							</Col>
						</Row>

						<Form.Group className='mt-2' controlId="productName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								value={name}
								onChange={e => setName(e.target.value)}
								required />
						</Form.Group>

						<Row>
							<Col>
								<Form.Group className='mt-2' controlId="productPrice">
									<Form.Label>Price</Form.Label>
									<Form.Control
										type="number"
										value={price}
										onChange={e => setPrice(e.target.value)}
										required />
								</Form.Group>
							</Col>
							<Col>
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
						</Row>

						<Form.Group className='mt-2 mb-4' controlId="productDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text"
								style={{ resize: 'none' }}
								as="textarea"
								rows={5}
								value={description}
								onChange={e => setDescription(e.target.value)}
								required />
						</Form.Group>

						<Row className='m-2'>
							<Button variant="primary" type="submit">Submit</Button>
						</Row>

					</Form>
				</Offcanvas.Body>
			</Offcanvas>
		</>

	)
}