import React, { Component } from 'react';
// import Navigator from './src/Navigator';
import { Text } from 'native-base';
import Main from './src/components/Main/MainScreen';
import MainScreen from './src/components/Main/MainScreen';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
      
  render() {
    return (
      <MainScreen />
    );
  }
}
  
  export default App;