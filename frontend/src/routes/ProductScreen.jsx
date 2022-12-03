import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios'



const ProductScreen = () => {
 
const [product,setProduct] = useState({})


const params = useParams()

useEffect(()=> {
 axios.get(`/api/products/${params.id}`).then((response) => {
      setProduct(response.data)
 })
},[])


  // const {id} = useParams()
  // const product = products.find((p) => p._id === id)
  
  return (
    <div >
        
        <Link to="/" className='btn btn-light my-3' >Go Back </Link>  
       
        <Container>
        <Row >

        <Col md={6}>
        <img src={product.image}  alt='/' className='container-fluid' />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'> 
          <ListGroupItem>
            <h3>{product.name}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <h3>{product.brand}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <Rating  value={product.rating} text={ ` from ${product.numReviews } reviews`}/>
          </ListGroupItem>
          <ListGroupItem>
            <h3>$ {product.price}</h3>
          </ListGroupItem> 
          <ListGroupItem>
            <p>{product.description}</p>
          </ListGroupItem> 
                  </ListGroup>
        </Col>

        <Col md={3}>
        <Card>
        <ListGroup variant='flush'>
          <ListGroupItem>
             <Row>
              <Col>Price:</Col>
              <Col>
                <strong>${product.price}</strong>
              </Col>
             </Row>
          </ListGroupItem>


          <ListGroupItem>
             <Row>
              <Col>Status:</Col>
              <Col>
                <strong>{product.countInStock > 0 ? "Instock": "Out of Stock"}</strong>
              </Col>
             </Row>
          </ListGroupItem>

          <ListGroupItem>
            <Button
             className='btn btn-info' 
             type='button'
             disabled={product.countInStock === 0}
             >  Add to Cart
             </Button>
          </ListGroupItem>

        </ListGroup>

        </Card>

        </Col>

    
        </Row>
    </Container>
      
    </div>
  )
}

export default ProductScreen
