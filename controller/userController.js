
const getUser = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"name": "Ishwari", "age": 25}})
}

module.exports = {
    getUser
}