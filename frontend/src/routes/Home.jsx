import React , {useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const Home = () => {

const [products,setProducts] = useState([])

useEffect(()=> {
   axios.get('/api/products').then((response) => {
    setProducts(response.data)
   })
   
},[])


  return (
    <>
     <h1>Latest Products</h1>
    <Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
        ) )}
    </Row>

    </>
  )
}

export default Home
