import React, { useEffect, useRef, useState } from 'react'
import s from './index.module.css'


export default function PriceFilter({ onPriceFilterChange, fromParam, toParam }) {

    const [priceState, setPriceState] = useState({ from: '', to: '' });


    useEffect(() => {
        setPriceState({
            from: fromParam === null ? 0 : fromParam,
            to: toParam === null ? Infinity : toParam
        });
    }, [fromParam, toParam]);


    const onInputChange = event => {
        const newState = { ...priceState, [event.target.name]: event.target.value }
        setPriceState(newState)
        onPriceFilterChange((newState.from), (newState.to));
    }


    const clearValue = event => {
        event.target.value = ''
    }
    return (
        <div>
            <form className={s.formPriceFilter}>
                <p>Price</p>
                <input type="text" data-cy="from" name="from" value={priceState.from !== 0 ? priceState.from : 'from'} onFocus={clearValue} onInput={onInputChange} />
                <input type="text" data-cy="to" name="to" value={priceState.to != Infinity ? priceState.to : 'to'} onClick={clearValue} onInput={onInputChange} />
            </form>
        </div>
    )
}