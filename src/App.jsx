import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Axios from 'axios'
import baseUrl from './config/baseUrl'

function App() {
  const [products, setProducts] = useState([])
  const fetchData = async (page = 0) => {
    const response = await Axios.post(`${baseUrl}/getByPage`, {
      page: page,
    })
    setProducts(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    fetchData()
    console.log(products);
  }, [])

  return (
    <>
      <ul>
        {
          products.map((product, i) => (
            <div key={i}>
              <li>{product.ProductID}</li>
              <li>{product.ProductName}</li>
            </div>
          ))
        }
      </ul>

    </>
  )
}

export default App
