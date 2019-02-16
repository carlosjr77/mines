import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import params from './src/params'
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
      board: createMinedBoard(rows, cols, this.minesAmount()),
      win: false, 
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExploded(board)
    const win = winGame(board)

    if(lost) {
      showMines(board)
      Alert.alert("perdeeeeeeu!", "Seu animal!! Tente novamente, seu bosta!")
    }

    if(win) {
      showMines(board)
      Alert.alert("Parabéns!", "Você venceu!")
    }
    this.setState({ board, win, lost })
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField}/>
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
