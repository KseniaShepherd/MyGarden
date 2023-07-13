import React from 'react'
import s from './index.module.css'
import { addToCartAction } from '../../reducers/cartReducer'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProductItem({ id, title, price, discont_price, image, realPrice, discountPercentage }) {

  const dispatch = useDispatch();
  const addToCart = () =>
    dispatch(addToCartAction({ id, image, title, price, discont_price, realPrice }));

  return (
    <div>{typeof price == 'undifined' ? <div>Loading</div> :
      <div className={s.productItem}>
        <Link to={`/products/${id}`}>
          <div data-cy={`product ${id}`} data-testid="product-item">
            <img src={`http://localhost:3333${image}`} alt={title}></img>
            <div className={s.priseString}>
              <h4 data-cy='productPrice'>{realPrice} $</h4>
              <p className={discont_price ? s.oldPrice : s.oldPriceinActive} data-cy="discountPrice">{Math.round(price)} $</p>
              <p className={discountPercentage ? s.discountPercentage : s.discountPercentageinActive}>- {discountPercentage} % </p>
            </div>
            <p id={s.productsTitle} data-cy="productName" >{title}</p>
          </div>
        </Link>
        <button className={s.addBtn} onClick={addToCart} data-cy={`addToCartBtn ${id}`}>Add to cart</button>
      </div>}
    </div>
  )
}
