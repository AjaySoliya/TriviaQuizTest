import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {orangeColor} from '../../utils/constants';
import {Card} from "./Card";

const Button = ({cardStyle, btnStyle, onPress, text}) => {
    const {buttonStyle, textStyle, containerViewStyle} = styles;
    return (
        <Card style={[containerViewStyle, cardStyle]}>
            <TouchableOpacity onPress={onPress} style={[buttonStyle]}>
                <Text style={[textStyle, btnStyle]}>
                    {text}
                </Text>
            </TouchableOpacity>
        </Card>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        color: orangeColor,
        fontWeight: '900',
        fontSize: 14,
        width: '100%',
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'clear',
        borderRadius: 5,
        borderWidth: 0,
        borderColor: 'clear',
        justifyContent: 'center',
    },
    containerViewStyle: {
        backgroundColor: 'clear',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: orangeColor,
        borderWidth: 0,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
    }
};

export {Button};
