import React from 'react'
import PriceFilter from '../PriceFilter'
import s from './index.module.css'
import SortedProducts from '../SortedProducts'

export default function FiltersSaleContainer({ onPriceFilterChange, onSortTypeChange, from, to, type }) {
  return (
    <div className={s.filtersContainer}>
      <PriceFilter onPriceFilterChange={onPriceFilterChange} fromParam={from} toParam={to} />
      <SortedProducts onSortTypeChange={onSortTypeChange} typeParam={type} />
    </div>
  )
}