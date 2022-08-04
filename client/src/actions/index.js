import axios from 'axios'

export function getCountries(){
    return async function(dispatch){
        let json = await axios.get('/countries')

        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })

    }
}

export function getByName(payload){
    return async function (dispatch){
        
            let json = await axios.get('/countries?name=' + payload)

            return dispatch({
                type: 'GET_BY_NAME',
                payload: json.data
            })

    }
}

export function getDetail(id){
    return async function (dispatch){
        
            let json = await axios.get('/countries/' + id)
             
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })

    }
}

export function getContinents(){
    return async function(dispatch){

        const json = await axios.get('/continents')

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

        const json = await axios.get('/activities')

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
        let json = await axios.post('/activities', payload)

        return json

    }
}

export function deleteAct(id){
    return async function (dispatch){
        
            let json = await axios.delete('/activities/' + id)
             
            return dispatch({
                type: 'DELETE_ACTIVITY',
                payload: json.data
            })

    }
}


export function deleteCount(id){
    return async function (dispatch){
        
            let json = await axios.delete('/countries/' + id)
             
            return dispatch({
                type: 'DELETE_COUNTRY',
                payload: json.data
            })

    }
}

export function cleanCountryId(){
    return {
        type: 'CLEAN_COUNTRY_ID'
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

    
    
