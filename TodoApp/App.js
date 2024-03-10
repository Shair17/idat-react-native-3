import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './stores/stores'
import { Top } from './components/Top';
import { Bottom } from './components/Bottom';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Top />

        <Bottom />
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
