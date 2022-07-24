import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
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
        return users.map((user, i) => {
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