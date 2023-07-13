import React from 'react'
import imageSaleBanner from '../../images/imageSaleBanner.png'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function BannerSale() {
  return (
    <div className={s.bannerBackground}>
      <div className={s.bannerSale}>
        <div className={s.bannerText}>
          <p id={s.title}>Sale</p>
          <p id={s.slogan}>New season</p>
          <Link to='/saleproducts' >Sale</Link>
        </div>
        <img src={imageSaleBanner} alt='imageSaleBanner' width={700} height={600}></img></div>

    </div>
  )
}
