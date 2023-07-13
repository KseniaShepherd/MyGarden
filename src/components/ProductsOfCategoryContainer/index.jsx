import React, { useEffect, useState } from 'react';
import qs from 'qs';
import { getProductsOfCategory } from '../../requests/getProductsOfCategory';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
import s from './index.module.css'
import { useParams } from 'react-router-dom';
import FiltersContainer from '../FiltersContainer';
import { filterProductsByDiscountAction, filterProductsByPriceAction, sortProductsAction } from '../../reducers/productsOfCategoryReducer';
import { getCategories } from '../../requests/getCategories';
import { useNavigate, useSearchParams } from 'react-router-dom';


export default function ProductsOfCategoryContainer() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const productsOfCategory = useSelector(state => state.productsOfCategory);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    dispatch(getProductsOfCategory(categoryId));
  }, []);

  const categoryTitlies = useSelector(state => state.categories)
  useEffect(() => {
    dispatch(getCategories);
  }, []);

  const title = categoryTitlies?.find(el => el.id == categoryId)?.title

  useEffect(() => {
    // Извлечь параметры из URL и установить их в фильтры
    setFrom(searchParams.get('from') == '' ? 0 : searchParams.get('from'));
    setTo(searchParams.get('to') == '' ? Infinity : searchParams.get('to'));
    setType(searchParams.get('type') || '');
  });

  const onPriceFilterChange = (from, to) => {
    setFrom(from);
    setTo(to);
    setSearchParams({ from, to, type });
    const queryString = qs.stringify({ from, to, type });
    navigate(`?${queryString}`);
    dispatch(filterProductsByPriceAction({ from, to }));
  };

  const onDiscountFilterChange = (checked) => {
    dispatch(filterProductsByDiscountAction(checked));
  };

  const onSortTypeChange = (type) => {
    setType(type);
    setSearchParams({ from, to, type });
    const queryString = qs.stringify({ from, to, type });
    navigate(`?${queryString}`);
    dispatch(sortProductsAction(type));
  };
  return (
    <div className={s.productsContainer}>
      <div>
        <h1 data-cy="h1">{title}</h1>
      </div>
      <FiltersContainer
        onPriceFilterChange={onPriceFilterChange}
        onDiscountFilterChange={onDiscountFilterChange}
        onSortTypeChange={onSortTypeChange}
        from={from} to={to} type={type} />
      <div className={s.products}>
        {productsOfCategory?.filter(el => el.visible).map(el => <ProductItem key={el.id} {...el} />)}
      </div>
    </div>
  )
}
