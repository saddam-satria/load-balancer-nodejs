const {Router} = require('express')
const helloWorld = require('../controllers/API.js')


const router = Router()


router.route('/hello').get(helloWorld)


module.exports = router