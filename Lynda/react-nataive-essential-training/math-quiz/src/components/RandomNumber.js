import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";

class RandomNumber extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    handlePress = () => {
        if(this.props.isDisabled)  {
            return;
        }
        this.props.onPress(this.props.id);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isDisabled && styles.disabled]} key={this.props.index}>{this.props.number}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    random: {
        width: 100,
        height: 50,
        marginVertical: 25,
        marginHorizontal: 15,
        fontSize: 20,
        backgroundColor: '#bbb',
        textAlign: 'center',
        
    },
    disabled: {
        opacity: 0.3,
    }
});

export default RandomNumber;
