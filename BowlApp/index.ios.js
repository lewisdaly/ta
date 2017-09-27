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

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      filterIn: [
        "lew",
        "grant"
      ],
      // filterOut: []
    };
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  getFilterView() {
    const { filterIn } = this.state;

    
  }

  changeValue(id, delta) {
    //Find the item by id, and save the new value
    this.itemsRef.child(id).once('value')
      .then(item => {
        const value = item.val();
        value.value += delta;

        return value;
      })
      .then(value => {

        var updates = {};
        updates[`/${id}`] = value;

        return this.itemsRef.update(updates);
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  addPerson() {
    AlertIOS.prompt(
      'Add a new person',
      null,
      [
        {
          text: 'Add',
          onPress: (text) => {
            //TODO: validate here!
            if (text.length === 0) {
              return;
            }

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

  /**
   * Apply the filter here
   */
  isFilteredIn(item) {
    const { filterIn } = this.state;

    //Reduce filters are cool! TODO: Talk about them in class
    return filterIn.reduce((acc, curr) => {
      if (acc === true) {
        return true;
      }

      if (item.title.toLowerCase().indexOf(curr) > -1){
        return true;
      }

      return false;

    }, false);
  }

  renderItem(item) {
    return (
      <ListItem
        _key={item._key}
        title={item.title}
        value={item.value}
        changeValue={(key, delta) => this.changeValue(key, delta)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Enabled Bowl Debt"/>
        {this.getFilterView()}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            //Remove items that don't fit out IN filters
            if (!this.isFilteredIn(rowData)) {
              return null;
            }

            return this.renderItem(rowData);
          }}
        />
        <ActionButton title="Add Person" onPress={(event) => this.addPerson(event)} />
      </View>
    );
  }
}

AppRegistry.registerComponent('BowlApp', () => BowlApp);
