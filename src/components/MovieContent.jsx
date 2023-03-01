import { ImageBackground, ScrollView, StyleSheet, View, Dimensions, Text, TouchableOpacity } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native"
import Rating from "./Rating"
import Genres from "./Genres"
import MovieList from "./MovieList"
import useMovies from "../hooks/useMovies"
const height = Dimensions.get('screen').height

const MovieContent = ({ info: { poster_path, title, overview, vote_average, release_date, genres } }) => {
    const navigation = useNavigation()

    const { similarMovies } = useMovies()
    const handleBack = () => {
        navigation.goBack()
    }

    return (<View style={styles.marginHorizontal}>
        <ScrollView>
            <ImageBackground
                imageStyle={styles.imageStyle}
                style={styles.image}
                source={{ uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + poster_path }}
                resizeMode={'cover'}
            >
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <FontAwesome name='chevron-left' size={24} color='white'></FontAwesome>
                </TouchableOpacity>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Rating rating={vote_average} />
                    <Genres genres={genres} />
                </View>
            </ImageBackground>
            <Text style={styles.subtitle}>{overview}</Text>
            <MovieList list={similarMovies} />
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    image: {
        justifyContent: 'flex-end',
        marginBottom: 20,
        height: height / 2
    },
    imageStyle: {
        opacity: 0.3
    },
    backButton: {
        padding: 10,
        position: 'absolute',
        marginTop: 20,
        zIndex: 2,
        top: 0
    },
    descriptionContainer: {
        margin: 10
    },
    title: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 24,
        marginVertical: 6
    },
    subtitle: {
        fontWeight: "500",
        color: 'white',
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 10
    }
})
export default MovieContent