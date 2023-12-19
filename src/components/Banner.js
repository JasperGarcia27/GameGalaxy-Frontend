import {Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Banner({data}){
    
    console.log(data);
    const {title, content, destination, label} = data;

	return(
		<Row>
           <Col className="p-5 text-center">
                <h1 className='BrandTitle'>{title}</h1>
                <p className='BannerContent'>{content}</p>
 
                <Col lg={{span:2, offset:5}}>
                    <Row>
                        <Link id='ButtonBanner' className="btn btn-primary py-2" to={destination}>{label}</Link>
                    </Row>
                </Col>
           </Col>
       </Row>
	)
} 