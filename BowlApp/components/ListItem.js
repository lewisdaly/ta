import React, {Component} from 'react';
import { View, TouchableHighlight, Text }  from 'react-native';
import PropTypes from 'prop-types';

const styles = require('../styles.js')

class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}


ListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ListItem;
