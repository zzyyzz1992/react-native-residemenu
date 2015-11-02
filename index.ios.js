/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict'
var LeftComponent = require('./LeftComponent')
var RightComponent = require('./RightComponent');
var CenterComponent = require('./CenterComponent')
var ResideMenu = require('./SideMenuComponent')
var ResideMenuComponent = ResideMenu
var React = require('react-native')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React

var SideMenuDemo = React.createClass({
  render: function () {
    return (

      <ResideMenuComponent style={styles.container} renderCenterView={() => <CenterComponent/>} renderLeftView={() => <LeftComponent/>} renderRightView={() => <RightComponent/>}/>

    )
  }
})

var styles = StyleSheet.create({
  container: {

    backgroundColor: '#F5FC00'
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('SideMenuDemo', () => SideMenuDemo)
