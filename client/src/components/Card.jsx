import React from 'react'
import s from '../styles/Card.module.css'
import { Link } from "react-router-dom"

export default function Card({id, name, image, continents, population}) {
  return (
    <div key={id} className={s.conteiner}>
     <h3 className={s.name}>{name}</h3>
         <img className={s.img} src={image} alt="img not found" width="350px" height="300px"/>
         <h3 className={s.temp} >Continente: {continents}</h3>
         <h3 className={s.temp} >Poblacion: {population} Personas</h3>

         <Link to={`/home/${id}`}>
          <button>DETALLE</button>
         </Link>
         
    </div>
  )
}