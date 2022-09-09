import React from 'react'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from "react-redux"

import s from '../styles/Home.module.css'

import  Card  from "./Card"
import NavBar from './NavBar'
import Paginado from './Paginado'

import { getCountries, handleMenor } from '../actions/index'

export default function HomePage() {
  
 

  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.countries)
  
  

  useEffect(() => {
    dispatch(getCountries())  
  }, [dispatch] )

  //-------PAGINADO-------
  const [ currentPage, setCurrentPage ] = useState(1) 
  const [ countPerPage, setCountsPerPage ] = useState(10)

  const [order, setOrder] = useState("")
  const [name, setName] = useState("")

  const indexOfLastCount = currentPage * countPerPage
  const indexOfFirstCount = indexOfLastCount - countPerPage
  const currentCounts = allCountries.slice(indexOfFirstCount, indexOfLastCount)

  


  return (
    <div>
      
     <NavBar
        setCurrentPage={setCurrentPage} 
        setOrder={setOrder}
        name={name}
        setName={setName}
        />

      <Paginado 
      countPerPage={countPerPage}
      allCountries={allCountries.length}  
      setCurrentPage={setCurrentPage}
      />

      

      <div className={s.container2}>
      { 
          currentCounts.length ? currentCounts.map( e => {
            
            return (
              <div key={e.id} >
                
               
                 <Card  id={e.id} image={e.image ? e.image : "https://www.elsoldemexico.com.mx/doble-via/zcq7d4-perro.jpg/alternates/LANDSCAPE_768/perro.jpg"} name={e.name} continents={e.continents} population={e.population}  />
                
                 
              </div>
            ) 
          }
           
          ): <div className={s.loading} >Loading</div>
        }
      </div>

    </div>
  )
}