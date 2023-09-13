import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='product' element={<Product />} />
        <Route path='login' element={<Login />} />
        
        <Route path='app' element={<AppLayout />}>
          <Route index element={<p>List of cities</p>} />
          <Route path='cities' element={<p>List of cities</p>} />
          <Route path='countries' element={<p>Countries</p>} />
          <Route path='form' element={<p>Form</p>} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;
