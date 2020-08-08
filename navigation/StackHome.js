import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const RootStack = createStackNavigator()

import Home from '../screen/Home'
import TvShows from '../screen/TvShows'

export default  () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="TvShows" component={TvShows} />
        </RootStack.Navigator>
    )
}
