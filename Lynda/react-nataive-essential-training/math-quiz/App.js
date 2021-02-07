import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from "./src/components/Game";

export default class App extends React.Component  {

  state = {
    gameId: 1
  };

  resetGame = () => {
    this.setState((prevState) => {
      return { gameId: prevState.gameId + 1};
    });
  };

  render() {
    return (
      <Game 
        key={this.state.gameId} 
        onPlayAgain={this.resetGame}
        randomNumberCount={6} 
        initialSeconds={10}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
