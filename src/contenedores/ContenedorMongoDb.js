import mongoose from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
       try {
        const traer = await this.coleccion.find(id)
        return traer
       } catch (error) {
        console.log(error);
       }
    }

    async listarAll() {
        try {
            const read = await this.coleccion.find({});
            return read
        } catch (error) {
            console.log(error);
        }
    }

    async guardar(nuevoElem) {
       
        try {
            const elemSave = new this.coleccion(nuevoElem);
            const savedElem = await elemSave.save();
            return savedElem;
        } catch (error) {
            console.log(error);
        }
    }

    async actualizar(nuevoElem) {
        try {
            const updateElem = await this.coleccion.updateOne(nuevoElem);
            return updateElem
            
        } catch (error) {
            console.log(error);
        }
    }

    async borrar(id) {
        try {
            const deleteElem = await this.coleccion.deleteOne(id);
            return deleteElem;
            
        } catch (error) {
            console.log(error);
        }
    }

    async borrarAll() {
        try {
            const deleteAll = await this.coleccion.deleteAll();
            return deleteAll;
            
        } catch (error) {
            console.log(error);
        }
    }
}


export default ContenedorMongoDb