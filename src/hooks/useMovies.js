import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecomendedMovies, getTopMovies } from "../redux/movies/moviesSlice"


const useMovies = () => {
    const { topMovies, recommendedMovies, filterMovies } = useSelector((state) => state.moviesSlice)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getTopMovies())
        dispatch(getRecomendedMovies())
    }, [])

    return { topMovies, recommendedMovies,filterMovies }
}

export default useMovies