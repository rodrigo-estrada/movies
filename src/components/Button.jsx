import { TouchableOpacity, Text, Alert, StyleSheet } from "react-native"

const Button = ({title,counter,handlerPress}) => {

    return <TouchableOpacity
        style={styles.button}
        onPress={handlerPress}>
        <Text style={styles.text}>{title} {counter}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 130,
        backgroundColor: 'black',
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        color:"white"
    }
})
export default Button