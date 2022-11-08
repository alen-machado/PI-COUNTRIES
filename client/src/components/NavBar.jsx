import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import s from '../styles/NavBar.module.css'
import {TfiSearch} from 'react-icons/tfi'

import { getCountries, orderByLeter, getByName, orderByPopu, getContinents, filterContinents, filterActivities, getActivities } from '../actions/index'

export default function NavBar({setCurrentPage, setOrder, name, setName}){
  
    const dispatch = useDispatch()

    const actividades = useSelector((state) => state.activities)
    

    function handleFilterAct(e){
      e.preventDefault();
      if(e.target.value === "All"){
          return dispatch(getCountries())
      }
      dispatch(filterActivities(e.target.value))  
      setCurrentPage(1)
      setOrder(e.target.value)
  }
    
    function handleFilterCont(e){
      e.preventDefault();
      if(e.target.value === "All"){
          return dispatch(getCountries())
      }
      dispatch(filterContinents(e.target.value))  
      setCurrentPage(1)
      setOrder(e.target.value)
  }
  const continents = useSelector((state) => state.continents)

     useEffect(() => {
         dispatch(getCountries())  
         dispatch(getContinents())
         dispatch(getActivities())
       }, [dispatch] )


      function handleOrderLeter(e) {
        e.preventDefault()
        dispatch(orderByLeter(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
      }

      function handleInput(e) {
        e.preventDefault()
        setName(e.target.value)
           
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getByName(name))
        
        setName('') 
    }

    function handleOrderPopu(e) {
      e.preventDefault()
      dispatch(orderByPopu(e.target.value))
      setCurrentPage(1)
      setOrder(e.target.value)
    }

    

   
    return(
        <div className={s.conteiner}>

          <div className={s.header}>

            <div className={s.title}>
               <h1>El Mundo en tus manos</h1>
             </div>

        <div className={s.search}>
           <input type='text'
            value={name}
            placeholder={'Buscar por nombre...'}
            onChange={e => { handleInput(e)}}
            ></input>

            <button
            className={s.search_button}
            type='submit'
            onClick={e => {handleSubmit(e)}}
            ><TfiSearch/></button>
        </div>

            <div className={s.crear_button_box}>
            <Link to='/create'>

            <button className={s.crear_button}>Crear Actividad</button>
            </Link>
            </div>

        </div>

        

        <div className={s.filtros}>
          <div className={s.filtros_item}>
            <label>Ordenado Alfabetico:</label>
            <select onChange={e => {handleOrderLeter(e)}} > 
            <option value="Todos">Todos</option>
            <option value='ascendente'>A - Z</option>
            <option value='descendente'>Z - A</option>
            </select>
        </div>

        <div className={s.filtros_item}>
            <label>Ordenado por Poblacion:</label>
            <select onChange={e => {handleOrderPopu(e)}} > 
            <option value="Todos">Todos</option>
            <option value='ascendente'>Poblacion Ascendente</option>
            <option value='descendente'>Poblacion Descendente</option>
            </select>
        </div>

      

         <div className={s.filtros_item}>
            <label>Ordenado por su Continente:</label>

          <select onChange={e => { handleFilterCont(e)}}>
            <option value='All'>Todos</option>
            
          {

          continents?.map((t, i) => {
            return (<option value={t.continents} key={i}>{t.continents} </option>)  
          })

           }
              </select> 

            </div> 

            <div className={s.filtros_item}>
            <label>Ordenado por tipo de Actividad: </label>
            <select onChange={e => { handleFilterAct(e) }}>
            <option value='All'>Todos</option>
            {
            actividades.map((t, i) => 
            <option value={t} key={i}>{t}</option>)
          }
            </select>
        </div> 
        </div>

        


        </div>
        

        
    )
}