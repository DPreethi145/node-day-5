const getDetails = (req, res) =>{
    res.send ({
        name:"preethi",
        age:22,
        designation:"developer"
    })
}

module.exports.getDetails = getDetails;