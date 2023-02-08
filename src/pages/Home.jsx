import { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import MovieList from "../components/MovieList"
import { getTopMovies } from "../redux/movies/moviesSlice"

const Home = () => {
    const { topMovies } = useSelector((state) => state.moviesSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopMovies())
    }, [])

    return (
        <View style={styles.container}>
            <MovieList list={topMovies}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10
    }
})
export default Home