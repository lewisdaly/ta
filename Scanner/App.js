import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import QRCode from 'react-native-qrcode';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      isReadingCode: false,
      isShowingCode: false,
      qrContent: JSON.stringify({username:'lewis', date: Date.now(), eventId: 123})
    };
  }

  getQRCode() {
    const { isShowingCode, qrContent } = this.state;

    if (!isShowingCode) {
      return null;
    }

    return (
      <QRCode
        value={qrContent}
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

  getReader() {
    const { isReadingCode } = this.state;

    if (!isReadingCode) {
      return null;
    }

    return (
      <QRCodeScanner
        onRead={(content) => console.log(content)}
      />
    );
  }

  getReadSection() {
    const { isReadingCode } = this.state;
    const title = isReadingCode ? 'Hide' : 'Read Code';


    return (
      <View>
        {this.getReader()}
        <Button
          onPress={() => this.setState({isReadingCode: !isReadingCode})}
          title={title}
          color="#00F"
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getShowSection()}
        {this.getReadSection()}
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
