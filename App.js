/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import AccordionList from './AccordionList'
import Timer from './component/Timer'
import AccountSection from './component/AccountSection'
import PaySection from './component/PayAmountSection'
import Footer from './component/Footer';

export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Timer timestamp={1000}/>
        <AccountSection accountNo="80777-081314416795"/>
        <PaySection amount="Rp320. 994"/>
        <AccordionList />
        <Footer />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
