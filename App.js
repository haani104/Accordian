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
import Footer from './component/Footer'
import GenericPaymentGuide from './component/GenericPaymentGuide'
import GenericHeader from './component/GenereicHeader'


//Allowed values for `bank`
/*
'BCA'
'BNI'
BRI
DANAMON
MANDIRI
*/

const bank = 'DANAMON'
export default class App extends Component<{}> {
  render() {
    return (
      // VA Template
      /*
      <ScrollView style={styles.container}>
        <Timer timestamp={1000}/>
        <AccountSection accountNo="80777-081314416795" bank={bank}bankLogo="https://ecs7.tokopedia.net/img/android_o2o/Logo-Danamon.png"/>
        <PaySection amount="Rp320. 994" showDetailBtn/>
        <AccordionList bank={bank}/>
        <Footer />
      </ScrollView>
*/

      // Generic VA Template
      <ScrollView style={styles.container}>
        <GenericHeader />
        <AccountSection accountNo="80777-081314416795" bank={bank} bankLogo="https://ecs7.tokopedia.net/img/android_o2o/Logo-Danamon.png" />
        <PaySection amount="Rp 320. 994" showDetailBtn={false} />
        <GenericPaymentGuide />
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
