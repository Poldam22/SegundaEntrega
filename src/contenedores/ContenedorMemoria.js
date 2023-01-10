class ContenedorMemoria {

    constructor() {
        this.elementos = []
    }

    listar(id) {
        const posicion = this.elementos.findIndex(e =>e.id == id )

        if(posicion == -1){
           return ({error: 'producto no encontrado'})
       }else{
           return (this.elementos[posicion]) 
       }
    }

    listarAll() {
        return this.elementos
    }

    guardar(elem) {
        let element = this.elementos
        let id = 0
        this.elementos.length == 0 ? (id=1) : (id=element[products.length-1].id + 1);
        const nuevoProducto = {...elem, id}
        this.elementos.push(nuevoProducto)
        return('producto guardado')
    }

    actualizar(id, elem) {
        const posicion = this.elementos.findIndex(e =>e.id == id )
        if(posicion >= 0){
        this.elementos[posicion] = elem
        return('producto actualizado')
        }else{
            return({error:'producto no encontrado'})
        }
    }

    borrar(id) {
        const posicion = this.elementos.findIndex(e =>e.id == id )
        if(posicion == -1){
            return({error: 'producto no encontrado'})
        }else{

          const productoEliminado = this.elementos.splice(posicion, 1)
          return({producto:productoEliminado})
        }
    }

    borrarAll() {
        this.elementos = [];
    }
}

export default ContenedorMemoria
