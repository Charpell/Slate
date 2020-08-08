import React, { cloneElement } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, fonts } from '@constants'

import SvgPlay from './icons/Svg.Play'

export default function TouchTextIcon({ icon, iconSize = 20, width = 280, onPress, text }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={[styles.container, { width }]}
        >
            <View style={styles.icon}>
                {cloneElement(icon, { size: iconSize })}
            </View>
             <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      },
      text: {
        color: colors.infoGrey,
        fontFamily: fonts.light,
        marginTop: 2
      },
      icon: {
        justifyContent: 'center'
      }
})
