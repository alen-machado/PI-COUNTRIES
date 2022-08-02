import React from 'react'
import { Link } from 'react-router-dom'
import s from '../styles/NotFound.module.css'

export default function NotFound() {
  return (
    <div className={s.div}>
      <Link to='/home'>
        <button>Volver al Home!</button>
      </Link>
      
      <h1>La pagina que usted esta buscando no existe</h1>

    </div>
  )
}