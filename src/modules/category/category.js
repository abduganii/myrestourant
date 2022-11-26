const model = require('./model')

module.exports = async (req, res) => {
    res.send(await model.allcategory())
}