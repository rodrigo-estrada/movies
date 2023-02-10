import { ScrollView, StyleSheet, View, Text } from "react-native"
import MovieList from "../components/MovieList"
import SearchBar from "../components/SearchBar"
import useMovies from "../hooks/useMovies"

const Home = () => {

    const { topMovies, recommendedMovies, filterMovies } = useMovies()

    return (
        <View style={styles.container}>
            <SearchBar />
            <ScrollView>
                {filterMovies.length > 0 ?
                    <MovieList list={filterMovies} title={'Results'} />

                    : <>
                        <MovieList list={topMovies} title={'Top Movies'} />
                        <MovieList list={recommendedMovies} title={'Recommended Movies'} />
                    </>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20
    }
})
export default Home