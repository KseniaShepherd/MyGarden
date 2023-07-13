import React, { useEffect } from 'react'
import { getThreeSaleProducts } from '../../requests/getProducts'
import ProductsItem from '../ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'

export default function SaleSlider() {
  const threeSaleproducts = useSelector
    (state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThreeSaleProducts);
  }, []);
  return (
    <div className={s.saleSlider}>
      <p>Sale</p>
      <div className={s.saleContainer}>
        {threeSaleproducts.map((el, index) => <ProductsItem key={index} {...el} />)}
      </div>
    </div>

  )
}
