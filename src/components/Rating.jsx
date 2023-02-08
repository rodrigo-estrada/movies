import FontAwesome from '@expo/vector-icons/FontAwesome'
import { StyleSheet, View } from 'react-native'

const Rating = ({rating}) => {

    const starCounter = () =>{
        const starLevel = rating / 2
        let renderStar = []
        for(let i = 1; i <= 5; i++){
            let iconName = 'star-o'
            if((i <= starLevel) || (i ===5 && starLevel > 4.5)){
                iconName='star'
            }
            renderStar.push(<FontAwesome key={i} name={iconName} size={20} color="yellow"/>)
        }
        return renderStar
    }

    return <View style={styles.container}>
        {starCounter()}
    </View>
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        width:120,
        alignItems:"center",
        flexDirection:"row"
    }
})
export default Rating