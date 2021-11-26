import { useRouter } from "next/router";

const Rotas = () => {
    const router = useRouter()

    const { query } = router;
    
    return (
        <>
            <h1>
                rotas / {query.id} / search
            </h1>
        </>
    )
}

export default Rotas;