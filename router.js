const Express = require('express')
const UserController = require("./src/controllers/UserController.js");

const router = Express()

router.get('/registrar',UserController.index)

router.post('/registrar', UserController.store)

//router.put('/registrar/:car_id',UserController.update );
//router.delete('/car/:car_id',CarrinhoController.delete);

module.exports = router;
