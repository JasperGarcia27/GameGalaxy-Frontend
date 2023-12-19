// import coursesData from '../data/coursesData';


import {useEffect, useState, useContext} from 'react';

// UserContext
import UserContext from '../UserContext';

// Events
import UserView from '../events/viewproducts/UserView';
import AdminView from '../events/viewproducts/AdminView';

// Components
import AppNavBar from '../components/AppNavBar';

import NavBar from '../components/NavBar'

export default function Products(){

	const { user } = useContext(UserContext);
	const [products, setProducts] = useState([]);
	console.log(products)
	const fetchData = () => {
	    fetch(`https://gamegalaxy-backend.onrender.com/products/allProducts`)
	    .then(res => res.json())
	    .then(data => {
	        
	        console.log(data);
	        setProducts(data);

	    });
	}

	useEffect(() => {fetchData()}, []);

	console.log(user.isAdmin === true)



	return(
	    <>
		<AppNavBar/>
			{
	            (user.isAdmin === true) 
				?<AdminView productsData={products} fetchData={fetchData} />

				:
				<>
					<UserView productsData={products} />
					{/* <NavBar productsData={products} /> */}
				</>
	        }
	    </>
	)
}