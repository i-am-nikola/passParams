import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

class Tab2 extends Component {
  render() {
    const {params} = this.props.navigation.state;
    console.log(params);
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{`I'm Tab2 Component`}</Text>
        <Text style={styles.paragraph}>
          {params ? params.title : 'no-params-yet'}
        </Text>
        <Text style={styles.paragraph}>
          {JSON.stringify(this.props.screenProps)}
        </Text>
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

export default Tab2;
