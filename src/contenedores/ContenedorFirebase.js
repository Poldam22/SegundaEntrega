import admin from "firebase-admin"
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})
console.log('Base de datos conectada');

const db = admin.firestore();

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    async listar(id) {
        try {
            const doc = this.coleccion.doc(`${id}`)
            const item = await doc.get()
            const response  = item.data()
            return response

        } catch (error) {
            console.log(error);
        }
    }

    async listarAll() {
        try {
            const elementos = await this.coleccion.get()
            let docs = elementos.docs
            const response = docs.map((doc)=>({
                id: doc.id ,
                title: doc.data().title,
                price: doc.data().price,
            }))
            return response

        } catch (error) {
            console.log(error);
        }
    }

    async guardar(nuevoElem) {
        try {
            // let id = 1
            let doc = this.coleccion.doc()
            // let doc = this.coleccion.doc(`${id}`)
            await doc.create(nuevoElem)
        } catch (error) {
            console.log(error);
        }
    }

    async actualizar(id, nuevoElem) {
        try {
            const doc = this.coleccion.doc(`${id}`);
            const item = await doc.update(nuevoElem)
            return item
            
        } catch (error) {
            console.log(error);
        }
    }

    async borrar(id) {
        try {
            const doc = this.coleccion.doc(`${id}`)
            let item = await doc.delete()
            return item
        } catch (error) {
            console.log(error);
        }
    }

    async borrarAll() {

    }

    async desconectar() {
    }
}


export default ContenedorFirebase