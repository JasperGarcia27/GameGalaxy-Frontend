import {
	CardGroup,
	Card,
	Row,
	Col,
	Accordion,
	Form,
	ButtonGroup,
	Nav,
	Button,
	ListGroup,
	Collapse
} from "react-bootstrap";

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

// Cart
import Cart from '../../pages/Cart'


import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	TextField,
	Box,
	InputAdornment,
	Slider,
	BottomNavigation,
	BottomNavigationAction
} from '@mui/material';

import * as React from 'react';



import { BsFillLaptopFill } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { GiFallingBoulder } from "react-icons/gi";


// Icons
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";



import UserViewProductCard from "./UserViewProductCard"




// Price Range
function valuetext(value) {
	return `${value}°C`;
}
const minDistance = 50000;
export default function UserProducts() {


	const [category, setCategory] = useState()
	const [priceRange, setPriceRange] = useState()
	const [openCategory, setOpenCategory] = useState(true);
	const [openPriceRange, setOpenPriceRange] = useState(true);

	const [allProducts, setAllProducts] = useState([])
	const [allProducts0To50k, setAllProducts0To50k] = useState([])
	const [allProducts50kTo100k, setAllProducts50kTo100k] = useState([])
	const [allProducts100kTo150k, setAllProducts100kTo150k] = useState([])
	const [allProducts150kAndAbove, setAllProducts150kAndAbove] = useState([])

	const [allActiveDesktop, setAllActiveDesktop] = useState([])
	const [allActiveDesktop0To50k, setAllActiveDesktop0To50k] = useState([])
	const [allActiveDesktop50kTo100k, setAllActiveDesktop50kTo100k] = useState([])
	const [allActiveDesktop100kTo150k, setAllActiveDesktop100kTo150k] = useState([])
	const [allActiveDesktop150kAndAbove, setAllActiveDesktop150kAndAbove] = useState([])

	const [allActiveLaptop, setAllActiveLaptop] = useState([])
	const [allActiveLaptop0To50k, setAllActiveLaptop0To50k] = useState([])
	const [allActiveLaptop50kTo100k, setAllActiveLaptop50kTo100k] = useState([])
	const [allActiveLaptop100kTo150k, setAllActiveLaptop100kTo150k] = useState([])
	const [allActiveLaptop150kAndAbove, setAllActiveLaptop150kAndAbove] = useState([])

	const [allActiveConsole, setAllActiveConsole] = useState([])
	const [allActiveConsole0To50k, setAllActiveConsole0To50k] = useState([])
	const [allActiveConsole50kTo100k, setAllActiveConsole50kTo100k] = useState([])
	const [allActiveConsole100kTo150k, setAllActiveConsole100kTo150k] = useState([])
	const [allActiveConsole150kAndAbove, setAllActiveConsole150kAndAbove] = useState([])

	const [allActiveAccessories, setAllActiveAccessories] = useState([])
	const [allActiveAccessories0To50k, setAllActiveAccessories0To50k] = useState([])
	const [allActiveAccessories50kTo100k, setAllActiveAccessories50kTo100k] = useState([])
	const [allActiveAccessories100kTo150k, setAllActiveAccessories100kTo150k] = useState([])
	const [allActiveAccessories150kAndAbove, setAllActiveAccessories150kAndAbove] = useState([])


	let filterItem = '';
	/*__________________________ ALL __________________________ */ 
	if ((category === undefined || category === 'All') && (priceRange === undefined || priceRange === 'All')) {
		filterItem = allProducts;
	}
	else if ((category === undefined || category === 'All') && priceRange === '0To50k') {
		filterItem = allProducts0To50k;
	}
	else if ((category === undefined || category === 'All') && priceRange === '50kTo100k') {
		filterItem = allProducts50kTo100k;
	}
	else if ((category === undefined || category === 'All') && priceRange === '100kTo150k') {
		filterItem = allProducts100kTo150k;
	}
	else if ((category === undefined || category === 'All') && priceRange === '150kAndAbove') {
		filterItem = allProducts150kAndAbove;
	}
	/*__________________________ DESKTOP __________________________ */ 
	else if (category === 'Desktop' && (priceRange === undefined || priceRange === 'All')) {
		filterItem = allActiveDesktop;
	}
	else if ((category === undefined || category === 'Desktop') && priceRange === '0To50k') {
		filterItem = allActiveDesktop0To50k;
	}
	else if ((category === undefined || category === 'Desktop') && priceRange === '50kTo100k') {
		filterItem = allActiveDesktop50kTo100k;
	}
	else if ((category === undefined || category === 'Desktop') && priceRange === '100kTo150k') {
		filterItem = allActiveDesktop100kTo150k;
	}
	else if ((category === undefined || category === 'Desktop') && priceRange === '150kAndAbove') {
		filterItem = allActiveDesktop150kAndAbove;
	}
	/*__________________________ LAPTOP __________________________ */ 
	else if (category === 'Laptop' && (priceRange === undefined || priceRange === 'All')) {
		filterItem = allActiveLaptop;
	}
	else if ((category === undefined || category === 'Laptop') && priceRange === '0To50k') {
		filterItem = allActiveLaptop0To50k;
	}
	else if ((category === undefined || category === 'Laptop') && priceRange === '50kTo100k') {
		filterItem = allActiveLaptop50kTo100k;
	}
	else if ((category === undefined || category === 'Laptop') && priceRange === '100kTo150k') {
		filterItem = allActiveLaptop100kTo150k;
	}
	else if ((category === undefined || category === 'Laptop') && priceRange === '150kAndAbove') {
		filterItem = allActiveLaptop150kAndAbove;
	}
	/*__________________________ CONSOLE __________________________ */ 
	else if (category === 'Console' && (priceRange === undefined || priceRange === 'All')) {
		filterItem = allActiveConsole;
	}
	else if ((category === undefined || category === 'Console') && priceRange === '0To50k') {
		filterItem = allActiveConsole0To50k;
	}
	else if ((category === undefined || category === 'Console') && priceRange === '50kTo100k') {
		filterItem = allActiveConsole50kTo100k;
	}
	else if ((category === undefined || category === 'Console') && priceRange === '100kTo150k') {
		filterItem = allActiveConsole100kTo150k;
	}
	else if ((category === undefined || category === 'Console') && priceRange === '150kAndAbove') {
		filterItem = allActiveConsole150kAndAbove;
	}
	/*__________________________ ACCESSORIES __________________________ */ 
	else if ((category === undefined || category === 'Accessories') && priceRange === '0To50k') {
		filterItem = allActiveAccessories0To50k;
	}
	else if ((category === undefined || category === 'Accessories') && priceRange === '50kTo100k') {
		filterItem = allActiveAccessories50kTo100k;
	}
	else if ((category === undefined || category === 'Accessories') && priceRange === '100kTo150k') {
		filterItem = allActiveAccessories100kTo150k;
	}
	else if ((category === undefined || category === 'Accessories') && priceRange === '150kAndAbove') {
		filterItem = allActiveAccessories150kAndAbove;
	}
	else {
		filterItem = allActiveAccessories;
	}


	/*=================================== ALL ===================================*/ 
	// - All 
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allActiveProducts`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const allProducts = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					allProducts.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllProducts(allProducts)
			})
	}, [])
	// - All 0 to 50k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allActiveProducts0To50k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const allProducts0To50k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					allProducts0To50k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllProducts0To50k(allProducts0To50k)
			})
	}, [])
	// - All 50k to 100k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allActiveProducts50kTo100k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const allProducts50kTo100k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					allProducts50kTo100k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllProducts50kTo100k(allProducts50kTo100k)
			})
	}, [])
	// - All 100k to 150k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allActiveProducts100kTo150k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const allProducts100kTo150k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					allProducts100kTo150k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllProducts100kTo150k(allProducts100kTo150k)
			})
	}, [])
	// - All 150k and Above
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allActiveProducts150kAndAbove`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const allProducts150kAndAbove = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					allProducts150kAndAbove.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllProducts150kAndAbove(allProducts150kAndAbove)
			})
	}, [])
	/*=================================== ALL ===================================*/ 

	/*=================================== DESKTOP ===================================*/ 
	// Desktop
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allDesktop`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const desktop = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					desktop.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>
					)
				}
				setAllActiveDesktop(desktop)
			})
	}, [])
	// - All Desktop 0 to 50k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allDesktop0To50k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const desktop0To50k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					desktop0To50k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveDesktop0To50k(desktop0To50k)
			})
	}, [])
	// - All Desktop 50k to 100k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allDesktop50kTo100k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const dekstop50kTo100k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					dekstop50kTo100k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveDesktop50kTo100k(dekstop50kTo100k)
			})
	}, [])
	// - All Desktop 100k to 150k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allDesktop100kTo150k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const desktop100kTo150k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					desktop100kTo150k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveDesktop100kTo150k(desktop100kTo150k)
			})
	}, [])
	// - All Desktop 150k and Above
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allDesktop150kAndAbove`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const dekstop150kAndAbove = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					dekstop150kAndAbove.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveDesktop150kAndAbove(dekstop150kAndAbove)
			})
	}, [])
	/*=================================== DESKTOP ===================================*/ 

	/*=================================== LAPTOP ===================================*/ 
	// Laptop
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allLaptop`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const laptop = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					laptop.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>
					)
				}
				setAllActiveLaptop(laptop)
			})
	}, [])
	// - All Laptop 0 to 50k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allLaptop0To50k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const laptop0To50k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					laptop0To50k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveLaptop0To50k(laptop0To50k)
			})
	}, [])
	// - All Laptop 50k to 100k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allLaptop50kTo100k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const laptop50kTo100k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					laptop50kTo100k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveLaptop50kTo100k(laptop50kTo100k)
			})
	}, [])

	// - All Laptop 100k to 150k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allLaptop100kTo150k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const laptop100kTo150k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					laptop100kTo150k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveLaptop100kTo150k(laptop100kTo150k)
			})
	}, [])

	// - All Laptop 150k and Above
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allLaptop150kAndAbove`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const laptop150kAndAbove = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					laptop150kAndAbove.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveLaptop150kAndAbove(laptop150kAndAbove)
			})
	}, [])
	/*=================================== LAPTOP ===================================*/ 

	/*=================================== CONSOLE ===================================*/ 
	// Console
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allConsole`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const consoleProducts = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					consoleProducts.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>
					)
				}
				setAllActiveConsole(consoleProducts)
			})
	}, [])
	// - All Console 0 to 50k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allConsole0To50k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const console0To50k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					console0To50k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveConsole0To50k(console0To50k)
			})
	}, [])
	// - All Console 50k to 100k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allConsole50kTo100k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const console50kTo100k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					console50kTo100k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveConsole50kTo100k(console50kTo100k)
			})
	}, [])

	// - All Console 100k to 150k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allConsole100kTo150k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const console100kTo150k= []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					console100kTo150k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveConsole100kTo150k(console100kTo150k)
			})
	}, [])

	// - All Console 150k and Above
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allConsole150kAndAbove`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const console150kAndAbove = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					console150kAndAbove.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveConsole150kAndAbove(console150kAndAbove)
			})
	}, [])
	/*=================================== CONSOLE ===================================*/ 

	/*=================================== ACCESSORIES ===================================*/ 
	// Accessories
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allAccessories`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const accessories = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					accessories.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>
					)
				}
				setAllActiveAccessories(accessories)
			})
	}, [])
	// - All Accessories 0 to 50k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allAccessories0To50k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const accessories0To50k = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					accessories0To50k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveAccessories0To50k(accessories0To50k)
			})
	}, [])
	// - All Accessories 50k to 100k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allAccessories50kTo100k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const accessories50kTo100k = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					accessories50kTo100k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveAccessories50kTo100k(accessories50kTo100k)
			})
	}, [])

	// - All Accessories 100k to 150k
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allAccessories100kTo150k`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const accessories100kTo150k = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					accessories100kTo150k.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveAccessories100kTo150k(accessories100kTo150k)
			})
	}, [])

	// - All Accessories 150k and Above
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allAccessories150kAndAbove`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				for (let i = 0; i < data.length; i++) {
					console.log("Name: " + data[i].name);
				}

				const numbers = []
				const accessories150kAndAbove = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.length; i++) {
					generatedRandomNums()
					accessories150kAndAbove.push(
						<UserViewProductCard
							data={data[numbers[i]]}
							key={data[numbers[i]]._id}
							breakPoint={2}
						/>

					)
				}

				setAllActiveAccessories150kAndAbove(accessories150kAndAbove)
			})
	}, [])
	/*=================================== ACCESSORIES ===================================*/ 

	console.log(category)
	console.log(priceRange)





	
	return (
		<>
			<Row className="filter justify-content-center">
				<Col className="col-12 col-lg-2">
					<div className="shadow-lg bg-white rounded">
						<ListGroup variant="flush">
							<Link
								onClick={() => setOpenCategory(!openCategory)}
								aria-controls="example-collapse-text"
								aria-expanded={openCategory}
								style={{ textDecoration: 'none' }}
							>
								<ListGroup.Item className="shadow-lg bg-primary rounded text-white text-center"> <strong>Category</strong></ListGroup.Item>
							</Link>
							<Collapse className="mt-3" in={openCategory}>
								<FormControl>
									<RadioGroup
										aria-labelledby="demo-radio-buttons-group-label"
										defaultValue="All"
										name="radio-buttons-group"
									>
										<ul>
											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="All"
													control={<Radio />}
													label="All"
													onChange={e => setCategory(e.target.value)}
												/>
											</li>

											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="Desktop"
													control={<Radio />}
													label="Desktop"
													onChange={e => setCategory(e.target.value)}
												/>
											</li>

											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="Laptop"
													control={<Radio />}
													label="Laptop"
													onChange={e => setCategory(e.target.value)}
												/>
											</li>

											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="Console"
													control={<Radio />}
													label="Console"
													onChange={e => setCategory(e.target.value)}
												/>
											</li>

											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="Accessories"
													control={<Radio />}
													label="Accessories"
													onChange={e => setCategory(e.target.value)}
												/>
											</li>
										</ul>
									</RadioGroup>
								</FormControl>
							</Collapse>
							<Link
								onClick={() => setOpenPriceRange(!openPriceRange)}
								aria-controls="example-collapse-text"
								aria-expanded={openPriceRange}
								style={{ textDecoration: 'none' }}
							>
								<ListGroup.Item className="shadow-lg bg-primary rounded text-white text-center"> <strong>Price Range</strong></ListGroup.Item>
							</Link>
							<Collapse className="mt-3" in={openPriceRange}>
								<FormControl>
									<RadioGroup
										aria-labelledby="demo-radio-buttons-group-label"
										defaultValue="All"
										name="radio-buttons-group"
									>
										<ul>
											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="All"
													control={<Radio />}
													label="All"
													onChange={e => setPriceRange(e.target.value)}
												/>
											</li>

											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="0To50k"
													control={<Radio />}
													label="₱0 - ₱50K"
													onChange={e => setPriceRange(e.target.value)}
												/>
											</li>

											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="50kTo100k"
													control={<Radio />}
													label="₱50K - ₱100K"
													onChange={e => setPriceRange(e.target.value)}
												/>
											</li>

											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="100kTo150k"
													control={<Radio />}
													label="₱100K - ₱150K"
													onChange={e => setPriceRange(e.target.value)}
												/>
											</li>

											<li style={{ listStyle: 'none' }}>
												<FormControlLabel
													value="150kAndAbove"
													control={<Radio />}
													label="₱150K and Above"
													onChange={e => setPriceRange(e.target.value)}
												/>
											</li>
										</ul>
									</RadioGroup>
								</FormControl>
							</Collapse>
						</ListGroup>
					</div>
				</Col>
				<Col className="col-lg-9">
					<CardGroup>
						{filterItem}
					</CardGroup>
				</Col>
			</Row>
		</>
	)
}