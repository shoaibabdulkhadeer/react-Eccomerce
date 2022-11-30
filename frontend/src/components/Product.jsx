import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({product}) => {
  return (

     <Card style={{ width: '18rem' , marginBottom:'2rem'}}>

     <Link style={{textDecoration:"none"}}  to={`/product/${product._id}`}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title><h3 className='title'> {product.name}</h3></Card.Title>
        <Card.Text>
            <Rating value={product.rating} text={ ` from ${product.numReviews } reviews`}/>
        </Card.Text>
        <Card.Text>
         <h2 className='price'> $ {product.price}</h2>
        </Card.Text>
        
      </Card.Body>
      </Link>
    </Card>
        

  )
}

export default Product
