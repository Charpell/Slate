import React, { Component } from 'react'
import { Text, View, Animated, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, device, fonts, images } from '@constants'
import { TouchText } from '@components'

export default class HeaderHome extends Component {
    state = {
        top: new Animated.Value(0)
    }

    render() {
        const { all, navigation  } = this.props
        const { top } = this.state

        return (
            <Animated.View style={[styles.container, { top }]}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Image source={images.netflixTransparent} style={styles.logo} />
                </TouchableOpacity>

                <View style={styles.containerMenu}>
                    {all && (
                        <>
                            <TouchText 
                                onPress={() => navigation.navigate('TvShows')}
                                text="TV Shows"
                                textStyle={styles.text}
                            />
                            <TouchText 
                                onPress={() => navigation.navigate('HomeMoview')}
                                text="Movies"
                                textStyle={styles.text}
                            />
                            <TouchText 
                                onPress={() => navigation.navigate('HomeMyList')}
                                text="My List"
                                textStyle={styles.text}
                            />
                        </>
                    )}
                </View>
            </Animated.View>
        )
    }
}

HeaderHome.defaultProps = {
    all: true
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        backgroundColor: colors.black20,
        flexDirection: 'row',
        paddingBottom: 4,
        paddingHorizontal: 16,
        paddingTop: device.iPhoneX ? 54 : 30,
        position: 'absolute',
        width: '100%',
        zIndex: 1
    },
    containerMenu: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        height: 35
    },
    logo: {
        height: 35,
        marginRight: 48,
        width: 20
    },
    text: {
        color: colors.white,
        fontFamily: fonts.medium,
        marginRight: 24
    }
})
