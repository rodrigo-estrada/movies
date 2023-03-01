import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { clearDetails, getDetailMovie, getSimilarMovies } from "../redux/movies/moviesSlice"
import Rating from "./Rating"

const Movie = ({ info: { id, poster_path, title , vote_average} }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const handlePress = () => {
        dispatch(clearDetails())
        dispatch(getDetailMovie(id))
        navigation.navigate('detail',{movie_id:id})
    }
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+poster_path }}
            >
            </Image>
            <Text numberOfLines={1} style={styles.text}>{title}</Text>
            <Rating rating={vote_average}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        marginHorizontal:10

    },
    image: {
        width: 150,
        height: 250,
        backgroundColor: "black"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white"
    }

})
export default Movie