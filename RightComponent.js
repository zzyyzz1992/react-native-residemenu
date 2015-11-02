'use strict'
var React = require('react-native')
var {StyleSheet, Text, View} = React
var RightComponent = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Right</Text>
      </View>
    )
  }
})
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FC99'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
module.exports = RightComponent
