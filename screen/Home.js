import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { HeaderHome, PromotionBanner, ShowScroller, Cast } from '@components'
import { gStyle } from '@constants'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
    return (
        <View style={gStyle.container}>
            <HeaderHome navigation={navigation} />
            <ScrollView
                bounces
            >
                <PromotionBanner />

                <Text style={gStyle.heading}>Previews</Text>
                <ShowScroller dataset="previews" type="round" />

                <Text style={gStyle.heading}>My List</Text>
                <ShowScroller dataset="myList" />

                <Text style={gStyle.heading}>Popular on Netflix</Text>
                <ShowScroller />

                <Text style={gStyle.heading}>Trending Now</Text>
                <ShowScroller />

                <Text style={gStyle.heading}>Watch It Again</Text>
                <ShowScroller />

                <Text style={gStyle.heading}>NETFLIX ORIGINALS</Text>
                <ShowScroller />

                <Text style={gStyle.heading}>Documentaries</Text>
                <ShowScroller />

                <View style={gStyle.spacer24} />
            </ScrollView>

            <Cast />
        </View>
    )
}
