const { Pool } = require('pg')
const poolConnection = new Pool({
    connectionString: 'postgres://postgres:123456abdu@localhost:5432/restourants',
    // connectionStringEl:'postgres://mhihcyfw:Kn6elCoBTYo8Cy_3T5J_cnRbIOOQrR2k@tyke.db.elephantsql.com/mhihcyfw'
})

class PG{
    constructor() {
        this.pool = poolConnection
    }

    async fetchAll(SQL, ...params) {
        const client = await this.pool.connect()
        try {
            const { rows } = await client.query(SQL, ...params)
            return rows
        } finally {
            client.release()
        }
    }
    async fetch(SQL, ...params) {
        const client = await this.pool.connect()
        try {
            const { rows:[row] } = await client.query(SQL, ...params)
            return row
        } finally {
            client.release()
        }
    }
}

module.exports = PG