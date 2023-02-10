import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecomendedMovies, getSimilarMovies, getTopMovies } from "../redux/movies/moviesSlice"


const useMovies = () => {
    const { topMovies, recommendedMovies, filterMovies,detailMovie ,similarMovies} = useSelector((state) => state.moviesSlice)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getTopMovies())
        dispatch(getRecomendedMovies())
    }, [])

    const getSimilarM = (movie_id) =>{
        dispatch(getSimilarMovies(movie_id))
    }

    return { topMovies, recommendedMovies,filterMovies,detailMovie,similarMovies,getSimilarM }
}

export default useMovies