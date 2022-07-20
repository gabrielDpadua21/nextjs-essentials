const api = (req, res) => {
    res.status(200).json({
        metodo: req.method
    });
}

export default api;