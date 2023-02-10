import { StyleSheet, Text, View } from "react-native"

const Genres = ({ genres = [] }) => {

    const renderGenres = () => {
        return genres.map((g, index) => {
            return <View key={index}
                style={styles.genreContainer}>
                <Text style={styles.text}>
                    {g.name}
                </Text>
            </View>
        })
    }
    return (<View style={styles.container}>
        {renderGenres()}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10
    },
    genreContainer: {
        backgroundColor: '#673dff',
        padding: 4,
        borderRadius: 8,
        marginRight: 8
    },
    text: {
        fontWeight: '600',
        color: 'white',
        fontSize: 16,
        marginVertical: 6
    }
})
export default Genres