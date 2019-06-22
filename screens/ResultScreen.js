import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from './../components/common';
import { congratulation, orangeColor } from "../utils/constants";


export default class StartScreen extends React.Component {

    playAgain = () => {
        this.props.navigation.state.params.onGoBack();
        this.props.navigation.navigate('Questions');
    }

    render(){
        const {correctAnswer, totalQuestion, timeTakeForQuiz} = this.props.navigation.state.params;
        console.log("timeTakeForQuiz",timeTakeForQuiz);
        
        return(
            <View style={{ flex:1, backgroundColor:'#F5FCFF', alignContent: 'center', justifyContent: 'center' }}>
                <View style={{ marginLeft:25, marginRight:25, height:300, backgroundColor:'#F5FCFF', borderRadius: 10, }}>
                <Image source={congratulation} style={{ width: 150, height: 150, alignSelf: 'center', borderRadius:8 }} resizeMode='contain'/>
                    <Text style={{ color: orangeColor, alignSelf: 'center', fontWeight:'900', marginTop:10 }}>Total Questions: {totalQuestion} </Text>
                    <Text style={{ color: orangeColor, alignSelf: 'center', fontWeight:'900', marginTop:10 }}>Correct Answers: {correctAnswer}</Text>
                    <Text style={{ color: orangeColor, alignSelf: 'center', fontWeight:'900', marginTop:10 }}>Percentage: {(correctAnswer*100)/totalQuestion}%</Text>
                    <Text style={{ color: orangeColor, alignSelf: 'center', fontWeight:'900', marginTop:10, marginLeft:20, marginRight:20 }}>Time taken for complete quiz: {(parseFloat(Math.round(timeTakeForQuiz/60 * 100) / 100).toFixed(2))} Minutes</Text>
                </View>
                <Button text='Play Again'
                    onPress={() => this.playAgain()}
                    cardStyle={styles.enterButtonCardStyle}
                    btnStyle={styles.enterButtonStyle}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    enterButtonCardStyle: {
        backgroundColor: orangeColor,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 25,
        elevation: 0
    },
    enterButtonStyle: {
        color: 'white',
        fontSize: 18,
    },
  });