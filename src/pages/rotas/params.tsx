import { useRouter } from "next/router";
import Link from 'next/link';

const Params = () => {

    const router = useRouter();
    const { id, name } = router.query;

    return (
        <>
            <h1>
                Rota teste 2
            </h1>
            <h2>
                Id: {id}
            </h2>
            <h2>
                Nome: {name}
            </h2>
            <Link passHref href="/rotas">
                <button>
                    voltar
                </button>
            </Link>
        </>
    )
}

export default Params;