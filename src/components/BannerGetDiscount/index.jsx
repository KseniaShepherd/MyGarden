import React from 'react'
import s from './index.module.css'
import dwarf from '../../images/dwarf.png'
import FormGetDiscount from '../FormGetDiscount'


export default function BannerGetDiscount() {
  return (
    <div className={s.bannerBackground}>
      <div className={s.bannerGetDiscount}>
        <img src={dwarf} alt='dwarf' width={422} height={422}></img>
        <div className={s.bannerText}>
          <p id={s.firstString}> 5% off</p>
          <p id={s.secondString}>on the first order</p>
        </div>
        <div className={s.form}>
          <FormGetDiscount />
        </div>

      </div>
    </div>
  )
}
