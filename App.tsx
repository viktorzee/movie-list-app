import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/state-mang/store';
import MovieList from './src/screens/MovieList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from './src/screens/MovieDetail';
import { RootStackParamList } from './src/model';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MovieList">
          <Stack.Screen name="MovieList" component={MovieList} options={{ title: 'Movies' }} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} options={{ title: 'Movie Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
