
import { GiGamepadCross } from "react-icons/gi";
import {Row,Col} from 'react-bootstrap'

export default function Footer(){

	return(
        <Row id="FooterComponent">
            <Col>
                <footer class="d-flex myFooter justify-content-center d-grid gap-3 m-5">
                    <div>Game <GiGamepadCross size={20} className='pb-1 m-0' /> Galaxy</div>
                    <div>|</div>
                    <div>Terms of Use</div>
                    <div>|</div>
                    <div>Copyright 2023</div>
                </footer>
            </Col>
        </Row>
	)
}

