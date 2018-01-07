import React from 'react'
import { View, Text, Image } from 'react-native'

const AccountSection = ({ accountNo }) => {
  return (
    <View style={{
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
      marginHorizontal: 10,
      paddingVertical: 9,
      paddingHorizontal: 10
    }}>
      <View style={{ paddingVertical: 9, }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.7)', textAlign: 'left'}}>Transfer ke nomor Virtual Account:</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',paddingVertical: 9, }}>
        <View>
          <Image
            source={{ uri: 'https://ecs7.tokopedia.net/img/android_o2o/Logo-BCA.png' }}
            style={{ width: 90, height: 30, resizeMode: 'cover' }}
          />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#4c4c4c',
              textAlign: 'left',
            }}>{accountNo}</Text>
        </View>
      </View>
      <View style={{paddingVertical: 9,}}>
        <Text style={{fontSize: 14, fontWeight: '600', color: '#42b549'}}>Salin Nomor Rekening</Text>
      </View>
    </View>
  )
}

export default AccountSection
