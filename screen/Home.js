import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { HeaderHome, PromotionBanner, ShowScroller } from '@components'
import { gStyle } from '@constants'

export default function Home() {
    return (
        <View style={gStyle.container}>
            <HeaderHome />
            <ScrollView>
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
        </View>
    )
}
