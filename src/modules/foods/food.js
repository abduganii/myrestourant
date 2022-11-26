const model = require('./model')

module.exports = async (req, res) => {
    const { restorant } = req.query
    if (restorant == "undefined") {
        return 
    } else {
        res.send(await model.allFoods(restorant))
    }
}