import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'
export default function App() {

  return (

    <View style={styles.container}>
        <Provider store={store}>
          <Home />
          <StatusBar style="auto" />
        </Provider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#02194d'
  },
  safeView:{
    marginTop:20
  }
});
