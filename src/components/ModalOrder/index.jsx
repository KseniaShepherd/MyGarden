import React from 'react'
import s from './index.module.css'
import cross from '../../images/cross.png'


export default function ModalOrder({ responseToRequest, modal, setModal }) {
    return (
        <div className={[s.modal, modal ? s.activ : ''].join(' ')}>
            <div className={s.modalContent}>
                <p> {responseToRequest}</p>
                <img onClick={() => setModal(false)} src={cross} alt='cart' width='10' height='' />
            </div>

        </div>
    )
}
