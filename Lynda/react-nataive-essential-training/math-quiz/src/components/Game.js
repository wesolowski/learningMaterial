import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from "prop-types";
import RandomNumber from "./RandomNumber.js";

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
        initialSeconds: PropTypes.number.isRequired,
        onPlayAgain: PropTypes.func.isRequired,
    };

    state = {
        selectedIds: [],
        remainingSeconds: 10,
    }

    gameStatus= 'PLAYING';

    randomNumber = Array
        .from({ length: this.props.randomNumberCount})
        .map(() => 1 + Math.floor(10 * Math.random()))
    
    target = this.randomNumber
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0);


    shuffle = (array) => {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    };
    shuffledRandomNumbers = this.shuffle(this.randomNumber);

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return { remainingSeconds: prevState.remainingSeconds -1}
            }, () => {
                if(this.state.remainingSeconds === 0) {
                    clearInterval(this.intervalId);
                }
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    isNumberSelected = (numberIndex) => {
        return this.state.selectedIds.indexOf(numberIndex) >= 0
    };

    componentWillUpdate(nextProps, nextState) {
        if(
            nextState.selectedIds !== this.state.selectedIds || 
            nextState.remainingSeconds === 0
        ) {
            this.gameStatus = this.calcGameStatus(nextState)
            if (this.gameStatus !== 'PLAYING') {
                clearInterval(this.intervalId);
            }
        }
    };

    calcGameStatus = (nextState) => {
        const sumSelected = nextState.selectedIds.reduce((acc, curr) => {
            return acc + this.randomNumber[curr]
        }, 0);

        if (nextState.remainingSeconds === 0) {
            return 'LOST'
        }

        if(sumSelected < this.target) {
            return 'PLAYING'
        }

        if (sumSelected === this.target) {
            return 'WON'
        }


        if (sumSelected > this.target) {
            return 'LOST'
        }
    };

    selectNumber = (numberIndex) => {
        this.setState((prevState) => ({
           selectedIds: [...prevState.selectedIds, numberIndex]
        }));
    };
  

    render() {
        const gameStatus = this.gameStatus;
        return (
            <View style={styles.container}>
                <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
                <View style={styles.randomContainer}>
                    {this.shuffledRandomNumbers.map((randomNumber, index) => 
                        <RandomNumber 
                            key={index} 
                            id={index}
                            number={randomNumber} 
                            isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
                            onPress={this.selectNumber}
                        />
                    )}
                </View>
                {this.gameStatus !== 'PLAYING' && (
                    <Button title="Play Again" onPress={this.props.onPlayAgain} />
                )}
                <Text>
                    {gameStatus}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },

    target: {
        fontSize: 50,
        backgroundColor: '#bbb',
        margin: 50,
        textAlign: 'center'
    },

    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },

    STATUS_PLAYING: {
        backgroundColor: '#bbb',
    },


    STATUS_WON: {
        backgroundColor: 'green',
    },


    STATUS_LOST: {
        backgroundColor: 'red',
    },
});

export default Game;
