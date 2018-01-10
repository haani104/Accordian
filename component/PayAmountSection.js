import React from 'react'
import { View, Text, Image } from 'react-native'

const AccountSection = ({ amount, showDetailBtn }) => {
  return (
    <View style={{
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
      marginHorizontal: 10,
      paddingVertical: 9,
      paddingHorizontal: 10
    }}>
      <View style={{ paddingVertical: 10, }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.7)', textAlign: 'left' }}>Jumlah yang harus dibayar:</Text>
      </View>
      <View style={{ paddingVertical: 1, }}>
        <Text style={{
          fontSize: 20,
          fontWeight: '800',
          textAlign: 'left',
          color: '#ff5722',
        }}>{amount}</Text>
      </View>
      <View style={{ paddingVertical: 16, }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#42b549' }}>Salin Jumlah</Text>
      </View>
      {
        showDetailBtn && (
          <View style={{ paddingTop: 12, paddingBottom: 28 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#42b549' }}>Lihat Detail Pembayaran</Text>
          </View>
        )
      }
    </View>
  )
}

export default AccountSection
