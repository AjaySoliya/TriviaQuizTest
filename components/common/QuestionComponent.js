import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Header } from './Header';
import { Button } from './Button';
import { orangeColor } from '../../utils/constants';

const QuestionComponent = ({question, handleChange, selected, currentIndex, totalQuestion}) => {    
    return (
        <View style={{ backgroundColor: '#F5FCFF', flex:1 }}>
            <Header  headerText={currentIndex + 1 + ' OF ' + totalQuestion} />
            <View style={{ margin:20 }}>
            <Text style={{ color: orangeColor, fontSize:16, fontWeight:"500" }}>{question.question}</Text>
            </View>
            <View style={{ marginTop:30 }}>
            {question.options.map((option, i) => (
                <Button text={option}
                    onPress={() => handleChange(option)} key={i}
                    cardStyle={selected !== option ? styles.enterButtonDisableCardStyle : styles.enterButtonCardStyle}
                    btnStyle={selected !== option ? styles.enterButtonDisableStyle : styles.enterButtonStyle}
                />
            ))}
            </View>
        </View>         
    );
};
const styles = StyleSheet.create({
    enterButtonCardStyle: {
        backgroundColor: orangeColor,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        // borderRadius: 10,
        elevation: 0
    },
    enterButtonDisableCardStyle: {
        backgroundColor: 'white',
        shadowColor: orangeColor,
        borderWidth:4,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        // borderRadius: 10,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        elevation: 10
    },
    enterButtonStyle: {
        color: 'white',
        fontSize: 14,
        fontWeight:'300'
    },
    enterButtonDisableStyle: {
        color: orangeColor,
        fontSize: 14,
        fontWeight:'300'
    },
});
export {QuestionComponent};
