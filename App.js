import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'
import MineField from './src/components/MineField'
import { 
  createMinedBoard,
  cloneBoard, 
  hasExploded, 
  winGame,
  openField, 
  showMines
 } from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props) 
      this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(rows * cols * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    textAlign: 'center',
    backgroundColor: '#AAA'
  }
});
