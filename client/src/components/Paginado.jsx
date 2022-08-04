import React from 'react'
import s from '../styles/Paginado.module.css'

export default function Paginado ({countPerPage, allCountries, setCurrentPage}) {
  const pageNumbers = []
  
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
   } 
   
  for( let i = 1; i <= Math.ceil(allCountries/countPerPage); i++){ //redondea para arriba la cantidad de paises dividido los paises que quiero por pagina
    pageNumbers.push(i) // agregamos los 10 paises al estado que estamos usando
 } 

  return (
    <nav className={s.nav}>
    <ul className={s.paginado}>
        { 
        pageNumbers && pageNumbers.map(number => {
           return (
            <li className={s.number} key={number}>
                <p className={s.current} onClick={() => paginado(number)} >{number}</p>
            </li>
              
                 )
            
        })
        }
    </ul>
   </nav>
  )
}