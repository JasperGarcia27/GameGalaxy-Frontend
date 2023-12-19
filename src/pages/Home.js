// Components
import Banner from '../components/Banner';
import Highlights from '../components/Higlights';
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts';
import Footer from  '../components/Footer'
import AppNavBar from  '../components/AppNavBar'

import { Row } from 'react-bootstrap';


export default function Home(){
	
	const data = {
        title: "Game Galaxy",
        content: "Gaming is not just a hobby, it's a way of life!",
        destination: "/products",
        label: "Buy now!"
    }

	return(
		<div id='HomePage'>
			<AppNavBar/>
			<Banner data={data} />
			{/* <Highlights />	 */}
			<FeaturedProducts />

			<Footer />
		</div>
	)
}
