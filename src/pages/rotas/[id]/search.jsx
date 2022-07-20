import { useRouter } from "next/router";
import Link from 'next/link';

const Rotas = () => {
    const router = useRouter()

    const { query } = router;
    
    return (
        <>
            <h1>
                rotas / {query.id} / search
            </h1>
            <Link passHref="/rotas">
                <button>
                    voltar
                </button>
            </Link>
        </>
    )
}

export default Rotas;