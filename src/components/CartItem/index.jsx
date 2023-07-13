import React from 'react'
import s from './index.module.css'
import cross from '../../images/cross.png'
import minus from '../../images/Rectangle2059.png'
import plus from '../../images/Group3312.png'
import { deleteFromCartAction, incrementQuantity, decrementQuantity } from '../../reducers/cartReducer';
import { useDispatch } from 'react-redux';

export default function CartItem({ id, title, price, discont_price, image, count, realPrice }) {


    const dispatch = useDispatch();

    return (
        <div className={s.cartItem}>
            <img src={`http://localhost:3333${image}`} alt={title} width='192.6' height='166.64'></img>

            <div className={s.boxTitleAndCross}>
                <p>{title}</p>
                <img onClick={() => dispatch(deleteFromCartAction(id))} src={cross} alt='cart' width='20' height='20' />
            </div>

            <div className={s.priseString}>
                <h4>{realPrice * count}$</h4>
                <p className={discont_price ? s.oldPrice : s.oldPriceinActive}>{Math.round(price) * count} $</p>
            </div>

            <div className={s.quantityCounter}>
                <img onClick={() => dispatch(decrementQuantity(id))} src={minus} alt='cart' width='18' height='2' />
                <p>{count}</p>
                <img onClick={() => dispatch(incrementQuantity(id))} src={plus} alt='cart' width='18' height='18' />
            </div>

        </div>
    )
}
