import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const RootStack = createStackNavigator()

import Home from '../screen/Home'
import TvShows from '../screen/TvShows'
import Movies from '../screen/Movies'
import MyList from '../screen/MyList'

export default  () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="TvShows" component={TvShows} />
            <RootStack.Screen name="Movies" component={Movies} />
            <RootStack.Screen name="MyList" component={MyList} />
        </RootStack.Navigator>
    )
}
