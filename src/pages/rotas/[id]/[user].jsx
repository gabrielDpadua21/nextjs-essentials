import { useRouter } from "next/router";
import Link from 'next/link';

const Rotas = () => {
    const router = useRouter()

    const { query } = router;
    
    return (
        <>
            <h1>
                rotas / {query.id} / user / { query.user }
            </h1>
            <Link href="/rotas">
                <button>
                    voltar
                </button>
            </Link>
        </>
    )
}

export default Rotas;