import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import mainStyles from '../Styles/mainStyles';

export default class Main extends Component {
  render() {
    return (
      <View style={mainStyles.main}>
        <Text>My bundled image below</Text>
        <Image
          source={require('../assets/images/bundled.png')}
        />
        <Text>My bundled image above</Text>
      </View>
    );
  }
}