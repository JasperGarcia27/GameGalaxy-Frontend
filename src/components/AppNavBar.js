// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import {Link, NavLink} from 'react-router-dom';
import UserContext from '../UserContext';
import {useContext} from 'react';


import { 
	Button,
	Container,
	Form,
	Nav, 
	Navbar,
	NavDropdown,
	Card,
	Row,
	Col
  } from 'react-bootstrap';


// Icon
import { GiGamepadCross } from "react-icons/gi";
import { 
	AiFillShop, 
	AiOutlineHome, 
	AiOutlineShoppingCart 
  } from "react-icons/ai";
  
import { FaRegCircleUser } from "react-icons/fa6";
import { BiLogInCircle } from "react-icons/bi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

// Components
import SearchProductCard from "../components/SearchProductCard"
import Cart from "../pages/Cart"

import NavBar from './NavBar'

import Badge from '@mui/material/Badge';







export default function AppNavbar(){

    const {user} = useContext(UserContext);
	const loggedIn= window.localStorage.getItem("isLoggedIn")
	console.log(loggedIn, "loggedIn")
	console.log("localStorage length: "+localStorage.length)

	if(!loggedIn){
		console.log("Status: "+true)
	}
	else{
		console.log("Status:"+false)
	}
		
	console.log(window.localStorage.length)



	return(
		<>
		
			<Navbar expand="lg" fixed='top' id='NavBar'>
				<Container>
					<Navbar.Brand as={Link} to="/" className='BrandNavTitle mx-md-5 mx-lg-4 text-center'>Game <GiGamepadCross size={30} className='pb-1 m-0' /> Galaxy</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className='ms-auto'>
							{/* <Form.Control
								className='mt-2 mt-lg-0'
								placeholder="Search Product"
								aria-label="Search Product"
								aria-describedby="basic-addon2"
								id="productName"
							/> */}
							
								{/* <NavBar/> */}
								
							

						</Nav>
						<Nav className='ms-auto'>
							{/* Search */}
							<Nav.Link className='' as={NavLink}><SearchProductCard /></Nav.Link>
							{/* <Nav.Link className='mx-auto' as={NavLink} to="/"><HiMiniMagnifyingGlass size={25} /></Nav.Link> */}

							{/* Home */}							
							<Nav.Link className='' as={NavLink} to="/"><AiOutlineHome size={25} /></Nav.Link>

							{/* Shop */}
							<Nav.Link className='' as={NavLink} to="/products"><AiFillShop size={25} /></Nav.Link>
							
							{/* Cart */}
							{/* <Nav.Link className='mx-auto' href="#action1">
								
								<Cart />
							</Nav.Link> */}

							
							{(user.id !== null) 
								?
								<>
									{/* <Cart /> */}
									{/* Profile */}
									<NavDropdown className='mx-auto' direction="center" title={<FaRegCircleUser size={25} />} id="navbarScrollingDropdown">
										<NavDropdown.Item as={NavLink} to="/profile">View Profile</NavDropdown.Item>
										<NavDropdown.Item as={NavLink} to="/logout">Logout</NavDropdown.Item>
									</NavDropdown>
								</>
								:
								<>
									{/* Login */}
									<Nav.Link className='mx-auto' as={NavLink} to="/login" exact><BiLogInCircle size={25} /></Nav.Link>
								</>
							}
						</Nav>

					</Navbar.Collapse>
				</Container>
			</Navbar> 

			
			{/* <NavBar/> */}
		</>
	)
}