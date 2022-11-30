import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import Account from './routes/Account'
import ProductScreen from './routes/ProductScreen';

function App() {

  return (
    <>

       <Header />
    
       <main className='py-3'>
       <Container>

       <Routes >
          <Route path='/' element={<Home />} exact/>
          <Route path='/account' element={<Account />}/>
          <Route path='/product/:id' element={<ProductScreen />} />
        </Routes>


        </Container>
       </main>
     
       <Footer />

    </>
  );
}

export default App;
