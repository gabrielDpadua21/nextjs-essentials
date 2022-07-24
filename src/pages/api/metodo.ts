const api = (req: any, res: any): void => {
    res.status(200).json({
        metodo: req.method
    });
}

export default api;