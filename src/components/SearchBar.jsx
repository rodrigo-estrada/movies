import { useState } from "react"
import { Alert, StyleSheet, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import useMovies from "../hooks/useMovies"
import { clearFilterResults, getFilterMovies } from "../redux/movies/moviesSlice"

const SearchBar = () => {

    const { filterMovies } = useMovies()
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')
    const onChangeText = (text) => {
        setSearchText(text)
        if (filterMovies.length > 0) {
            dispatch(clearFilterResults())
        }
    }

    const onSearch = () => {
        dispatch(getFilterMovies({ query: searchText }))
    }
    return (<View style={styles.container}>
        <TextInput
            placeholder="Search.."
            maxLength={40}
            value={searchText}
            style={styles.textInput}
            onChangeText={onChangeText}
            onSubmitEditing={onSearch}
            returnKeyType='search'
        />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 12,
        height: 40,
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1
    }
})
export default SearchBar