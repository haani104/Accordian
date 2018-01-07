import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import Accordian from './component/Accordian'

const styles = StyleSheet.create({
  container: {
  }
})

class AccordionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: -1
    }
  }

  handleResetOthers = (index) => {
    if (index === this.state.index) {
      this.setState({ activeIndex: -1 })
    } else {
      this.setState({ activeIndex: index })
    }
  }

  render() {
    const data = [{
      heading: 'ATM BCA',
      content: [
        'Masukkan Kartu ATM BCA & PIN',
        'Pilih menu Transaksi Lainnya > Transfer > ke Rekening BCA Virtual Account',
        'Masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 8077708783680040)',
        'Di halamn konfirmasi, pastikan detil pembayaran sudah sesui seperti No VA, Nama, Perus/Produk dan Total Tagihan',
        'Masukkan Jumlah Transfer sesuai dengan Total Tagihan',
        'Ikuti instruksi untuk menyelesaikan transaksi',
        'Simpan struk transaksi sebagai bukti pembayarn'
      ]
    },
    {
      heading: 'm-BCA (BCA mobile)',
      content: [
        'Lakukan log in pada aplikasi BCA Mobile',
        'Pilih menu m-BCA, kemudian masukkan kode akses m-BCA',
        'Pilih m-Transfer > BCA Virtual Account',
        'pilih dari Daftar Transfer, atau masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 80777087836804040)',
        'Masukkan jumlah yang ingin dibayarkan',
        'Masukkan pin m-BCA',
        'Pembayaran selesai. Simpan notifikasi yang muncul sebagai bukti pembayaran'
      ]
    },
    {
      heading: 'Internet Banking BCA',
      content: [
        'Login pada alamat Internet Banking BCA (https://klikbca.com)',
        'Pilih menu Pembayaran Tagihan > Pembayaran > BCA Virtual Account',
        'Pada kolom kode bayar, masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 80777087836804040)',
        'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti Nomor BCA Virtual Account, Nama Pelanggan dan Jumlah Pembayaran',
        'Masukkan password dan mToken',
        'Cetak/simpan struk pembayaran BCA Virtual Account sebagai bukti pembayaran',
      ]
    },
    {
      heading: 'Kantor Bank BCA',
      content: [
        'Ambil nomor antrian transaksi Teller dan isi slip setoran',
        'Serahkan slip dan jumlah setoran kepada Teller BCA',
        'Teller BCA akan melakukan validasi sebagai bukti pembayaran'
      ]
    },
    {
      heading: 'ATM Bank Lain',
      content: [
        'Masukkan Kartu Debit dan PIN Anda',
        'pilih menu Transaksi Lainnya > Transfer > ke Rek Bank Lain',
        'Masukkan kode bank BCA (001) kemudian diikuti dengan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 00180777087836804040)',
        'Ikuti instruksi untuk menyelesaikan transaksi',
        'Simpan struk transaksi sebagai bukti pembayarn'
      ]
    }
    ]

    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={{ borderTopWidth: 2, paddingVertical: 20, marginHorizontal: 10, paddingHorizontal: 10, borderTopColor: '#e0e0e0' }}>
            <Text style={{ fontSize: 15, fontWeight: '800', color: 'rgba(0, 0, 0, 0.7)' }}>PANDUAN PEMBAYARAN</Text>
          </View>
          {
            data.map((d, i) => {
              return (
                <Accordian
                  title={d.heading}
                  expanded={this.state.activeIndex === i}
                  key={i}
                  index={i}
                  resetOthers={this.handleResetOthers}
                >
                  {
                    d.content.map((c, j) => {
                      return (
                        <View style={{ flexDirection: 'row', paddingVertical: 5 }} key={j}>
                          <View style={{ paddingHorizontal: 5 }}>
                            <Text style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{j + 1}.</Text>
                          </View>
                          <View style={{ paddingHorizontal: 6 }}>
                            <Text style={{ color: 'rgba(0, 0, 0, 0.7)', textAlign: 'left' }}>{c}</Text>
                          </View>
                        </View>
                      )
                    })
                  }
                </Accordian>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}



export default AccordionList
