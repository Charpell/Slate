import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackHome from './StackHome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackHome} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  );
}