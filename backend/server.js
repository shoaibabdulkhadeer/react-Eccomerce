// changed requre method to ES MODULES by adding "type": "module", in pakage.json
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()

const app = express()

app.get('/',(req,res)=> {
    res.send("Api is running....")
})

app.get('/api/products',(req,res) => {
    res.json(products)
})


// api Call for product screen
app.get('/api/products/:id',(req,res) => {
    //   to show only that product which is equal to the params id from the hover/click which happens in the front end
    const product = products.find(p => p._id === req.params.id)  
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(5000,console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`))




