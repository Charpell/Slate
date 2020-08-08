import React, { cloneElement } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, fonts } from '@constants'

import SvgPlay from './icons/Svg.Play'

export default function PromotionPlay({ icon = <SvgPlay />, onPress, text = "Play" }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.container}
        >
            <View style={styles.icon}>
                {cloneElement(icon, { fill: colors.black })}
            </View>
             <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 4,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8
      },
      text: {
        color: colors.black,
        fontFamily: fonts.medium,
        fontSize: 18
      },
      icon: {
        justifyContent: 'center'
      }
})
