import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps'

import StatusBar from './components/StatusBar';
import ActionButton from './components/ActionButton';
const styles = require('./styles.js');


export default class MappyMaps extends Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
  }

  /**
   * Ref: https://facebook.github.io/react-native/docs/geolocation.html
   */
  getAndUpdateLocation() {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        const region = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };

        this.setState({
          region
        });
      },
      (err) => {
        console.log('err', err);
      },
      {}
    );
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Mappy Maps"/>
        <ActionButton title="Find me!" onPress={() => this.getAndUpdateLocation()} />
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={(region) => this.onRegionChange(region)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('MappyMaps', () => MappyMaps);
