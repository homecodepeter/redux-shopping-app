import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/Action/Action'

function ProductDetail() {
  const product = useSelector(state => state.product);
  const {image, title, price, category, description} = product;
  const { productId } = useParams()
  const dispatch = useDispatch()
  console.log(product)

  const fetchingProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch(err => {
      console.log("err", err)
    })
    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if(productId && productId !== "") fetchingProductDetail();
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className="Big-bro">
       {
         Object.keys(product).length === 0 ? (
          <div>...loading</div>
        ): (
          <div className='Big-bro'>
       <div className='maintain'>
         <div className='main'>
           <img src={image} alt={title} />
           </div>
           </div>
           <div className='downLine'>
        <h1>{title}</h1>
        <h2>
         $ {price}
         <p>{category}</p>
        </h2>
        <p>{description}</p>
        <button className='btn'>Add Cart</button>
         </div>
          </div>
        )
       }
    </div>
  )
}

export default ProductDetail