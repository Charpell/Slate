import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { HeaderHome, PromotionBanner } from '@components'
import { gStyle } from '@constants'

export default function Home() {
    return (
        <View style={gStyle.container}>
            <HeaderHome />
            <ScrollView>
                <PromotionBanner />
            </ScrollView>
        </View>
    )
}
