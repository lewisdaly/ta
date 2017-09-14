import React, { Component } from 'react';
import { StyleSheet, Text, ListItem, View, Image } from 'react-native';
import PropTypes from 'prop-types';

class WeatherRow extends Component {

  render() {
    const { day, forecast } = this.props;

    return (
      <View style={{margin:40, ...this.props.style}}>
        <Text>{day}, {forecast}</Text>
      </View>
    );
  }
}

WeatherRow.propTypes = {
  day: PropTypes.string.isRequired,
  forecast: PropTypes.number.isRequired
}

export default WeatherRow;
