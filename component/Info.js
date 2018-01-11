import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Triangle from './Traingle'

const Info = ({title, message, pointerLeft, noOfDigits}) => {
    console.log(pointerLeft)
    return (
        <View style={{marginTop: 20}}>
            <Triangle pointerLeft={pointerLeft}/>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingVertical: 15, borderRadius: 3, paddingHorizontal: 15}}>
                <Text style={{color: 'white', fontWeight: '800', fontSize: 16,}}>{title}</Text>
                <Text style={{color: 'white', fontSize: 14, paddingTop: 4}}>{message}</Text>
            </View>
        </View>
    )
}

export default Info
