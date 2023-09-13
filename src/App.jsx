import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';


const CITIES_URL = 'https://apidata-zkgz.onrender.com/cities';

const App = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities(){
      try{
        setIsLoading(true)
        const res = await fetch(`${CITIES_URL}`);
        const data = await res.json();
        setCities(data);
      }
      catch(error){
        alert('There was an error loading data...');
      }
      finally {
        setIsLoading(false)
      }
    }
    fetchCities();
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='product' element={<Product />} />
        <Route path='login' element={<Login />} />
        
        <Route path='app' element={<AppLayout />}>
          <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />} />

          <Route path='cities/:id' element={<City />} />
          
          <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading} />} />
          <Route path='form' element={<Form />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;
