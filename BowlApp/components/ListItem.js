import React, {Component} from 'react';
import { Button, View, TouchableHighlight, Text }  from 'react-native';
import PropTypes from 'prop-types';

const styles = require('../styles.js')

class ListItem extends Component {

  render() {
    return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.title}</Text>
          <Button title="-" onPress={() => this.props.changeValue(this.props._key, -1)}/>
          <Text style={styles.liText}>${this.props.value}</Text>
          <Button title="+" onPress={() => this.props.changeValue(this.props._key, 1)}/>
        </View>
      </TouchableHighlight>
    );
  }
}


ListItem.propTypes = {
  _key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default ListItem;
