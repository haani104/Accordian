import React from 'react'
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native'
import TKPTouchable from './TKPTouchable'
const TKPPrimaryBtn = ({ type, content, onTap }) => {
  return (
    <TKPTouchable
      onPress={onTap}>
      <View style={btnStyle[type]}>
        <Text style={btnTextStyle[type]}>{content}</Text>
      </View>
    </TKPTouchable>
  )
}

const btnStyle = StyleSheet.create({
  small: {

  },
  medium: {
    height: 40,
    backgroundColor: '#ff5722',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ff5722',
  },
  big: {
    height: 58,
    backgroundColor: '#42b549',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#42b549',
  }
})

const btnTextStyle = StyleSheet.create({
  small: {

  },
  medium: {
    color: '#f1f1f1',
    fontSize: 13,
    fontWeight: '600',
  },
  big: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  }
})


export default TKPPrimaryBtn