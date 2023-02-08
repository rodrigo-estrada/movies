import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import Rating from "./Rating"

const Movie = ({ info: { id, poster_path, title , vote_average} }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+poster_path }}
            >
            </Image>
            <Text numberOfLines={1} style={styles.text}>{title}</Text>
            <Rating rating={vote_average}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
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