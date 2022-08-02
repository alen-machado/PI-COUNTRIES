const { Router } = require('express');


//const countries = require('./countries.js')
//const activities = require('./activity.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getCountries} = require('./controllers/getCountries');
const {getIdCountry} = require('./controllers/getIdCountry')
const {postActivity} = require('./controllers/postActivity')
const {getContinents} = require('./controllers/getContinents')
const {getActivities} = require('./controllers/getActivities')
const {deleteAct} = require('./controllers/deleteAct')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//router.use('/countries', countries);
//router.use('/activities', activities);
router.get('/countries', getCountries)
router.get('/countries/:id', getIdCountry) 
router.post('/activities', postActivity)
router.get('/continents', getContinents)
router.get('/activities', getActivities)
router.delete('/activities/:id', deleteAct)




module.exports = router;
