import knex from 'knex'

class ContenedorSQL {

    constructor(config, tabla) {
        this.knex = knex(config)
        this.tabla = tabla
    }

    async listar(id) {
        const listar =  await this.knex(this.tabla).select('*')
        .where('id', '=', id)
        return listar
    }

    async listarAll(criterio = {}) {
        const products =  await this.knex(this.tabla).select('*');
        return products
    }

    async guardar(elem) {
        await this.knex(this.tabla).insert(elem);
    }

    async actualizar(id, elem) {
        await this.knex(this.tabla).select('*')
        .where('id', id)
        .update(elem)
        return ('Producto actualizado')
    }

    async borrar(id) {
        await this.knex(this.tabla).select('*')
        .where('id', id)
        .del()
        return ('Producto eliminado')
    }

    async borrarAll(criterio = {}) {
        await this.knex(this.tabla).del()
        return ('Mensajes borrados')
    }
}

export default ContenedorSQL