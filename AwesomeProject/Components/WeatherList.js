import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, ListItem, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import WeatherRow from './WeatherRow';

class WeatherList extends Component {

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

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => item.day}
        data={this.props.forecasts}
        renderItem={({item, index}) => this.getWeatherRow(item, index)}
      />
    );
  }
}

WeatherList.propTypes = {
  forecasts: PropTypes.arrayOf(PropTypes.object)
};

export default WeatherList;
