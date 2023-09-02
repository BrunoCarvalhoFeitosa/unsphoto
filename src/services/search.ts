import axios from "axios"

const ITEMS_PER_PAGE=50

export const searchService = async (term: string) => {
    return axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/search/photos?query=${term}&page=1&per_page=${ITEMS_PER_PAGE}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    ).then((res) => {
       const data = res.data

       return { data }
    })
}