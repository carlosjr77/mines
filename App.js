import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'
import { 
  createMinedBoard,
  cloneBoard, 
  hasExploded, 
  winGame,
  openField, 
  showMines,
  inverterFlag,
  flagsUsed
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
      lost: false,
      showLevelSelection: false
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
      Alert.alert("Parabéns!", "Você venceu!")
    }

    this.setState({ board, win, lost })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    inverterFlag(board, row, column)
    const win = winGame(board)

    if(win) {
      Alert.alert("Parabéns!", "Você venceu!")
    }
    
    this.setState({ board, win })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }


  render() {
    return (
      <View style={styles.container}>
      <LevelSelection 
        visible={this.state.showLevelSelection} 
        onLevelSelected={this.onLevelSelected}
        onCancel={() => this.setState({showLevelSelection: false})}/>
      <Header 
        flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
        onNewGame={() => this.setState(this.createState())}
        onFlagPress={() => this.setState({showLevelSelection: true})}/>
        <View style={styles.board}>
          <MineField board={this.state.board} 
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}/>
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
