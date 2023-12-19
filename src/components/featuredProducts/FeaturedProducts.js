import { CardGroup, Card, Row, Col , Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PreviewProducts from "./PreviewProducts"

// Icons
import { RiGamepadFill, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaGifts } from "react-icons/fa";

// export default Highlight;
import React, { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectFade, EffectCube, Pagination, Parallax, Navigation  } from 'swiper/modules';

export default function FeaturedProducts() {

	// LAPTOP
	const [previewLaptop, setPreviewLaptop] = useState([])
	const [previmgLaptop, setPrevImgLaptop] = useState([])

	// CONSOLE
	const [previewConsole, setPreviewConsole] = useState([])
	const [previmgConsole, setPrevImgConsole] = useState([])

	// Laptop
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allLaptop`)
			.then(res => res.json())
			.then(data => {
				// console.log(data)

				const numbers = []
				const featuredLaptop = []
				const featuredImage = []

				const generatedRandomNumsLaptop = () => {
					let randomNumLaptop = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNumLaptop) === -1) {
						numbers.push(randomNumLaptop)
					}
					else {
						generatedRandomNumsLaptop()
					}
				}

				for (let i = 0; i < data.slice(0, 3).length; i++) {
					generatedRandomNumsLaptop()
					featuredLaptop.push(
						<PreviewProducts data={data[numbers[i]]} key={data[numbers[i]]._id} breakPoint={4} />
					)
				}
				for (let i = 0; i < data.length; i++) {
					console.log(data[i].image)
					// generatedRandomNumsLaptop()
					featuredImage.push(
						<SwiperSlide>
							<img src={data[i].image} />
						</SwiperSlide>
					)
				}
				setPrevImgLaptop(featuredImage)
				setPreviewLaptop(featuredLaptop)
			})
	}, [])

	// Console
	useEffect(() => {
		fetch(`https://gamegalaxy-backend.onrender.com/products/allConsole`)
			.then(res => res.json())
			.then(data => {
				// console.log(data)

				const numbers = []
				const featuredConsole = []
				const featuredImageConsole = []

				const generatedRandomNums = () => {
					let randomNum = Math.floor(Math.random() * data.length)
					if (numbers.indexOf(randomNum) === -1) {
						numbers.push(randomNum)
					}
					else {
						generatedRandomNums()
					}
				}

				for (let i = 0; i < data.slice(0, 3).length; i++) {
					generatedRandomNums()
					featuredConsole.push(
						<PreviewProducts data={data[numbers[i]]} key={data[numbers[i]]._id} breakPoint={4} />
					)
				}
				for (let i = 0; i < data.length; i++) {
					console.log(data[i].image)

					featuredImageConsole.push(
						<SwiperSlide>
							<img src={data[i].image} />
						</SwiperSlide>
					)
				}

				setPreviewConsole(featuredConsole)
				setPrevImgConsole(featuredImageConsole)
			})
	}, [])

	

	return (
		<>
			<Row>
				<Swiper
					style={{
						'--swiper-navigation-color': '#fff',
						'--swiper-pagination-color': '#fff',
					}}
					speed={600}
					parallax={true}
					// pagination={{
					// 	clickable: false,
					// }}
					navigation={true}
					modules={[Parallax, Pagination, Navigation]}
					className="mySwiper myFeatured text-white"
				>
					<div
						slot="container-start"
						className="parallax-bg"
						// style={{
						// 	'background-image':
						// 		'url(https://1.bp.blogspot.com/-mUocUF9uF7M/X4k06K5SG1I/AAAAAAAA-Ts/wC1iAFKVmZAbBnXGZB5a0YW6A8fEj6qPACLcBGAsYHQ/s3840/assassins-creed-valhalla-game-new-ei-3840x2160.jpg)',
							
						// }}
						data-swiper-parallax="-23%"
					></div>
					<SwiperSlide>
						<Row className="h-100 d-flex align-items-center">
							<Col className="col-8 offset-2">
								<div className="title d-flex justify-content-center" data-swiper-parallax="-300">
									Entertainment
								</div>
								<div className="subtitle" data-swiper-parallax="-200">
									<strong>Diverse Genres & Immersive Experiences</strong>
								</div>
								<div className="text" data-swiper-parallax="-100">
									<ul>
										<li>
											<p>
												The gaming world offers a vast array of genres, including action, adventure, role-playing, simulation, strategy, and more, catering to a wide range of preferences.
											</p>
										</li>
										<li>
											<p>
												Video games provide immersive and interactive experiences, allowing players to explore fictional worlds, solve puzzles, overcome challenges, and experience compelling narratives.
											</p>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</SwiperSlide>
					<SwiperSlide>
					<Row className="h-100 d-flex align-items-center">
							<Col className="col-8 offset-2">
								<div className="title d-flex justify-content-center" data-swiper-parallax="-300">
									Social Interaction
								</div>
								<div className="subtitle" data-swiper-parallax="-200">
								<strong>Online Multiplayer & Gaming Communities</strong>
								</div>
								<div className="text" data-swiper-parallax="-100">
									<ul>
										<li>
											<p>
												Many games feature online multiplayer modes, enabling players to connect with others globally, cooperate in team-based activities, and engage in competitive gameplay.
											</p>
										</li>
										<li>
											<p>
												The gaming world fosters communities where individuals with shared interests come together to discuss games, share experiences, and build friendships.
											</p>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</SwiperSlide>
					<SwiperSlide>
						<Row className="h-100 d-flex align-items-center text-primary">
							<Col className="col-8 offset-2">
								<div className="title highligthsTitle d-flex justify-content-center" data-swiper-parallax="-300">
									Streaming and Content Creation
								</div>
								<div className="subtitle" data-swiper-parallax="-200">
								<strong>Live Streaming & Esports</strong>
								</div>

								<div className="text" data-swiper-parallax="-100">
									<ul>
										<li>
											<p>
												Platforms like Twitch and YouTube Gaming allow gamers to live-stream their gameplay, fostering a culture of content creation and sharing.
											</p>
										</li>
										<li>
											<p>
												Competitive gaming, or esports, has evolved into a major industry with professional players, teams, and large-scale tournaments.
											</p>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</SwiperSlide>
				</Swiper>
				
			</Row>
			<Row className="d-flex justify-content-center my-5">

				<Col className="col-12 col-lg-3">
					<Row>
						<Col className="col-2">
							<RiGamepadFill size={45} className="IconSales"/>
						</Col>
						<Col>
							<div class="media">
								<div class="media-body">
									<h5 className="FeaturedHeader" class="mt-0">The Most Reliable Game Galaxy</h5>
									<p className="FeaturedContent">100% Original & Brand-New. Shop with Self-Belief!</p>
								</div>
							</div>
						</Col>
					</Row>
				</Col>

				<Col className="col-12 col-lg-3">
					<Row>
						<Col className="col-2">
							<TbTruckDelivery size={45} className="IconSales"/>
						</Col>
						<Col>
							<div class="media">
								<div class="media-body">
									<h5 className="FeaturedHeader" class="mt-0">Fast Shipping Nationwide</h5>
									<p className="FeaturedContent">Delivered within a day! Within Metro Manila, Express and Same-Day Delivery Available!</p>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
				
				<Col className="col-12 col-lg-3">
					<Row>
						<Col className="col-2">
							<FaGifts size={45} className="IconSales"/>
						</Col>
						<Col>
							<div class="media">
								<div class="media-body">
									<h5 className="FeaturedHeader" class="mt-0">Spend less on loyalty rewards</h5>
									<p className="FeaturedContent">To begin earning Loyalty Rewards Points, log in!</p>
								</div>
							</div>
						</Col>
					</Row>
				</Col>

				<Col>
					<Row>
						<Col className="col-2">
							<RiSecurePaymentLine size={45} className="IconSales"/>
						</Col>
						<Col>
							<div class="media">
								<div class="media-body">
									<h5 className="FeaturedHeader" class="mt-0">Completely secure and safe</h5>
									<p className="FeaturedContent">Cutting Edge Technology Encrypts Every Transaction Completely!</p>
								</div>
							</div>
						</Col>
					</Row>
				</Col>

			</Row>
			<Row>
				<div id="FeaturedLaptop" className="py-4">
					<Row>
						<Col lg={4} className="d-flex justify-content-center">
							<div className="d-flex align-items-center h-100 mb-5">
								<Swiper
									id="myCube"									
									effect={'cube'}
									grabCursor={true}
									cubeEffect={{
										shadow: true,
										slideShadows: true,
										shadowOffset: 20,
										shadowScale: 0.94,
									}}
									modules={[EffectCube, Pagination]}
									className="mySwiper"
								>
									{previmgLaptop}
								</Swiper>
							</div>
						</Col>
						<Col className="me-lg-3">
							<Card border="light" className="px-4 py-5 px-lg-0">
								<div className="mt-2 mb-3 text-center">
									<CardGroup className="justify-content-center">
										{previewLaptop}
									</CardGroup>
									<Link to={'/products'} border='primary' id="seemore" className="btn shadow-lg rounded mt-3 px-5" >See More</Link>
								</div>
							</Card>
						</Col>
					</Row>
				</div>
			</Row>
			<Row className="mx-lg-auto my-5">

				{/* 1 */}
				<Col className="col-12 col-lg-4 mb-3 mb-lg-0">
					<Card className="myHiglightsCard1 text-white" style={{maxWidth: '100%', maxHeight: '100%', height: "17rem"}}>
						<Card.Body>
							<Card.Title className="HighlightsTitle">"A gaming laptop: where pixels meet portability, and victories unfold on the move"</Card.Title>
							<Card.Text>
								A nimble laptop may travel with you, but a steadfast PC anchors your gaming dreams in the realms of true power.
							</Card.Text>
							<Link to={'/products'} border='primary' className="btn btn-primary" >See More</Link>
						</Card.Body>
					</Card>
				</Col>

				{/* 2 */}
				<Col className="col-12 col-lg-4 mb-3 mb-lg-0">
					<Card className="myHiglightsCard2 text-white" style={{maxWidth: '100%', maxHeight: '100%', height: "17rem"}}>
						<Card.Body>
						<Card.Title>"Console in hand, adventures command."</Card.Title>
						<Card.Text>
								In the console's glow, gaming stories unfold—a saga played on the stage of pixels and progress.
							</Card.Text>
							<Link to={'/products'} border='primary' className="btn btn-primary" >See More</Link>
						</Card.Body>
					</Card>
				</Col>

				{/* 3 */}
				<Col className="col-12 col-lg-4">
					<Card className="myHiglightsCard3 text-white" style={{maxWidth: '100%', maxHeight: '100%', height: "17rem"}}>
						<Card.Body>
						<Card.Title>
								"In the gaming world, pixels paint tales, and every click unveils epic trails."
							</Card.Title>
							<Card.Text>
								In the vast tapestry of the gaming world, each pixel holds a story, and every challenge unveils a player's glory.
							</Card.Text>
							<Link to={'/products'} border='primary' className="btn btn-primary" >See More</Link>
						</Card.Body>
					</Card>
				</Col>

			</Row>
			<Row>
				<div id="FeaturedConsole" className="py-4">
					<Row>
						<Col lg={4} className="d-flex justify-content-center">
							<div className="d-flex align-items-center h-100 mb-5">
								<Swiper
									id="myCube"									
									effect={'cube'}
									grabCursor={true}
									cubeEffect={{
										shadow: true,
										slideShadows: true,
										shadowOffset: 20,
										shadowScale: 0.94,
									}}
									modules={[EffectCube, Pagination]}
									className="mySwiper"
								>
									{previmgConsole}
								</Swiper>
							</div>
						</Col>
						<Col className="me-lg-3">
							<Card border="light" className="px-4 py-5 px-lg-0">
								<div className="mt-2 mb-3 text-center">
									<CardGroup className="justify-content-center">
										{previewConsole}
									</CardGroup>
									<Link to={'/products'} border='primary' id="seemore" className="btn shadow-lg rounded mt-3 px-5" >See More</Link>
								</div>
							</Card>
						</Col>
					</Row>
				</div>
			</Row>
		</>
	)
}