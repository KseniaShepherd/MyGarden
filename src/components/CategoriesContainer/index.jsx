import React, { useEffect } from 'react'
import { getCategories } from '../../requests/getCategories'
import CategoryItem from '../CategoryItem'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';

export default function CategoriesContainer() {
  const categories = useSelector
    (state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories);
  }, []);
  return (
    <div className={s.categoriesContainer}>
      <h1 data-cy="h1">Categories</h1>

      <div className={s.categories}> {categories.map(el => { return <CategoryItem key={el.id} {...el} /> })}</div>

    </div>
  );
};
