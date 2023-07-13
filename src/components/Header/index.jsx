import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logo from '../../images/logo.png'
import cart from '../../images/cart.png'

export default function Header() {

  return (
    <div className={s.header}>
      <div className={s.logoAndCatalog}>
        <img src={logo} alt='logo' />
        <Link to='/categories' >Catalog</Link>
      </div>
      <div className={s.nav}>
        <Link to='/' >MainPage</Link>
        <Link to='/products'>All products</Link>
        <Link to='/saleproducts'>All sales</Link>
      </div >
      <div className={s.cartImg}>
        <Link to="/cart">
          <img src={cart} alt='cart' width='26.55' height='29.4' data-cy='cartImg' />
        </Link>
      </div>

    </div>
  )
}

