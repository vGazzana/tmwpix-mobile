import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/* Screens */

import Login from './screens/Login';
import Profile from './screens/Profile';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Profile} />
        <Stack.Screen name="Profile" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
