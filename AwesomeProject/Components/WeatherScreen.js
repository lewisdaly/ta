import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SegmentedControlIOS } from 'react-native';


import WeatherRow from './WeatherRow';


const temperatureType = {
  C: 0,
  F: 1,
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

  getWeatherRow(item, index) {
    const backgroundColor = index % 2 == 0 ? 'powderblue' : 'red';

    return (
      <WeatherRow
        style={{width:250, backgroundColor}}
        key={item.day}
        day={item.day}
        forecast={item.temp}
      />
    );
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

    return(
      <View style={{flex:1}}>
        <View style={{backgroundColor: 'powderblue', flex: 0.25}}>
          <Text style={{textAlign: 'center', fontSize: 20, margin:40}}>TODO: Pretty image </Text>
        </View>
        <View style={{backgroundColor: 'steelblue', flex: 0.65}}>
            <FlatList
              keyExtractor={(item, index) => item.day}
              data={this.state.forecasts}
              renderItem={({item, index}) => this.getWeatherRow(item, index)}
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
