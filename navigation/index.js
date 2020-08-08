import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const RootStack = createStackNavigator()


import Home from '../screen/Home'

const Main = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={Home} />
        </RootStack.Navigator>
    )
}

export default function App() {
  return (
    <NavigationContainer>
        <Main />
    </NavigationContainer>
  );
}