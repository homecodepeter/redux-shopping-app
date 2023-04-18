import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProduct }from '../redux/Action/Action'
import axios from 'axios'

function ProductListing() {
  const products = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchingProduct()
  },[])

  const fetchingProduct = async() => {
    const response = await axios.
    get('https://fakestoreapi.com/products')
    .catch(error => {
       console.log("Err", error)
    })
    dispatch(setProduct(response.data))
  }

  console.log("Products", products)

  return (
    <div className='Container'>
      <ProductComponent />
      </div>
  )
}

export default ProductListing