import React, { useEffect } from 'react'
import { addToCartAction } from '../../reducers/cartReducer'
import { useDispatch } from 'react-redux'
import s from './index.module.css'



export default function ProductDescriptionItem({ id, title, price, discont_price, image, description, realPrice, discountPercentage }) {
  const dispatch = useDispatch();

  const addToCart = () =>
    dispatch(addToCartAction({ id, image, title, price, discont_price, realPrice }));

  return (
    <div>
      {
        typeof price == 'undifined' ? <div>Loading</div> :
          <div className={s.productDescriptionItem}>
            <p id={s.productsTitle} data-cy='title'>{title}</p>
            <div className={s.description}>
              <img src={`http://localhost:3333${image}`} alt={title}></img>
              <div className={s.priseString}>
                <h4 className={s.realPrice} data-cy='productPrice'>{realPrice} $</h4>
                <p className={discont_price ? s.oldPrice : s.oldPriceinActive} data-cy="discountPrice">{Math.round(price)} $</p>
                <p className={discountPercentage ? s.discountPercentage : s.discountPercentageinActive}>- {discountPercentage} % </p>
              </div>
              <button className={s.toCartBtn} onClick={addToCart} data-cy='addToCartBtn'>To cart</button>
              <p id={s.wordDesc}>Description</p>
              <p id={s.descr}>{description}</p>
            </div>
          </div>
      }
    </div>
  )
}

