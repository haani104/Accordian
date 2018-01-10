import React from 'react'
import { View, Text } from 'react-native'
import TKPTouchable from './TKPTouchable'
const PaymentGuide = ({ }) => {
    return (
        <View style={{
            paddingTop: 24, paddingHorizontal: 16, borderTopWidth: 1,
            borderTopColor: '#e0e0e0',
            borderBottomColor: '#e0e0e0',
            borderBottomWidth: 1,
            paddingBottom: 17
        }}>
            <Text style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'rgba(0, 0, 0, .54)',
                marginBottom: 10,
            }}>Silahkan lakukan pembayaran melalui ATM/ internet banking/ mobile banking/ kantor bank terkait</Text>
            <View>
                <TKPTouchable onPress={() => {}}>
                    <Text style={{
                        marginTop: 40,
                        textAlign: 'center',
                        fontSize: 14, fontWeight: '600', color: '#42b549'
                    }}> Detail Pembayaran</Text>
                </TKPTouchable>
            </View>
        </View>
    )
}

export default PaymentGuide
