import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

// Style Buttons
const ss = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

// init State
const init = {
  displayValue: '0',
  clearDisplay: false, // if previous number needs be clear when true
  operation: null, // +. -. *, /
  values: [0, 0],
  current: 0,
}

// Component Calculator Buttons
export default class App extends Component {
  state = {...init} // Get all init attributes

  // Add number
  add = n => {
    // terminal react-native log-android
    // console.debug(typeof this.state.displayValue)
    if(n === '.' && this.state.displayValue.includes('0')) {
      this.state.displayValue = '0.'
    }
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay // true
    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return
    }
    
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})


    if(n !== '.') {
      const nValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = nValue
      this.setState({values})
    }
  }

  // Clear calc memory 
  clear = () => {
    this.setState({...init})
  }

  // Receive operation
  setOp = operation => {
    if(this.state.current === 0) {
      // next number clearDisplay will be set 0 after press any operations
      this.setState({operation, current: 1, clearDisplay: true}) 
    } else {
        const equals = operation == '='
        const values = [...this.state.values]
      try {
        // eval transform string to number
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch(e) {
        values[0] = this.state.values[0]
      }
      values[1] = 0
        this.setState({
          displayValue: `${values[0]}`,
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: true,
          values,
      })
    }
    
  }

  render() { 
    return (
      <View style={ss.container}>
        <Display value={this.state.displayValue} />

        <View style={ss.buttons}>
          <Button label="AC" triple onClick={this.clear}/>
          <Button label="/" operation onClick={this.setOp}/>
          <Button label="7" onClick={this.add}/>
          <Button label="8" onClick={this.add}/>
          <Button label="9" onClick={this.add}/>
          <Button label="*" operation onClick={this.setOp}/>
          <Button label="4" onClick={this.add}/>
          <Button label="5" onClick={this.add}/>
          <Button label="6" onClick={this.add}/>
          <Button label="-" operation onClick={this.setOp}/>
          <Button label="1" onClick={this.add}/>
          <Button label="2" onClick={this.add}/>
          <Button label="3" onClick={this.add}/>
          <Button label="+" operation onClick={this.setOp}/>
          <Button label="0" double onClick={this.add}/>
          <Button label="." onClick={this.add}/>
          <Button label="=" operation onClick={this.setOp}/>
        </View>
      </View>
    )
  }
}

