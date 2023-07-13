import React, { useEffect, useState } from 'react'
import s from './index.module.css'



export default function DiscountedFilter({ onDiscountFilterChange, checkedParam }) {
    const [checked, setChecked] = useState(false);
    console.log(checked)
    useEffect(() => {
        setChecked(checkedParam);
    }, [checkedParam]);
    // const handleCheckboxChange = () => setChecked(!checked)
    const handleCheckboxChange = event => {
        onDiscountFilterChange(event.target.checked);
    };
    return (
        <div >
            <label className={s.discountedFilter}>
                <span>Discounted items</span>
                <input type="checkbox" data-cy="discountFilter" name="discounted" onChange={handleCheckboxChange} checked={checked} />
            </label>
        </div>
    )
}
