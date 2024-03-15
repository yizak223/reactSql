import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Axios from 'axios'
import baseUrl from './config/baseUrl'

function App() {
  const [products, setProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = async (page = 0) => {
    const response = await Axios.post(`${baseUrl}/getByPage`, {
      page: page,
    })
    setProducts(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    fetchData(pageNumber)
    console.log(products);
  }, [pageNumber])

  const handlePageChange = (event) => {
    setPageNumber(parseInt(event.target.value));
  };

  return (
    <>
      <ul>
        {
          products.map((product, i) => (
            <div key={i}>
              <li>{product.ProductID} - {product.ProductName}</li>
            </div>
          ))
        }
      </ul>
      <label htmlFor=""> Page number</label><br />
      <input
        type="number"
        id="pageNumber"
        min="1"
        max="5"
        value={pageNumber}
        onChange={handlePageChange} />
    </>
  )
}

export default App
