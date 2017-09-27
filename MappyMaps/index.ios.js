import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

import StatusBar from './components/StatusBar';
const styles = require('./styles.js');


export default class MappyMaps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Mappy Maps"/>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('MappyMaps', () => MappyMaps);
