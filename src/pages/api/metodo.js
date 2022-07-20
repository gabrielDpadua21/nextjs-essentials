export default api = (req, res) => {
    res.status(200).json({
        metodo: req.method
    });
}