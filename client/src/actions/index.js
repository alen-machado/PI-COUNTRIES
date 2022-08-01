import axios from 'axios'

export function getCountries(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/countries')

        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })

    }
}

export function getByName(payload){
    return async function (dispatch){
        
            let json = await axios.get('http://localhost:3001/countries?name=' + payload)

            return dispatch({
                type: 'GET_BY_NAME',
                payload: json.data
            })

    }
}

export function getDetail(id){
    return async function (dispatch){
        
            let json = await axios.get('http://localhost:3001/countries/' + id)
             
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })

    }
}

export function getContinents(){
    return async function(dispatch){

        const json = await axios.get('http://localhost:3001/continents')

        return dispatch({
            type: 'GET_CONTINENTS',
            payload: json.data
        })
    }
}

export function filterContinents(payload){
    return {
        type: 'FILTER_CONTINENTS',
        payload
    }
}


export function getActivities(){
    return async function(dispatch){

        const json = await axios.get('http://localhost:3001/activities')

        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: json.data
        })
    }
}

export function filterActivities(payload){
    return {
        type: 'FILTER_ACTIVITIES',
        payload
    }
}

export function postActivity(payload){
    return async function(dispatch){
        let json = await axios.post('http://localhost:3001/activities', payload)

        return json

    }
}

export function deleteAct(id){
    return async function (dispatch){
        
            let json = await axios.delete('http://localhost:3001/activities/' + id)
             
            return dispatch({
                type: 'DELETE_ACTIVITY',
                payload: json.data
            })

    }
}



// -------ORDENAMIENTOS-------

export function orderByLeter(payload){
   
        return {
            type: 'ORDER_BY_LETER',
            payload
        }

    }

    export function orderByPopu(payload){
   
        return {
            type: 'ORDER_BY_POPULATION',
            payload
        }

    }    

    
    
