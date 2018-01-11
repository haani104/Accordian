import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Triangle = ({pointerLeft}) => {
    console.log(pointerLeft)
    const Styles = StyleSheet.create({
        triangle: {
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderBottomWidth: 10,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'rgba(0, 0, 0, 0.7)',
            position: 'absolute',
            top: -10,
            left: pointerLeft,
        }
    })
    return <View style={Styles.triangle} />
}

export default Triangle
