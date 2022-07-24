import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Question = () => {
    const router = useRouter()
    const { id } = router.query
    const [question, setQuestion] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/api/question/${id}`)
        .then(response => response.json())
        .then(setQuestion)
    }, [id])

    const renderResponses = () => {
        if(!question) return false;
        return question.responses.map((item, i) => {
            return <li key={i}>{item}</li>
        })
    }
    
    return (
        <>
            <h1>
                {question?.id} - Question
            </h1>
            <div>
                <span>{question?.question}</span>
                <ul>
                    {renderResponses()}
                </ul>
            </div>
        </>
    )
}

export default Question;