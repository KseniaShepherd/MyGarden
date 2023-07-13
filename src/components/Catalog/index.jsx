import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './index.module.css'
import { getCatalog } from '../../requests/getCategories'
import CategoryItem from '../CategoryItem';
import { Link } from 'react-router-dom';

export default function Catalog() {
    const catalog = useSelector
        (state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatalog);
    }, []);

    return (
        <div>
            <div className={s.catalogTitle}>
                <p id={s.title}>Catalog</p>
                <Link to={'/categories'} data-cy="allcategories">All categories</Link>
            </div>
            <div className={s.catalog}>{catalog.map(el => <CategoryItem key={el.id} {...el} />)}</div>

        </div>
    )
}
