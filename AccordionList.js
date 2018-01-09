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
    const paymentGuidelines = {
      'BCA': [{
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
      ],
      'BNI': [{
        heading: 'ATM BNI',
        content: [
          'Masukkan Kartu Anda.',
          'Pilih Bahasa.',
          'Masukkan PIN ATM Anda.',
          'Pilih "Menu Lainnya".',
          'Pilih "Transfer".',
          'Pilih "Rekening Tabungan".',
          'Pilih "Ke Rekening BNI".',
          'Masukkan nomor rekening tujuan dengan 16 digit Nomor Virtual Account (contoh: 8277087781881441).',
          'Masukkan nominal transfer sesuai tagihan atau kewajiban Anda. Nominal yang berbeda tidak dapat diproses.',
          'Konfirmasi, apabila telah sesuai, lanjutkan transaksi.',
          'Transaksi telah selesai.',
        ]
      }, {
        heading: 'Mobile banking BNI',
        content: [
          'Akses BNI Mobile Banking dari handphone kemudian masukkan user ID dan password.',
          'Pilih menu Transfer.',
          'Pilih “Antar Rekening BNI” kemudian “Input Rekening Baru”.',
          'Masukkan nomor Rekening Debit dan nomor Virtual Account Tujuan (contoh: 8277087781881441).',
          'Masukkan nominal transfer sesuai tagihan atau kewajiban Anda. Nominal yang berbeda tidak dapat diproses.',
          'Konfirmasi transaksi dan masukkan Password Transaksi.',
          'Transfer Anda Telah Berhasil.',
        ]
      }, {
        heading: 'iBank Personal',
        content: [
          'Ketik alamat https://ibank.bni.co.id kemudian klik “Enter”.',
          'Masukkan User ID dan Password.',
          'Klik menu “TRANSFER” kemudian pilih “TAMBAH REKENING FAVORIT”.Jika menggunakan desktop untuk menambah rekening, pada menu “Transaksi” lalu pilih "Info & Administrasi Transfer" kemudian “Atur Rekening Tujuan” lalu “Tambah Rekening Tujuan”.',
          'Masukkan nomor Virtual Account sebagai nomor rekening tujuan(contoh: 8277087781881441).',
          'Masukkan Kode Otentikasi Token.Nomor rekening tujuan berhasil ditambahkan.',
          'Kembali ke menu “TRANSFER”.Pilih “TRANSFER ANTAR REKENING BNI”, kemudian pilih rekening tujuan.',
          'Pilih Rekening Debit dan ketik nominal transfer sesuai tagihan atau kewajiban Anda.Nominal yang berbeda tidak dapat diproses.',
          'Lalu masukkan kode otentikasi token.',
          'Transfer Anda Telah Berhasil.',
        ]
      }, {
        heading: 'SMS banking',
        content: [
          'Buka aplikasi SMS Banking BNI',
          'Pilih menu Transfer',
          'Pilih menu Trf rekening BNI',
          'Masukkan nomor rekening tujuan dengan 16 digit Nomor Virtual Account (contoh: 8277087781881441).',
          'Masukkan nominal transfer sesuai tagihan atau kewajiban Anda. Nominal yang berbeda tidak dapat diproses.',
          'Pilih “Proses” kemudian “Setuju”',
          'Reply sms dengan ketik pin sesuai perintah',
          'Transaksi Berhasil',
          'Atau Dapat juga langsung mengetik sms dengan format: \n TRF[SPASI]NomorVA[SPASI]NOMINAL \n dan kemudian kirim ke 3346 \n Contoh : TRF 8277087781881441 44000'
        ]
      },
      {
        heading: 'ATM Bersama',
        content: [
          'Masukkan kartu ke mesin ATM Bersama.',
          ' Pilih "Transaksi Lainnya".',
          'Pilih menu "Transfer".',
          'Pilih "Transfer ke Bank Lain".',
          'Masukkan kode bank BNI (009) dan 16 Digit Nomor Virtual Account (contoh: 8277087781881441).',
          'Masukkan nominal transfer sesuai tagihan atau kewajiban Anda. Nominal yang berbeda tidak dapat diproses.',
          'Konfirmasi rincian Anda akan tampil di layar, cek dan tekan "Ya" untuk melanjutkan.',
          'Transaksi Berhasil.'
        ]
      },
      {
        heading: 'Bank Lain',
        content: [
          'Pilih menu "Transfer antar bank" atau “Transfer online antarbank”.',
          'Masukkan kode bank BNI (009) atau pilih bank yang dituju yaitu BNI.',
          'Masukan 16 Digit Nomor Virtual Account pada kolom rekening tujuan, (contoh: 8277087781881441).',
          'Masukkan nominal transfer sesuai tagihan atau kewajiban Anda. Nominal yang berbeda tidak dapat diproses.',
          'Masukkan jumlah pembayaran : 44000.',
          'Konfirmasi rincian Anda akan tampil di layar, cek dan apabila sudah sesuai silahkan lanjutkan transaksi sampai dengan selesai.',
          'Transaksi Berhasil.',
        ]
      }],
      'MANDIRI': [{
        heading: 'ATM bank Mandiri',
        content: [
          'Masukkan kartu ATM dan Pin',
          'Pilih Menu “Bayar/Beli”',
          'Pilih menu “Lainnya”, hingga menemukan menu “Multipayment”',
          'Masukkan kode biller Tokopedia 88708, lalu pilih Benar',
          'Masukkan “Nomor Virtual Account” Tokopedia, lalu pilih tombol Benar',
          'Masukkan Angka “1” untuk memilih tagihan, lalu pilih tombol Ya',
          'Akan muncul konfirmasi pembayaran, lalu pilih tombol Ya',
          'Simpan struk sebagai bukti pembayaran anda',
        ]
      }, {
        heading: 'Internet Banking atau Mandiri Online',
        content: [
          'Login Mandiri Online dengan memasukkan username dan password',
          'Pilih menu “Pembayaran”',
          'Pilih menu “Multipayment”',
          'Pilih penyedia jasa “Tokopedia',
          'Masukkan “Nomor Virtual Account” dan “Nominal” yang akan dibabayarkan , lalu pilih Lanjut',
          'setelah muncul tagihan, pilih Konfirmasi',
          'Masukkan PIN/ challange code token',
          'Transaksi selesai, simpan bukti bayar anda',
          'Jangan gunakan fitur "Simpan Daftar Transfer" untuk pembayaran melalui Internet Banking karena dapat mengganggu proses pembayaran berikutnya. \n\n Untuk menghapus daftar transfer tersimpan ikuti langkah berikut: \n\n 1. Login Mandiri Online \n 2. Pilih ke menu Pembayaran \n 3. Pilih menu Daftar Pembayaran \n 4. Pilih pada pembayaran yang tersimpan, lalu pilih menu untuk hapus'
        ]
      }],
      'BRI': [{
        heading: 'ATM BRI',
        content: [
          'Masukkan Kartu Debit BRI dan PIN Anda',
          'Pilih menu Transaksi Lain > Pembayaran > Lainnya > BRIVA',
          'Masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 80777087781881441)',
          'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti Nomor BRIVA, Nama Pelanggan dan Jumlah Pembayaran',
          'Ikuti instruksi untuk menyelesaikan transaksi',
          'Simpan struk transaksi sebagai bukti pembayaran',
        ]
      }, {
        heading: 'Mobile Banking BRI',
        content: [
          'Login aplikasi BRI Mobile',
          'Pilih menu Mobile Banking BRI > Pembayaran > BRIVA',
          'Masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 80777087781881441)',
          'Masukan Jumlah Pembayaran',
          'Masukkan PIN',
          'Simpan notifikasi SMS sebagai bukti pembayaran',
        ]
      }, {
        heading: 'Internet Banking BRI',
        content: [
          'Login pada alamat Internet Banking BRI (https://ib.bri.co.id/ib-bri/Login.html)',
          'Pilih menu Pembayaran Tagihan > Pembayaran > BRIVA',
          'Pada kolom kode bayar, masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 80777087781881441)',
          'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti Nomor BRIVA, Nama Pelanggan dan Jumlah Pembayaran',
          'Masukkan password dan mToken',
          'Cetak/simpan struk pembayaran BRIVA sebagai bukti pembayaran',
        ]
      }, {
        heading: 'Mini ATM / EDC BRI',
        content: [
          'Pilih menu Mini ATM > Pembayaran > BRIVA',
          'Swipe Kartu Debit BRI Anda',
          'Masukkan 5 angka kode perusahaan untuk Tokopedia (80777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh 80777087781881441)',
          'Masukkan PIN',
          'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti Nomor BRIVA, Nama Pelanggan dan Jumlah Pembayaran',
          'Simpan struk transaksi sebagai bukti pembayaran',

        ]
      }, {
        heading: 'Kantor Bank BRI',
        content: [
          'Ambil nomor antrian transaksi Teller dan isi slip setoran',
          'Serahkan slip dan jumlah setoran kepada Teller BRI',
          'Teller BRI akan melakukan validasi transaksi',
          'Simpan slip setoran hasil validasi sebagai bukti pembayaran',
        ]
      }, {
        heading: 'ATM Bank Lain',
        content: [

        ]
      }],
      'DANAMON': [{
        heading: 'ATM Danamon',
        content: [
          'Masukkan Kartu ATM Danamon & PIN',
          'Pilih menu Pembayaran > menu Lainnya > menu Virtual Account',
          'Masukkan 4 angka kode perusahaan untuk Tokopedia (8777) dan Nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 8777087781881441)',
          'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Institusi, dan Total Tagihan',
          'Pilih Ya untuk memproses transaksi',
          'Simpan struk transaksi sebagai bukti pembayaran',
        ]
      }, {
        heading: 'ATM Bank Lain',
        content: [
          'Masuk ke menu Transfer',
          'Pilih Transfer ke bank lain dengan tujuan rekening Bank Danamon',
          'Masukkan Kode Bank Danamon (011), 4 angka kode perusahaan untuk Tokopedia (8777), dan nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 0118777087781881441)',
          'Masukkan jumlah pembayaran sesuai tagihan',
          'Akan muncul rincian pembayaran Anda. Jika sudah benar, klik "Ya" untuk melanjutkan',
        ]
      }, {
        heading: 'ATM Bersama/ALTO/Prima*',
        content: [
          'Masuk ke menu Transfer',
          'Pilih Transfer ke bank lain dengan tujuan rekening Bank Danamon (Online Transfer)',
          'Masukkan Kode Bank Danamon (011) dan 4 angka kode perusahaan untuk Tokopedia (8777) dan nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 0118777087781881441)',
          'Masukkan jumlah pembayaran sesuai tagihan',
          'Akan muncul rincian pembayaran Anda. Jika sudah benar, klik "Ya" untuk melanjutkan \n\n *ketersediaan channel sesuai kebijakan bank penerbit kartu masing-masing',
        ]
      }, {
        heading: 'D-mobile (Mobile Banking)',
        content: [
          'Akses D-mobile melalui handphone Anda',
          'Masukkan User ID dan password',
          'Pilih menu Pembayaran, lalu pilih Virtual Account kemudian Tambah biller baru pembayaran',
          'Masukkan 4 angka kode perusahaan untuk Tokopedia (8777) dan nomor HP yang terdaftar di akun Tokopedia Anda (Contoh: 8777087781881441)',
          'Akan muncul rincian pembayaran Anda. Jika sudah benar, masukan Pin transaksi Anda',
        ]
      }]
    }

    const data = paymentGuidelines[this.props.bank]

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
