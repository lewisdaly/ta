import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import * as firebase from 'firebase';
import {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_DATABASE_URL,
  FB_STORAGE_BUCKET
} from 'react-native-dotenv';

const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
import ListItem from './components/ListItem';
const styles = require('./styles.js');

const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DATABASE_URL,
  storageBucket: FB_STORAGE_BUCKET,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class BowlApp extends Component {

  constructor(props) {
    super(props);


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{ title: 'Lewis' }]),
    };
  }

  renderItem(item) {
    console.log("rendering", item);

    return (
      <ListItem title={item.title}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Enabled Bowl Debt"/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderItem(rowData)}
          // renderRow={this.renderItem.bind(this)}
        />
        <ActionButton title="Add" />
      </View>
    );
  }
}

AppRegistry.registerComponent('BowlApp', () => BowlApp);
