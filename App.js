import React from 'react';
import {
  View,
  Text
} from 'react-native';
import codePush from 'react-native-code-push';

let codePushOption = {
  // checkFrequency: codePush.CheckFrequency.ON_APP_START
}

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default App;