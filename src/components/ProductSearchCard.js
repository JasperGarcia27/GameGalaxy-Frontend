import { Card, CardGroup, Button, Col, Row, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react"



export default function ProductSearchCard ({ productProp }) {


    const { _id, name, description, image, price } = productProp;
    const [productImages, setProductImages] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    return (
        <Link className="btn btn-transparent m-0 p-0" to={`/products/${_id}`}>
            <Table hover responsive>
                <tbody className='text-start'>
                    <tr>
                        <td valign='middle' width='50%'>
                            <img src={image} alt={name} style={{ maxWidth: '100%' }} />
                        </td>
                        <td valign='middle'>
                            <Container>
                                <Row>{name}</Row>
                                <Row className='text-danger'>₱{price.toLocaleString("en-US")}</Row>
                            </Container>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Link>
    )
}


ProductSearchCard .propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}