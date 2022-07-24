
const param = (req, res) => {
    res.status(200).json({
        params: req.query
    })
}

export default param