import React from 'react'
import { View, Text } from 'react-native'
import { HeaderHome } from '@components'
import { gStyle } from '@constants'

export default function Home() {
    return (
        <View style={gStyle.container}>
            <HeaderHome />
        </View>
    )
}
