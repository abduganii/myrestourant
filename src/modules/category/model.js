const PG = require('../../lib/postgres')

class cotegory extends PG{
    allcategory() {
        return this.fetchAll(
            `
            select * from cotegory`
        )
    }   
}


module.exports = new cotegory()