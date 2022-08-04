import React from 'react'
import s from '../styles/Card.module.css'
import { Link } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux"
import { getCountries, deleteCount } from '../actions/index'

export default function Card({id, name, image, continents, population}) {

  const dispatch = useDispatch()

  function handleDelete(e){
    e.preventDefault()
    dispatch(deleteCount(e.target.name))
    dispatch(getCountries())
  }
  return (
    <div key={id} className={s.conteiner}>
      <button className={s.button2} name={id} value={id} onClick={(e) => { handleDelete(e) }}>X</button>
         <h3 className={s.name}>{name}</h3>
         <img className={s.img} src={image} alt="img not found" width="350px" height="300px"/>
         <h3 className={s.temp} >Continente: {continents}</h3>
         <h3 className={s.temp} >Poblacion: {population} Habitantes</h3>

         <Link to={`/home/${id}`}>
          <button className={s.button}>DETALLE</button>
         </Link>
         
    </div>
  )
}