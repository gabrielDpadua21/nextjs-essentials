import { useState } from 'react';

interface User {
    name: string,
    age: number
}

const Form = () => {

    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [users, setUsers] = useState([])

    const saveUser = async () => {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ name, age })
        })
        const response = await fetch('/api/form')
        const users = await response.json()
        setUsers(users)
    }

    const renderUsers = () => {
        return users.map((user: User, i: number) => {
            return <li key={i}>{user.name} - {user.age}</li>
        })
    }

    return (
        <>
            <h1>
                Integrando com API #02
            </h1>
            <input type="text" 
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <input type="number" 
                value={age} 
                onChange={e => setAge(+e.target.value)}
            />
            <button onClick={saveUser}>
                Send
            </button>
            <ul>
                {renderUsers()}
            </ul>
        </>
    )
}

export default Form;