const initialState = { 
    countries: [],
    allCountries: [],
    detail: [],
    continents: [],
    activities: [],
    countryById: {}
}

export default function rootReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'GET_COUNTRIES':
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }

        case 'GET_BY_NAME':
            return{
                    ...state,
                    countries: action.payload
                 }  

        case 'GET_DETAIL':
            return{
                    ...state,
                    detail: action.payload
                }     
        case 'GET_CONTINENTS':
            return{
                ...state,
                continents: action.payload
            }   
        case 'FILTER_CONTINENTS':
        const copy = state.allCountries;
        const result = action.payload === 'All' ? copy : copy.filter((e) => e.continents === action.payload);
            return {
                ...state, 
                countries: result
            }

        case 'GET_ACTIVITIES':
            return{
                ...state,
                activities: action.payload
            } 
        
              

        case 'FILTER_ACTIVITIES':
            const copy2 = state.allCountries;
             
            const result2 = action.payload === 'All' ? copy2 : copy2.filter(e => {
                const activities = e.activities.filter(a => {
                    return a.name === action.payload
                })
                return activities.length? activities : false
            })
           
            return {
               ...state, 
                countries: result2
            }
            
         //----------ORDENAMIENTOS---------
            case 'ORDER_BY_LETER':
                 let sortName = action.payload === 'ascendente' ? 
                 state.countries.sort(function (a, b){ //compara 2 valores,, en este caso el name
                     if (a.name > b.name){return 1}
                     if (b.name > a.name){return -1}
                     return 0; //si son iguales los deja como esta
                 }) :
                 state.countries.sort(function(a, b){
                     if (a.name > b.name){return -1}
                     if (b.name > a.name){return 1}
                     return 0
                 })
                 
                return{
                    ...state,
                    countries: action.payload === 'Todos' ? state.allCountries : sortName        
                }     
            case 'ORDER_BY_POPULATION':
                let sortPopulation = action.payload === 'ascendente' ?
                state.countries.flat(2).sort((a,b) => {
                    if(a.population > b.population) return   1
                    if(a.population < b.population) return  -1
                    return 0
                }) :
                state.countries.flat(2).sort((a,b) => {
                    if(a.population > b.population) return -1
                    if(a.population < b.population) return  1
                    return 0
                })

            
                return {
                    ...state,
                    countries: action.payload === 'Todos' ? state.allCountries : sortPopulation
                }
            case 'POST_ACTIVITY':
                return{
                    ...state
                }            
            case 'DELETE_ACTIVITY': 
                return{
                    ...state,
                    activities: state.activities.filter( e=> e.id !== action.payload )
                }
            
            case 'DELETE_COUNTRY': 
                return{
                    ...state,
                    activities: state.activities.filter( e=> e.id !== action.payload )
                }

            case 'CLEAN_COUNTRY_ID':
                return{
                    ...state,
                    detail: []
                }    
            default:
          return { ...state}
    }
}