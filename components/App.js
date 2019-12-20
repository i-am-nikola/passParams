import React, {Component} from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createBottomTabNavigator({
  Tab1: {
    screen: Tab1,
    navigationOptions: {
      title: 'Tab1',
    },
  },
  Tab2: {
    screen: Tab2,
    navigationOptions: {
      title: 'Tab2',
    },
  },
  Tab3: {
    screen: Tab3,
    navigationOptions: {
      title: 'Tab3',
    },
  },
});

const Navi = createAppContainer(AppNavigator);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: {},
    };
  }

  onNavigationChange = (prevState, currentState) => {
    console.log('prevState:', prevState);
    console.log('currentState', currentState);
    this.setState({
      keys: currentState.routes,
    });
  };

  render() {
    return (
      <Navi
        onNavigationStateChange={this.onNavigationChange}
        screenProps={{keys: this.state.keys}}
      />
    );
  }
}

export default App;
