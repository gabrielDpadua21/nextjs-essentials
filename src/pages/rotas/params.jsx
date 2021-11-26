import { useRouter } from "next/router";

const Params = () => {

    const router = useRouter();
    const { id, name } = router.query;

    return (
        <>
            <h1>
                Rota Params
            </h1>
            <h2>
                Id: {id}
            </h2>
            <h2>
                Nome: {name}
            </h2>
        </>
    )
}

export default Params;