import React from 'react'
import PriceFilter from '../PriceFilter'
import DiscountedFilter from '../DiscountedFilter'
import s from './index.module.css'
import SortedProducts from '../SortedProducts'


export default function FiltersContainer({ onPriceFilterChange, onDiscountFilterChange, onSortTypeChange, from, to, checked, type }) {
  return (
    <div className={s.filtersContainer}>
      <PriceFilter onPriceFilterChange={onPriceFilterChange} fromParam={from} toParam={to} />
      <DiscountedFilter onDiscountFilterChange={onDiscountFilterChange} checkedParam={checked} />
      <SortedProducts onSortTypeChange={onSortTypeChange} typeParam={type} />
    </div>
  )
}
