import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movies from '../screens/Movies';
import MovieView from '../screens/MovieView';

const Stack = createNativeStackNavigator();

function AppWithNavication() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Character List">
        <Stack.Screen
          options={{headerShown: false}}
          name="Movies"
          component={Movies}
        />
        <Stack.Screen
          options={{
            title: '',
          }}
          name="MovieView"
          component={MovieView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppWithNavication;
