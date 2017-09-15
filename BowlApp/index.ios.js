import React, { Component } from 'react';
import {
  AlertIOS,
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

    this.itemsRef = firebaseApp.database().ref();
    console.log("items", this.itemsRef.key);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    };
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  addPerson() {
    AlertIOS.prompt(
      'Add a new person',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ name: text, value: 0 })
          }
        },
      ],
      'plain-text'
    );
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        console.log("child", child.val());
        items.push({
          title: child.val().name,
          value: child.val().value,
          _key: child.key
        });
      });

      const ds = this.state.dataSource
      this.setState({
        dataSource: ds.cloneWithRows(items)
      });

    });
  }

  renderItem(item) {
    return (
      <ListItem
        title={item.title}
        value={item.value}
      />
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
        <ActionButton title="Add Person" onPress={(event) => this.addPerson(event)} />
      </View>
    );
  }
}

AppRegistry.registerComponent('BowlApp', () => BowlApp);
