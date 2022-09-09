import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import s from '../styles/CreateAct.module.css'
import { getCountries, postActivity } from '../actions/index'


function validate(input){
    let errors = {}
    if(!input.name){
      errors.name = 'Se requiere un Nombre'
    } else if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.name)) {
      errors.name = "Nombre invalido"
    } 
    if(!input.difficulty) {
      errors.difficulty = 'Se requiere una difficulty'
    }
     if(!input.duration) {
      errors.duration = 'Se requiere una duracion expresada en minutos'
    }
     if(!input.season) {
      errors.season = 'Se requiere una temporada'
    }
    if(!input.country[0]){
      errors.countries = "Country is required"
  }
  if(repetidos(input.country)){
      errors.countries = "You cannot enter duplicate countries"
  }
    return errors
  }
  function repetidos(array){
    return new Set(array).size!==array.length
}

export default function CreateActivity() {

  const dispatch = useDispatch()

  
  const [errors, setErrors] = useState({})

  useEffect(()=>{
    dispatch(getCountries())
}, [dispatch])

const countries = useSelector((state) => state.countries)
  

   const [input, setInput] = useState({
     name:'',
     difficulty: '',
     duration: '',
     season: '',
     country: []
    })

    function handleChange(e) {
     setInput({
       ...input,
       [e.target.name] : e.target.value
     })
     setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
     }))
    }

    function handleSelect(e){
      setInput({
        ...input,
        country:[...input.country, e.target.value]
      })
     }

    function handleSubmit(e){
      e.preventDefault()
      if(!errors){
        dispatch(postActivity(input))
        alert('Actividad Creada')
      } else {
        alert('primero debes llenar todo el formulario')
      }
      
      
      setInput({
        name:'',
        difficulty: '',
        duration: '',
        season: '',
        country: []
      })
      
     }

     const removeCountry = (e) => {
      e.preventDefault();
      setInput({
        ...input,
        country: input.country.filter(
          (c) => c !== e.target.name
        ),
      });}
 
   
  return (
    <div>
      <Link to='/home'>
        <button>Volver al Home!</button>
      </Link>

      <h1 className={s.title}>Vamos a crear nuestra actividad!</h1>
        <div className={s.otroDiv}>
          
          <form  className={s.conteiner} onSubmit={e => handleSubmit(e)}>

      <div>
      
      <input  name="name" value={input.name} autoComplete="off" placeholder="Nombre de la Actividad..." onChange={e => {handleChange(e)}}/>
      {errors.name && (
        <p className='error' >{errors.name}</p>
      )}
      </div>

      <div>
      
          <select className={s.select} name="difficulty" value={input.difficulty} onChange={e => {handleChange(e)}}> 
          <option hidden>Dificultad del 1 al 5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
     </div>

     <div>
        
         <input  type='number' value={input.duration} placeholder='Duracion en minutos' name='duration' onChange={e => {handleChange(e)}}></input>
         {errors.duration && (
        <p className='error' >{errors.duration}</p>
      )}
        </div>

      <div>
         
          <select  className={s.select} name="season" value={input.season} onChange={e => {handleChange(e)}}>
            
          <option hidden  >Temporadas</option>
            <option value="Winter">Invierno</option>
            <option value="Spring">Primavera</option>
            <option value="Summer">Verano</option>
            <option value="Autumn">Otoño</option>
        </select>
      </div>

      <div>
            
            <select  className={s.select} onChange={e => {handleSelect(e)}}>
               <option hidden>Paises</option>     
                {
                    countries?.map(c =>{
                      
                        return(
                        <option key={c.id} name={c.name} value={c.id} >{c.name}</option>
                        )
                    }
                    )
                }
            </select>
           
        
        </div>
        <div>
            <ul >
            {
                input.country?.map((el) => {
            
                    let name = countries?.map((e) =>  e.id === el? e.name : null  )
                   
                    return ( 
                    <div key={el} >
                        <span  className="lista">{name}</span>
                        <button  name={el}className="closeButton" onClick={(e) => { removeCountry(e) }}>❌</button> 
                    </div>
                )
    
                })
            }
            </ul>
        </div>

        <button type='submit' onClick={e => handleSubmit(e)} >Crear actividad</button>

      </form>
        </div>
      
 
      

    </div>
  )
}