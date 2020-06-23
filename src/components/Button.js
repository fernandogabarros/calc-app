import React from 'react'
import {Dimensions, StyleSheet, Text, TouchableHighlight} from 'react-native'

// Style Button
const ss = StyleSheet.create({
  button: {
    fontSize: 35,
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width / 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center'
  },
  operation: {
    color: '#FFF',
    backgroundColor: '#fa8231',
  },
  button2x: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  button3x: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
})

// Component render Button
export default props => {
  const ssButton = [ss.button]

  if(props.double) ssButton.push(ss.button2x)
  if(props.triple) ssButton.push(ss.button3x)
  if(props.operation) ssButton.push(ss.operation)

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={ssButton}> {props.label} </Text>
    </TouchableHighlight>
  )
}