import React from 'react'
import CatalogNav from './CatalogNav'
import CatalogFetchApi from '../../component/navbar/CatalogFetchApi' 
import BaseApiImage from '../home/BaseApiImage'


const Catalogs = () => {
  return (
    <>
      <CatalogNav/>
      <CatalogFetchApi/>
      <BaseApiImage/>
    </>
  )
}

export default Catalogs
