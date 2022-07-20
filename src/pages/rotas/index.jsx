import Link from 'next/link';
import { useRouter } from 'next/router';


const Rotas = () => {

    const router = useRouter();

    const navigation = (url) => {
        router.push(url);
    }

    const navigationParams = (url, id, name) => {
        router.push({
            pathname: url,
            query: {
                id, 
                name
            }
        })
    }

    return (
        <>
            <h1>
                Rotas
            </h1>
            <ul>
                <li>
                    <Link passHref href="/rotas/params?id=1&name=frajola">
                        <button>
                            Params
                        </button>
                    </Link>
                </li>
                <li>
                    <Link passHref href="/rotas/1/search">
                        <button>
                            Search
                        </button>
                    </Link>
                </li>
                <li>
                    <Link passHref href="/rotas/1/frajola">
                        <button>
                            User
                        </button>
                    </Link>
                </li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: '10px'}}>
                <button onClick={() => navigationParams('rotas/params', 2, 'frajola')} style={{ marginBottom: '10px' }}>
                    Params
                </button>
                <button onClick={() => navigation("/rotas/1/search")} style={{ marginBottom: '10px' }}>
                    Search
                </button>
                <button onClick={() => navigation("/rotas/1/frajola")} style={{ marginBottom: '10px' }}>
                    User
                </button>
            </div>
        </>
    )
}

export default Rotas;