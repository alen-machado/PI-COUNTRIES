import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCountries, getDetail, deleteAct, cleanCountryId } from '../actions/index'
import { useEffect } from 'react'
import s from '../styles/CardDetail.module.css'

export default function CardDetail() {
  const { id } = useParams();

  const dispatch = useDispatch()
  const country = useSelector((state) => state.detail)


  useEffect(() => {
    dispatch(getDetail(id))
    dispatch(cleanCountryId())
  },[dispatch, id])

  function handleDelete(e){
    e.preventDefault()
    dispatch(deleteAct(e.target.name))
    dispatch(getDetail(id))
  }

  function handleClick(e){
    e.preventDefault()
    dispatch(getCountries())
  }
  
  function mayus(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <div key={id} >

             <div>

            <Link to='/create'>
              <button>Crear Actividad</button>
            </Link>

            <Link to={'/home'}>
                <button>Home</button>
            </Link>

         <button onClick={e => {handleClick(e)}}>Volver a cargar</button>

             </div>
            
           <div className={s.conteiner}>
           {
            
            country.length > 0 ? 
            
            <div>
              <h1 className={s.title}>{country[0].name}</h1>
               <h2 >Codigo: {country[0].id}</h2>
              <img className={s.img} src={country[0].image? country[0].image : "https://www.elsoldemexico.com.mx/doble-via/zcq7d4-perro.jpg/alternates/LANDSCAPE_768/perro.jpg"} alt="img not found" width="350px" height="300px"/>
             <h3 >Continente: {country[0].continents} </h3>
              <h3  >Capital: {country[0].capital} </h3>
              <h3  >Subregion: {country[0].subregion} </h3>
              <h3  >Area: {country[0].area} km2 </h3>
              <h3  >Poblacion: {country[0].population} Habitantes</h3>

              
                 <div className={s.actividades}> 
                      <h4>Actividades:</h4>
              
                     {
                 
                    country[0].activities.length === 0?
                    <p> No hay actividades agregadas aún </p> :
                    country[0].activities.map(e => {
                      return (
                        <div key={e.id}>
                          <button className={s.actBtn} name={e.id} value={e.id} onClick={(e) => { handleDelete(e) }}>❌</button>
                          <p>{mayus(e.name)}</p>
                          <p>Dificultad: {e.difficulty} / 5</p>
                          <p>Duracion: {e.duration} minutos</p>
                          <p>Temporada: {e.season}</p>

                        </div> 
                      )
                     })
                  }

               </div>
              
              
                
            </div>: <p>Loading...</p>
          }
          
         </div>
    </div>
  )
}