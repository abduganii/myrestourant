const PG = require('../../lib/postgres')

class restourants extends PG{
    allrestourant() {
        return this.fetchAll(
            `
            select* from allrestourants`
        )
    }
    allrestourantBycategory(cotegory) {
        return this.fetchAll(
            `
            select * from allrestourants  where cotegory_id = $1 
           `,[cotegory]
        )
    }
    
}


module.exports = new restourants()