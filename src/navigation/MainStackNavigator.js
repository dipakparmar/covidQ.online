import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import start from '../screens/start';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="start" component={start} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;