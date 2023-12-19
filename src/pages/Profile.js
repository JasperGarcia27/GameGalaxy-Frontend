import { useState, useEffect, useContext } from 'react';

import UserContext from '../UserContext';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import UserIcon from '../pictures/icon.png';

import { 
  Row, 
  Col,
  Card, 
  Dropdown, 
  NavDropdown,
  Collapse
} from 'react-bootstrap';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { IoSettingsSharp } from 'react-icons/io5';

// Events
import ResetPassword from '../events/ResetPassword';
import UpdateProfile from '../events/UpdateProfile';

// Components
import AppNavbar from '../components/AppNavBar';

import Navbar from '../components/NavBar'

export default function Profile() {

  const { user } = useContext(UserContext);

  const [details, setDetails] = useState({});

  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`https://gamegalaxy-backend.onrender.com/users/getUserDetails`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (typeof data._id !== "undefined") {
          setDetails(data)
        }
      })
  }, [])

  console.log(details.firstName)
  console.log()
  return (
    (user.access === null) ?
      <Navigate to="/products" />
      :
      <>
        <AppNavbar />
        <div className='mt-5' style={{ height: '100vh' }}>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <div className="cardHighlight mx-2 mt-5 mb-1 bg-white rounded" >
                <Card.Body>
                  <Row className="mt-4 text-center">
                    <Col lg={{ span: 3, offset: 1 }}>
                      <img src={UserIcon} style={{ width: '80px' }} alt="Logo" />
                      <Card.Title className='BannerContent mt-3 mb-0'><strong>{details.firstName} {details.lastName}</strong></Card.Title>
                      <Card.Text className='BannerContent'>Name</Card.Text>
                    </Col>

                    <Col className='text-start' lg={8}>
                      <div className='d-flex' >
                        <h3 className='BrandTitle mb-0'>Information</h3>
                        <Link
                          onClick={() => setOpen(!open)}
                          aria-controls="example-collapse-text"
                          aria-expanded={open}
                          className='m-2 my-1 text-dark'
                        >
                          <IoSettingsSharp size={25}/>
                        </Link>
                      </div>

                      <hr className='text-primary' />
                      
                      <Collapse in={open}>
                        <div id="example-collapse-text">
                          <h4 className='Settings'>Settings</h4>
                          <ul>
                            <li><UpdateProfile /></li>
                            <li><ResetPassword /></li>
                          </ul>
                          
                          
                        </div>
                      </Collapse>
                      
                      <ul className='mt-4'>
                        <div className='mb-4'>
                          <h5 className='BannerContent'><strong>Email:</strong></h5>
                          <p className='BannerContent'>{details.email}</p>
                        </div>
                        <div>
                          <h5 className='BannerContent'><strong>Address:</strong></h5>
                          <p className='BannerContent'>{details.address}</p>
                        </div>
                      </ul>

                    </Col>
                  </Row>
                  <hr />


                </Card.Body>
              </div>
            </Col>
          </Row>
        </div>
      </>
  )
}


