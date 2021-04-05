import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/home'
import Films from './src/films'
import Series from './src/series'
import MyList from './src/mylist'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import filmsReducer from './src/ducks/filmsReducer'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const store = createStore(filmsReducer);

export default function App() {
  // const [filmId, setFilmId] = useState(null)

  let content = (<Home/>)

  // if(todoId){
  //   const selectedTodo = todos.find(todo => todo.id === todoId)
  //   content = <TodoScreen goBack={()=> setTodoId(null)} todo={selectedTodo}/>
  // }

  const HomeScreen = ({navigation}) => {

    return <View style={styles.container}>
    <Home navigation={navigation}/>
  </View>
  }

  const FilmsScreen = ({navigation}) => {

    return <View style={styles.container}>
    <Films navigation={navigation}/>
  </View>
  }

  const SeriesScreen = ({navigation}) => {

    return <View style={styles.container}>
    <Series navigation={navigation}/>
  </View>
  }

  const ListScreen = ({navigation}) => {
    return <View style={styles.container}>
    <MyList navigation={navigation}/>
  </View>
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Films" component={FilmsScreen} />
        <Stack.Screen name="Series" component={SeriesScreen} />
        <Stack.Screen name="MyList" component={ListScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

