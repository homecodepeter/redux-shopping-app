import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProductComponent() {
  const products = useSelector(state => state.allproduct.products);
   const renderAll = products.map((product) => {
     const {title, image, price, id, category } = product
        return (
          <div className='lagger'  key={id}>
              <Link to={`product/${id}`}>
          <div className='main'>
          <div className='card'>
          <div className='image'>
        <img src={image} alt={title} />
          </div>
          <div>
        <div className='header'>{title}</div>
        <div className='price'>$ {price}</div>
        <div className='meta'>{category}</div>
          </div>
          </div>
          </div>
          </Link>
          </div>
        )
   })
  return <>{renderAll}</>
}

export default ProductComponent