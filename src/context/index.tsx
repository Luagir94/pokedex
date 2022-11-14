import { createContext, useState, useEffect, useContext } from "react";
import { Pokemon } from "../types";
import axios from "axios";
type Pagination = { previous: string, next: string, count: number,current: string }
interface PokedexContextI {
    list: Pokemon[],
    selected: Pokemon | null,
    loading: boolean,
    url: string,
    pagination: Pagination,
    prevUrl? : string,
    setSelected?: (poke: Pokemon) => null | Pokemon,
    paginator?: (string: string) => void,
    setPagination?: (string: string) => string,
    setUrl?: (string: string) => string,
    setPrevUrl?: (string: string) => string,

}
const defaultState = {
    list: [],
    selected: null,
    loading: true,
    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
    pagination: { previous: '', next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20', count: 1154, current : 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20' },

};
type Props = {
    children: JSX.Element,
}

type UrlResults = {
    name: string,
    url: string
}
type PokeUrl = {
    count: number,
    next: string | null,
    previous: string | null,
    results: UrlResults
}

const PokedexContext = createContext<PokedexContextI>(defaultState)
const PokedexProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState<boolean>(defaultState.loading)
    const [list, setList] = useState<Pokemon[] | any[]>(defaultState.list)
    const [selected, setSelected] = useState<Pokemon | null>(defaultState.selected)
    const [pagination, setPagination] = useState<Pagination>(defaultState.pagination)
    const [url, setUrl] = useState<string>(defaultState.url)
    const [prevUrl, setPrevUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/?offset=-20&limit=20')
    useEffect(() => {
        const getPokes = async () => {
            try {
                // 👇️ const data: GetUsersResponse
                const { data, status } = await axios.get(
                    url,
                )


                setPagination({ previous: data.previous || '', next: data.next || '', count: data.count , current : url })

                Promise.all(data.results.map((url: UrlResults) =>
                    fetch(url.url).then(resp => resp.json()))).then((pokes: Pokemon[]) => setList(pokes))

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('error message: ', error.message);
                    return error.message;
                } else {
                    console.log('unexpected error: ', error);
                    return 'An unexpected error occurred';
                }
            }
        }
        getPokes()
        
    }, [url])
    useEffect(() => {
 const actualize = () =>{
    const params  = url.split('?')[1].split('&')[0].split('=')[1]
    const prev = prevUrl.split('?')[1].split('&')[0].split('=')[1] || '0'
    console.log(prevUrl,url);
    
    if (parseInt(prev) <= parseInt(params)) {
        setSelected(list[0])
    }else{
        setSelected(list[19])
    }
    
 }
 list.length && actualize()
    }, [list])
    const paginator = (page: 'next' | 'prev'): void => {
        if (page === 'next' && typeof page === 'string') {
            setUrl(pagination.next)
        } else if (page === 'prev' && typeof page === 'string') {
            setUrl(pagination.previous)
        }
    }
    return (<PokedexContext.Provider value={{ loading, selected, list, pagination, url,prevUrl, setPagination, setSelected, paginator, setUrl,setPrevUrl } as unknown as PokedexContextI}>{children}</PokedexContext.Provider>)
}

export { PokedexProvider }

export const usePokedex = () => useContext(PokedexContext)