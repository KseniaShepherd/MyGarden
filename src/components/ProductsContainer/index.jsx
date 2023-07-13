import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { getProducts } from '../../requests/getProducts';
import ProductsItem from '../ProductItem';
import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import FiltersContainer from '../FiltersContainer';
import { filterProductsByDiscountAction, filterProductsByPriceAction, sortProductsAction } from '../../reducers/productReducer';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export default function ProductsContainer() {
  const products = useSelector(state => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [type, setType] = useState('');
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    //ToDo: здесь надо исправить на то, чтобы вызывалось только когда стейт products не загружен, те пуст.
    // Пока это не получаеться, проверка на длина ===0 не помогает.
    dispatch(getProducts);
  }, []);

  useEffect(() => {
    setFrom(searchParams.get('from'));
    setTo(searchParams.get('to'));
    setChecked(searchParams.get('checked'))
    setType(searchParams.get('type') || '');
  });

  const onPriceFilterChange = (from, to) => {
    setFrom(from);
    setTo(to);
    setSearchParams({ from, to, checked, type });
    const queryString = qs.stringify({ from, to, checked, type });
    navigate(`?${queryString}`);
    // dispatch(filterProductsByPriceAction({ from, to }));
  };

  const onDiscountFilterChange = (checked) => {
    setChecked(checked);
    setSearchParams({ from, to, checked, type });
    const queryString = qs.stringify({ from, to, checked, type });
    navigate(`?${queryString}`);
    dispatch(filterProductsByDiscountAction(checked));

  };

  const onSortTypeChange = (type) => {
    setType(type);
    setSearchParams({ from, to, checked, type });
    const queryString = qs.stringify({ from, to, checked, type });
    navigate(`?${queryString}`);
    dispatch(sortProductsAction(type));
  };

  useEffect(() => {
    //ToDo: применить все фильтры и сортирвки. Но пока что и этот не работает
    dispatch(filterProductsByPriceAction({ from, to }))
  }, [location.search]);

  return (
    <div className={s.productsContainer}>
      <div>
        <h1>All products</h1>
      </div>
      <FiltersContainer
        onPriceFilterChange={onPriceFilterChange}
        onDiscountFilterChange={onDiscountFilterChange}
        onSortTypeChange={onSortTypeChange}
        from={from} to={to} checked={checked} type={type}
      />
      <div className={s.products}>
        {products.filter(el => el.visible).map(el => <ProductsItem key={el.id} {...el} />)}
      </div>
    </div>
  );
}