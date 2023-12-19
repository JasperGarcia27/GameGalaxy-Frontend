import { OverlayTrigger, Tooltip  } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

// Icons
import { HiArchive } from "react-icons/hi";
import { HiSave } from "react-icons/hi";

export default function ArchiveProduct({product, fetchData, isActive}) {
	console.log(product)

	const archive = (productId) => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/${productId}/archive`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
 
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data !== true) {
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Product successfully disabled'
				})
				fetchData();
 
			}else {
				Swal.fire({
					title: 'Something Went Wrong',
					icon: 'error',
					text: 'Please Try again'
				})
				fetchData();
			}
 
 
		})
	}
 
 
		const activate = (productId) => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/${productId}/activate`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
 
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data !== true) {
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Product successfully enabled'
				})
				fetchData();
			}else {
				Swal.fire({
					title: 'Something Went Wrong',
					icon: 'error',
					text: 'Please Try again'
				})
				fetchData();
			}
 
 
		})
	}

return (
        <>
            {
            	!isActive

            	?
				// ------- Activate Button -------
				['top'].map((placement) => (
					<OverlayTrigger
					key={placement}
					placement={placement}
					overlay={<Tooltip>Activate Product</Tooltip>}>
						<Link className=" text-success" onClick={() => activate(product)}><HiSave size={30}/></Link>
						{/* <Button variant="success" size="sm" onClick={() => activate(product)}><HiSave size={25}/></Button> */}
					</OverlayTrigger>
				))

            	:
				// ------- Archive Button -------
				['top'].map((placement) => (
					<OverlayTrigger
					key={placement}
					placement={placement}
					overlay={<Tooltip>Archive Product</Tooltip>}>
						<Link className=" text-danger" onClick={() => archive(product)} ><HiArchive size={30}/></Link>
					</OverlayTrigger>
				))
            }
        </>
    );
}