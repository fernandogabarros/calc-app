import React, {Component} from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'

// Style Display
const ss = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  displayValue: {
    fontSize: 60,
    color: '#f8f8f8'
  }
})

// Component Display
export default props =>
  <View style={ss.display}>
    <Text style={ss.displayValue} numberOfLines={1}> {props.value} </Text>
  </View>