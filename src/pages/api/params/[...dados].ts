
const params = (req: any, res: any) => {
    res.status(200).json({
        params: req.query
    })
}

export default params