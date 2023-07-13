import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function CategoryItem({ id, title, image }) {
  return (
    <div className={s.categoryItem}>
      <Link to={`/products/category/${id}`} title={title} >
        <div className={s.category}>
          <img src={`http://localhost:3333${image}`} alt={title}></img>
          <p>{title}</p>
        </div>
      </Link>
    </div>

  )
}
