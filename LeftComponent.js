'use strict'
var React = require('react-native')
var {StyleSheet, Text, View} = React
var LeftComponent = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Left</Text>
      </View>
    )
  }
})
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F58911'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
module.exports = LeftComponent
