import React from 'react'
import { Text, View, Image } from 'react-native'
import Button from './TKPButton'

const Footer = () => {
  return (
    <View style={{paddingHorizontal: 10, marginHorizontal: 10, paddingVertical: 30}}>
      <View>
        <Text style={{fontSize: 13, textAlign: 'center', color: 'rgba(0, 0, 0, 0.7)'}}>Demi keamanan transaksi Anda, pastikan untuk <Text style={{ fontWeight: 'bold'}}>tidak menginformasikan bukti dan data pembayaran kepada pihak manapun kecual Tokopedia.</Text></Text>
      </View>
      <View style={{paddingVertical: 30}}>
      <Button type='big' content='Cek Status Pembayaran'/>
      </View>
      <View>
        <Image
          source={{uri: 'https://ecs7.tokopedia.net/img/react_native/icon_payment_secure.png'}}
          style={{resizeMode: 'cover', height: 51}}
        />
      </View>
    </View>
  )
}

export default Footer
