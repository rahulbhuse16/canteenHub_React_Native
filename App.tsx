import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

import Router from './src/Routes/Router';
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
     
      <Router/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
