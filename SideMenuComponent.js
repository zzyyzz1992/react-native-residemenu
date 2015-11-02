'use strict'
var React = require('react-native')
var {LayoutAnimation, PanResponder, StyleSheet, View} = React
var AnimationExperimental = require('Animated')
var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width
console.log(AnimationExperimental.startAnimation)
var ResideMenuComponent = React.createClass({
  componentWillMount: function () {
    this.offset = 0
    this._panGesture = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy) && Math.abs(gestureState.dx) > 10
      },
      onPanResponderGrant: (evt, gestureState) => this.left = 0,
      onPanResponderMove: (evt, gestureState) => this.moveCenterView(gestureState.dx),
      onPanResponderRelease: this.moveFinished,
      onPanResponderTerminate: this.moveFinished
    })
  },
  moveCenterView: function (left) {
    if (!this.center) return
    // if ((this.offset + left) < 0) {
    //   this.left = -this.offset
    // }else {
    this.left = left * 1.3
    // }
    //
    if (this.offset + this.left >= 0) {
      //show left
      this.leftV.setNativeProps({style: {left: 0}})
      this.rightV.setNativeProps({style: {left: screenWidth}})
    }else {
      this.rightV.setNativeProps({style: {left: 0}})
      this.leftV.setNativeProps({style: {left: screenWidth}})
    }
    this.center.setNativeProps({style: {left: this.offset + this.left}})
  },
  moveFinished: function () {
    if (!this.center) return
    var offset = this.offset + this.left
    if (this.offset === 0) {
      if (offset > screenWidth * 0.25) {
        this.offset = screenWidth * 0.75
      }else if (offset < -screenWidth * 0.25) {
        this.offset = -screenWidth * 0.75
      }
    } else {
      if (offset < screenWidth * 0.5 && offset > -screenWidth * 0.5) {
        this.offset = 0
      }
    }
    LayoutAnimation.configureNext(animations.layout.easeInEaseOut)
    this.center.setNativeProps({style: {left: this.offset}})
  },
  render: function () {
    var centerView = this.props.renderCenterView ? this.props.renderCenterView() : null
    var leftView = this.props.renderLeftView ? this.props.renderLeftView() : null
    var rightView = this.props.renderLeftView ? this.props.renderRightView() : null


    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.left} ref={(leftV) => this.leftV = leftV}>
          {leftView}
        </View>
        <View style={styles.left} ref={(rightV) => this.rightV = rightV}>
          {rightView}
        </View>
        <View
          style={[styles.center, {left: this.offset}]}
          ref={(center) => this.center = center}
          {...this._panGesture.panHandlers}>
          {centerView}
        </View>
      </View>
    )
  }
})
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11003F'
  },
  center: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  left: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFFFF'
  }
})

var animations = {
  layout: {
    spring: {
      duration: 750,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 400
      }
    },
    easeInEaseOut: {
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY
      },
      update: {
        delay: 100,
        type: LayoutAnimation.Types.easeInEaseOut
      }
    }
  }
}
module.exports = ResideMenuComponent
