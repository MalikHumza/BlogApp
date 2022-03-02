import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogsProvider';
import ShowScreen from './src/screens/ShowScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={IndexScreen}
          options={{title: 'BlogPosts', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="show"
          component={ShowScreen}
          options={{title: 'View Post', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Container =  App;

export default () =>{
  return (
    <Provider>
      <Container />
    </Provider>
  )
}