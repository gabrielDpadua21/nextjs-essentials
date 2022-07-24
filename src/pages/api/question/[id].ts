const question = (req: any, res: any): void => {
    if(req.method !== 'GET') res.status(405).send();
    const { id } = req.query;
    res.status(200).json({
        id, 
        question: 'What your favority color?',
        responses: [
            'white', 'black', 'blue', 'gray'
        ]
    })
}

export default question;