import { useRouter } from "next/router";
import Link from "next/link";

const Rotas = () => {
    const router = useRouter()
    const { name, id } = router.query

    return (
        <>
          <h1>
            rotas / { id } / name / { name }
          </h1>
          <Link passHref href='/rotas'>
            voltar
          </Link>
        </>
    )

}

export default Rotas;