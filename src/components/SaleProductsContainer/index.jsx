import React, { useEffect, useState } from 'react'
import qs from 'qs';
import { getSaleProducts } from '../../requests/getProducts'
import ProductsItem from '../ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'
import FiltersSaleContainer from '../FiltersSaleContainers'
import { filterProductsByPriceAction, sortProductsAction } from '../../reducers/productReducer'
import { useNavigate, useSearchParams } from 'react-router-dom'


export default function SaleProductsContainer() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [type, setType] = useState('');

  const saleproducts = useSelector
    (state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSaleProducts);
  }, []);

  useEffect(() => {
    // Извлечь параметры из URL и установить их в фильтры
    setFrom(searchParams.get('from') == '' ? 0 : searchParams.get('from'));
    setTo(searchParams.get('to') == '' ? Infinity : searchParams.get('to'));
    setType(searchParams.get('type') || '');
  });

  const onPriceFilterChange = (from, to) => {
    setFrom(from);
    setTo(to);
    setSearchParams({from, to, type });
    const queryString = qs.stringify({ from, to, type });
    navigate(`?${queryString}`);
    dispatch(filterProductsByPriceAction({ from, to }));
  };

  const onSortTypeChange = (type) => {
    setType(type);
    setSearchParams({ from, to, type });
    const queryString = qs.stringify({ from, to, type });
    navigate(`?${queryString}`);
    dispatch(sortProductsAction(type));
  };

  return (
    <div className={s.saleProductsContainer}>
      <div>
        <h1>Products with sale </h1>
      </div>
      <FiltersSaleContainer
       onPriceFilterChange = {onPriceFilterChange}
        onSortTypeChange={onSortTypeChange}
        from={from} to={to} type={type}/>
      <div className={s.saleProducts}>
        {saleproducts.filter(el =>el.visible).map(el => <ProductsItem key={el.id} {...el} />)}
      </div>
    </div>
  )
}
