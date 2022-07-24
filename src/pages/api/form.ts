interface User {
    name: string,
    age: string
}
const users: User[] = []

const FormApi = (req: any, res: any): void => {
    if(req.method === 'POST') post(req, res)
    if(req.method == 'GET') get(req, res)
    methodNotAllowed(req, res)
}

const post = (req: any, res: any): void => {
    const {name, age} = JSON.parse(req.body)
    const user: User = {name, age} 
    users.push(user)
    res.status(200).send()
}

const get = (req: any, res: any): void => res.status(200).json(users)

const methodNotAllowed = (req: any, res: any): void => res.status(405).send()

export default FormApi;