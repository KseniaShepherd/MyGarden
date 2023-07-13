import React, { useEffect, useState } from 'react'
import s from './index.module.css'

export default function SortedProducts({ onSortTypeChange, typeParam }) {
    const [type, setType] = useState('');
    useEffect(() => {
        setType(typeParam);
    }, [typeParam]);
    const getSortType = event => {
        const type = event.target.value;
        onSortTypeChange(type)
    }
    return (
        <div className={s.sortedProductsContainer}>
            <span>Sorted</span>

            <select className={s.sorted} data-cy="sort-type" name="sortedProducts" onInput={getSortType} value={type === '' ? 'default' : type}>
                <option value='default'>By default</option>
                <option value='title'>By title A-Z</option>
                <option value='titleReverse'>By title Z-A </option>
                <option value='priceAscending'>By price ascending</option>
                <option value='priceDescending'>By price descending</option>
            </select>
        </div>
    )
}
