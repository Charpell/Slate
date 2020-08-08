import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, fonts } from '@constants'

export default function TouchText({ onPress, text, textStyle }) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontFamily: fonts.medium
    }
})
