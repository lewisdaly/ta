import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import QRCode from 'react-native-qrcode';


export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      isShowingCode: false
    };
  }

  getQRCode() {
    const { isShowingCode } = this.state;

    if (!isShowingCode) {
      return null;
    }


    return (
      <QRCode
        value={"HELLO"}
        size={200}
        bgColor='purple'
        fgColor='white'
      />
    );
  }

  getShowSection() {
    const { isShowingCode } = this.state;
    const title = isShowingCode ? 'Hide' : 'Show Code';

    return (
      <View>
        {this.getQRCode()}
        <Button
          onPress={() => this.setState({isShowingCode: !isShowingCode})}
          title={title}
          color="#841584"
        />
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        {this.getShowSection()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
