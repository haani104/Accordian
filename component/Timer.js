import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import TimerMixin from 'react-timer-mixin'

const TIME_INTERVAL = 1000
const TIMER = 172800

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f8f7',
    borderWidth: 1,
    borderColor: '#cde4c3',
    borderRadius: 3,
    marginHorizontal: 10,
    paddingHorizontal: 2,
    paddingVertical: 18,
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '800',
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 13,
    fontStyle: 'italic',
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center'
  },
  timerText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 21,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
    letterSpacing: 1,
  },
  digitText: {
    fontSize: 26,
    fontWeight: '700'
  }
})

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: {},
      seconds: props.timestamp
    }
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60))

    let divisor_for_minutes = secs % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)

    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds)
    this.setState({ time: timeLeftVar })
    this.startTimer()
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    })

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer)
    }
  }


  render() {
    const duration = moment.duration(this.state.dateDiff);
    let hour = moment.utc(duration.as('milliseconds')).format('HH')
    let minute = moment.utc(duration.as('milliseconds')).format('mm')
    let second = moment.utc(duration.as('milliseconds')).format('ss')

    return (
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 2 }}>
          <Text style={styles.headerText}>SEGERA LAKUKAN PEMBAYARAN DALAM WAKTU</Text>
        </View>
        <View style={{ paddingVertical: 16 }}>
          <Text style={styles.timerText}><Text style={styles.digitText}>{this.state.time.h}</Text> jam <Text style={styles.digitText}>: {this.state.time.m}</Text> menit <Text style={styles.digitText}>: {this.state.time.s}</Text> <Text style={{ fontWeight: '500' }}>detik</Text></Text>
        </View>
        <Text style={styles.footerText}>(sebelum <Text style={{ fontWeight: '800', }}>Kamis, 9 Desember 2017, 15:30 WIB)</Text>
        </Text>
      </View>
    )
  }
}

export default Timer
