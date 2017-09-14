import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SegmentedControlIOS } from 'react-native';

import WeatherList from './WeatherList';

const temperatureType = {
  C: 0,
  F: 1,
  K: 2
};

const forecastsF = [
  {day: 'Today', temp: 104},
  {day: 'Tomorrow', temp: 104},
  {day: 'Sunday', temp: 104},
  {day: 'Monday', temp: 104},
  {day: 'Tuesday', temp: 104},
];

const forecastsC = [
  {day: 'Today', temp: 41},
  {day: 'Tomorrow', temp: 39},
  {day: 'Sunday', temp: 31},
  {day: 'Monday', temp: 25},
  {day: 'Tuesday', temp: 27},
];

const forecastsK = [
  {day: 'Today', temp: 313.15},
  {day: 'Tomorrow', temp: 313.15},
  {day: 'Sunday', temp: 313.15},
  {day: 'Monday', temp: 313.15},
  {day: 'Tuesday', temp: 313.15},
];

/**
 * The WeatherScreen component will serve as the base for displaying all of our weather components
 */
class WeatherScreen extends Component {

  constructor() {
    super();

    this.state = {
      imageUrl: "https://image.com",
      forecasts: forecastsC,
      displayTemp: temperatureType.C
    };
  }

  getImageForForecast() {
    return "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg";
  }

  getSettings() {
    const selectedIndex = this.state.displayTemp === temperatureType.C ? 0 : 1;

    return (
      <SegmentedControlIOS
        style={{margin:10}}
        values={['C', 'F']}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          console.log('onChange');

          let displayTemp = temperatureType.C;
          let forecasts = forecastsC;
          if (event.nativeEvent.selectedSegmentIndex === 1) {
            displayTemp = temperatureType.F;
            forecasts = forecastsF;
          }
          this.setState({
            displayTemp,
            forecasts
           });
        }}
      />
    )
  }

  render() {

    const style = {backgroundColor: 'red', flex: 0.65};

    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor: 'powderblue', flex: 0.25}}>
          <Text style={{textAlign: 'center', fontSize: 20, margin:40}}>TODO: Pretty image </Text>
        </View>
        <View style={style}>
          <WeatherList
            forecasts={this.state.forecasts}
          />
        </View>
        <View style={{backgroundColor: 'skyblue', flex: 0.10}}>
          <Text style={{textAlign: 'center', fontSize: 12}}>Settings:</Text>
          {this.getSettings()}
        </View>
      </View>
    );
  }
}

export default WeatherScreen;
