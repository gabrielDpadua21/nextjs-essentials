import { useRouter } from "next/router";

const Rotas = () => {
    const router = useRouter()

    const { query } = router;
    
    return (
        <>
            <h1>
                rotas / {query.id} / user / { query.user }
            </h1>
        </>
    )
}

export default Rotas;