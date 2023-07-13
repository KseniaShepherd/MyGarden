import React from 'react'
import notfound404 from '../../images/notfound404.png'
import FooterContainer from '../../components/FooterContainer'
import s from './index.module.css'

export default function NotFoundPage() {
  return (
    <div className={s.notFoundPage}>
      <img src={notfound404} alt='notfound404' width={1500} height={625}></img>
      <FooterContainer />
    </div>
  )
}
