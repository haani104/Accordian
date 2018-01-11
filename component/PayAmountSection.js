import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Info from './Info'

class AccountSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pointerSpace: 0
    }
  }

  render() {
    const { amount, showDetailBtn, isBankPage } = this.props
    const amountBeforeDecimal = amount.split('.')[0]
    const amountAfterDecimal = amount.split('.')[1]
    const noOfDigits = amountAfterDecimal && amountAfterDecimal.length
    const sectionMarginHorizontal = 10
    const sectionPaddingHorizontal = 10

    const title = `Transfer sesuai hingga ${noOfDigits} digit terakhir`
    return (
      <View style={{
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        marginHorizontal: sectionMarginHorizontal,
        paddingVertical: 9,
        paddingHorizontal: sectionPaddingHorizontal,
      }}>
        <View style={{ paddingVertical: 10, }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.7)', textAlign: 'left' }}>Jumlah yang harus dibayar:</Text>
        </View>
        {
          isBankPage ? (
            <View>
              <View style={{ paddingVertical: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: '800',
                  textAlign: 'left',
                  color: '#ff5722',
                }}>{amountBeforeDecimal}.</Text>
                <View style={{ borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.7)' }} onLayout={
                  (event) => {
                    const { x, y, width, height } = event.nativeEvent.layout
                    const pointerSpace = x - (sectionMarginHorizontal / 2 + sectionPaddingHorizontal / 2) + (width - 1) / 2
                    this.setState({
                      pointerSpace
                    })
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '800',
                      textAlign: 'left',
                      color: '#ff5722',
                      padding: 1,
                    }}>{amountAfterDecimal}</Text></View>
              </View>
              <Info
                title={title}
                message="Perbedaan angka akan menghambat verifikasi."
                pointerLeft={this.state.pointerSpace}
              />
            </View>
          ) : (
              <View style={{ paddingVertical: 1, }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: '800',
                  textAlign: 'left',
                  color: '#ff5722',
                }}>{amount}</Text>
              </View>
            )
        }
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
}

export default AccountSection
