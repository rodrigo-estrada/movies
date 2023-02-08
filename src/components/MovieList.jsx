import { FlatList, View } from "react-native"
import Movie from "./Movie"
const MovieList = ({ list }) => {

    const renderItem = ({ item }) => <Movie info={item} />
    return (
        <View style={{}}>
            <FlatList data={list}
                renderItem={renderItem}
                horizontal={true}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default MovieList