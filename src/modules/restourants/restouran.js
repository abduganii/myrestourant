const model = require('./model')
const nodeMailer = require('../../mail/nodemaile')

module.exports = {
    
    GET: async (req, res) => {
        const { cotegory } = req.query 
    if (cotegory != "undefined") {
        res.send(await model.allrestourantBycategory(cotegory))
    } else {
        res.send(
            await model.allrestourant(),
        )
    }
    },
    POST: (req, res) => {
        const {name,address,email} =  req.body
        console.log(name, address, email)
        nodeMailer(email)
        res.redirect('http://localhost:3000/')
    }
}