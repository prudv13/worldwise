import React from 'react'
import PageNav from '../components/PageNav';
import { Link } from 'react-router-dom';
import AppLayout from './AppLayout';

const Home = () => {
  return (
    <div>
        <PageNav />
        <h1>Worldwise</h1>
        <AppLayout />

        <Link to='/app'>Go to the app</Link>
    </div>
  )
}

export default Home;