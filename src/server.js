import express from 'express'
const { Router } = express

import {
    productosDao as productosApi,
    carritosDao as carritosApi
} from './daos/index.js'

//------------------------------------------------------------------------
// instancio servidor

const app = express()

//--------------------------------------------
// permisos de administrador

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router()

productosRouter.get('/', async (req, res) => {
   const productsAll = productosApi.listarAll()
   productsAll.then(a=>res.json(a))
})

productosRouter.get('/:id', async (req, res) => {
    const {id} = req.params
    const producto = productosApi.listar(id)
    producto.then(a=>res.json(a))
})

productosRouter.post('/', soloAdmins, async (req, res) => {
    const elem = req.body 
    const guardarProducto = productosApi.guardar(elem)
    guardarProducto.then(a => res.send(a))
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    const {id} = req.params
    const idnum = parseInt(id)
    const elem = req.body
    const actualizarProduct = productosApi.actualizar(idnum, elem)
    actualizarProduct.then(a=>res.send(a))
})

productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    const {id} = req.params 
    const productoBorrar = productosApi.borrar(id)
    productoBorrar.then(a=>res.send(a))
})

//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router()

carritosRouter.get('/', async (req, res) => {
    const carritosAll = carritosApi.listarAll()
   carritosAll.then(a=>res.json(a))
})

carritosRouter.post('/', async (req, res) => {
    const elem = req.body 
    const guardarCarrito = carritosApi.guardar(elem)
    guardarCarrito.then(a => res.send(a))
})

carritosRouter.delete('/:id', async (req, res) => {
    const {id} = req.params 
    const carritoBorrar = carritosApi.borrar(id)
    carritoBorrar.then(a=>res.send(a))
})

//--------------------------------------------------
// router de productos en carrito

carritosRouter.get('/:id/productos', async (req, res) => {
    const {id} = req.params
    const carrito = carritosApi.listar(id)
    carrito.then(a=>res.json(a))
})

carritosRouter.post('/:id/productos', async (req, res) => {
    const {id} = req.params
    const elem = req.body
    const actualizacionCarrito = carritosApi.actualizar(elem, id) 
    actualizacionCarrito.then(a=>res.send(a))
})

carritosRouter.delete('/:id/productos/:idProd', async (req, res) => {
    const {id} = req.params
    const {idprod} = req.params
    const borrarProd = carritosApi.borrar(id, idprod)
    borrarProd.then(a=> res.send(a))
})

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

export default app