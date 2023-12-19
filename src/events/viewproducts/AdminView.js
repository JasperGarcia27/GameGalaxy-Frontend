
import { useState, useEffect } from 'react';
import { Row, Col, Table, Card, Tab, Tabs } from 'react-bootstrap';


// Events
import EditProduct from '../EditProduct';
import ArchiveProduct from "../ArchiveProduct"
import AddProduct from '../AddProduct'

// Icons
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function AdminView({ productsData, fetchData }) {
  const [products, setProducts] = useState([])


  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = productsData.slice(firstIndex, lastIndex)
  const npage = Math.ceil(productsData.length / recordsPerPage)
  const number = [...Array(npage + 1).keys()].slice(1)
  console.log(records)


  return (


    <Tabs
      defaultActiveKey="products"
      id="fill-tab-example"
      className="AdminView mb-3"
      fill
    >
      <Tab eventKey="products" title="Products">
        
          <Row >
            <Col lg={12}>
              <Table className='text-center' striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Availability</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((d, i) => (
                    <tr key={i}>
                      <td valign='middle' width='8%'>{d._id}</td>
                      <td valign='middle' width='15%'><strong>{d.name}</strong></td>
                      <td valign='middle' width='17%'>{d.description}</td>
                      <td valign='middle' width='10%'><img src={d.image} style={{ width: '100px' }} /></td>
                      <td valign='middle' width='5%'>₱{d.price.toLocaleString("en-US")}</td>
                      <td id='categoryValue' valign='middle' width='5%'><strong>{d.category}</strong></td>
                      <td valign='middle' width='5%' className={d.isActive ? "text-success" : "text-danger"}>
                        <strong>{d.isActive ? "Available" : "Unavailable"}</strong>
                      </td>
                      <td valign='middle' width='3%'><EditProduct product={d._id} fetchData={fetchData} /></td>
                      <td valign='middle' width='3%'><ArchiveProduct product={d._id} isActive={d.isActive} fetchData={fetchData} /></td>
                    </tr>

                  ))}
                  <nav className='px-0'>
                    <ul className='pagination'>
                      <li className='page-item'>
                        <a href='#' className='page-link' onClick={prePage}><FcPrevious/></a>
                      </li>
                      {
                        number.map((n, i) => (
                          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                            <a href='#' className='page-link' onClick={() => changeCPage(n)}>{n}</a>
                          </li>
                        ))
                      }
                      <li className='page-item'>
                        <a href='#' className='page-link' onClick={nextPage}><FcNext/></a>
                      </li>
                    </ul>
                  </nav>
                </tbody>
                
              </Table>
            </Col>
          </Row>
        
      </Tab>
      <Tab eventKey="addProduct" title="Add Product">
        <AddProduct />
      </Tab>
    </Tabs>
  );
  function prePage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id){
    setCurrentPage(id)
  }
  function nextPage(){
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }
}



export default AdminView;



