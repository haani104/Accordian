import React from 'react'
import { View, Text } from 'react-native'
import TKPTouchable from './TKPTouchable'

const GenericHeader = ({ }) => {
    return (
        <View style={{ paddingVertical: 24, paddingHorizontal: 16 }}>
            <Text style={{
                fontSize: 18,
                color: 'rgba(0, 0, 0, .54)',
                marginTop: 10, marginBottom: 8,
            }}>SEGERA LAKUKAN PEMBAYARAN SEBELUM:</Text>
            <Text style={{
                fontWeight: '700',
                fontSize: 16,
                color: 'rgba(0, 0, 0, .7)',
            }}>Kamis, 17 Desember 2017, 13:20 WIB</Text>
        </View>
    )
}

export default GenericHeader
