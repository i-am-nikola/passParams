import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Tab1 extends Component {
  onTextPress = () => {
    if (this.props.screenProps.keys.length > 0) {
      const Tab2Key = this.props.screenProps.keys.find(
        key => key.routeName === 'Tab2',
      ).key;
      const setParamsAction = NavigationActions.setParams({
        params: {title: 'Some Value From Tab1'},
        key: Tab2Key,
      });
      this.props.navigation.dispatch(setParamsAction);
    }
  };

  render() {
    const {params} = this.props.navigation.state;
    console.log(params);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.onTextPress}>
          <Text style={styles.paragraph}>I'm Tab1 Component</Text>
        </TouchableOpacity>
        <Text style={styles.paragraph}>
          {params ? params.title : 'no-params-yet'}
        </Text>
        <Text style={styles.paragraph}>
          {JSON.stringify(this.props.screenProps)}
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Tab2')}>
          <Text>Go to tab 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Tab3')}>
          <Text>Go to tab 3</Text>
        </TouchableOpacity>
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

export default Tab1;
