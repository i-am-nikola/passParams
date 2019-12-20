import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';

class Tab3 extends Component {
  onTextPress = () => {
    if (this.props.screenProps.keys.length > 0) {
      const Tab2Key = this.props.screenProps.keys.find(
        key => key.routeName === 'Tab2',
      ).key;
      const setParamsAction = NavigationActions.setParams({
        params: {title: 'Some Value From Tab3'},
        key: Tab2Key,
      });
      this.props.navigation.dispatch(setParamsAction);
    }
  };
  render() {
    const {params} = this.props.navigation.state;
    console.log(this.props.screenProps);
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} onPress={this.onTextPress}>
          I'm Tab3 Component
        </Text>
        <Text style={styles.paragraph}>
          {params ? params.title : 'no-params-yet'}
        </Text>
        <Text style={styles.paragraph}>
          {JSON.stringify(this.props.screenProps)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

export default Tab3;
