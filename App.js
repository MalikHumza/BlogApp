import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogsProvider';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconPencil from 'react-native-vector-icons/Foundation';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={IndexScreen}
          options={props => {
            const {navigation} = props;
            return {
              title: 'BlogPosts',
              headerTitleAlign: 'center',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('create')}>
                  <Icon name="plus" size={30} />
                </TouchableOpacity>
              ),
            };
          }}
        />
        <Stack.Screen
          name="show"
          component={ShowScreen}
          options={props => {
            const {navigation, route:{params}} = props;
            const id = params.id;
            return {
              title: 'View Post',
              headerTitleAlign: 'center',

              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('edit', {id: id })}>
                  <IconPencil name="pencil" size={30} />
                </TouchableOpacity>
              ),
            };
          }}
        />
        <Stack.Screen
          name="create"
          component={CreateScreen}
          options={{title: 'Create Post', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="edit"
          component={EditScreen}
          options={{title: 'Edit Post', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Container = App;

export default () => {
  return (
    <Provider>
      <Container />
    </Provider>
  );
};
