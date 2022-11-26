const PG = require('../../lib/postgres')

class Foods extends PG{
    allFoods(restorant) {
        return this.fetchAll(
            `
            select * from foods where restourant_id = $1
            `, [restorant]
        )
    }
    allFood() {
        return this.fetchAll(
            `
            select * from foods`
        )
    }
    
}


module.exports = new Foods()