const express = require('express')
const router = express.Router()
const createUser = require('../functions/createUser')
const getUsers = require('../functions/getUsers')

const verifySecretFunction = require('../functions/verifySecret')
const helloFunction = require('../functions/hello')
const envCheckFunction = require('../functions/envCheck')

router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy'
  })
})

router.get('/functions/hello', helloFunction)
router.get('/env-check', envCheckFunction)
router.get('/functions/verify-secret', verifySecretFunction)
router.get('/functions/get-users', getUsers)

router.post('/functions/echo', (req, res) => {
  res.json({
    success: true,
    received: req.body
  })
})

router.post('/functions/create-user', createUser)

module.exports = router
