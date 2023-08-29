import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import CatalogFetchApi from '../../component/navbar/CatalogFetchApi' 
import BaseApiImage from './BaseApiImage'

const Home = () => {
  return (
  <>
    <Navbar/>
    <CatalogFetchApi/>
    <BaseApiImage/>
  </>
  )
}
export default Home;
