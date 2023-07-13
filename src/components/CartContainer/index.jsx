import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import icons8forward from '../../images/icons8forward.svg'
import s from './index.module.css'
import OrderForm from '../OrderForm'
import { Link } from 'react-router-dom';

export default function CartContainer() {
    const cartsState = useSelector
        (state => state.cart);
    const total = Math.round(cartsState.reduce(
        (accumulator, { realPrice, count }) => accumulator + realPrice * count, 0
    ));
    return (
        <div className={s.cartContainer}>
            <div className={s.title}>  <p>Shopping cart</p>
                <Link to={'/products'}>
                    <p className={s.backToTheStore}>Back to the store <img src={icons8forward}></img></p>
                </Link></div>


            <div className={s.cartList}>
                {cartsState.map(el => <CartItem key={el.id} {...el} />
                )}
            </div>


            <div className={s.orderDetails}>
                <p>Order details</p>
                <div className={s.totalPrice}>
                    <p id={s.total}>Total</p>
                    <p id={s.totalSum}>{total}<small>$</small></p>
                </div>
                <OrderForm />
            </div>
        </div>
    )
}
