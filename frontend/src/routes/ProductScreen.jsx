import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'



const ProductScreen = () => {

  const {id} = useParams()
  const product = products.find((p) => p._id === id)
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

    
        </Row>
    </Container>
      
    </div>
  )
}

export default ProductScreen
