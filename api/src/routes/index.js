const { Router } = require('express');


//const countries = require('./countries.js')
//const activities = require('./activity.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {GetCountries} = require('./controllers/getCountries');
const {getIdCountry} = require('./controllers/getIdCountry')
const {postActivity} = require('./controllers/postActivity')
const {GetContinents} = require('./controllers/GetContinents')
const {GetActivities} = require('./controllers/GetActivities')
const {deleteAct} = require('./controllers/deleteAct')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.use('/countries', countries);
//router.use('/activities', activities);
router.get('/countries', GetCountries)
router.get('/countries/:id', getIdCountry) 
router.post('/activities', postActivity)
router.get('/continents', GetContinents)
router.get('/activities', GetActivities)
router.delete('/activities/:id', deleteAct)




module.exports = router;
