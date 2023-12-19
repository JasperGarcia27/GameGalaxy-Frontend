
// import { Carousel, Row, Col, Card} from 'react-bootstrap';

// import BgProfile from '../pictures/profile.jpg';
// import BgSeasonings from '../pictures/seasonings.jpg';
// import BgUnique from '../pictures/unique.jpg';

// function Highlight() {
//   return (
//     <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={BgProfile}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <Row>
//             <Col>
//               <Card border='success' className="mx-3 p-3 py-5">
//                   <Card.Body>
//                       <Card.Title>
//                           <h2>Unique Flavor Profiles</h2>
//                           <hr className='text-success'/>
//                       </Card.Title>
//                           <ul>
//                               Highlight the distinctive flavor profiles of your spice blends and seasonings, illustrating how they can elevate dishes and bring out the best in every cuisine.
//                           </ul>
//                   </Card.Body>
//               </Card>
//             </Col>
//           </Row>
            
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={BgSeasonings}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//             <Card border='danger' className="cardHighlight mx-3 p-3 py-5">
//                 <Card.Body>
//                     <Card.Title>
//                         <h2>Premium Quality Spices and Seasonings</h2>
//                         <hr className='text-danger'/>
//                     </Card.Title>
//                     <ul>
//                         Emphasize the exceptional quality of your spices and seasonings, highlighting how they are carefully sourced, handpicked, and blended to perfection.
//                     </ul>
//                 </Card.Body>
//             </Card>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={BgUnique}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//             <Card border='primary' className="cardHighlight mx-3 p-3 py-5">
//                 <Card.Body>
//                     <Card.Title>
//                         <h2>Artisanal Craftsmanship</h2>
//                         <hr className='text-primary'/>
//                     </Card.Title>
//                     <ul>
//                         Showcase the artisanal craftsmanship that goes into creating your products, including traditional techniques and a commitment to preserving the authenticity of each spice.
//                     </ul>
//                 </Card.Body>
//             </Card>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Highlight;
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
      style={{ width: '15rem'}}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}