import { useEffect } from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MovieContent from "../components/MovieContent"
import useMovies from "../hooks/useMovies"


const MovieDetails = ({ route }) => {
    const { detailMovie, getSimilarM } = useMovies()

    useEffect(() => {
        if (route && route.params && route.params.movie_id)
            getSimilarM(route.params.movie_id)
    }, [route.params.movie_id])

    return (<SafeAreaView>
        {detailMovie?.id && <MovieContent info={detailMovie} />}
    </SafeAreaView>)
}
export default MovieDetails