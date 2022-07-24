const users = [];

const FormApi = (req, res) => {
    if(req.method === 'POST') post(req, res)
    if(req.method == 'GET') get(req, res)
    methodNotAllowed()
}

const post = (req, res) => {
    const user = JSON.parse(req.body)
    users.push(user)
    res.status(200).send()
}

const get = (req, res) => res.status(200).json(users)

const methodNotAllowed = (req, res) => res.status(405).send()

export default FormApi;