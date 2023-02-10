import { FlatList, StyleSheet, Text, View } from "react-native"
import Movie from "./Movie"
const MovieList = ({ list , title}) => {

    const renderItem = ({ item }) => <Movie info={item} />
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList data={list}
                renderItem={renderItem}
                horizontal={true}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
    title:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10
    }
})
export default MovieList