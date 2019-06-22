import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Header, Button } from './../components/common';
import {orangeColor} from '../utils/constants';
import QuestionsScreen from './QuestionsScreen';
import ResultScreen from './ResultScreen';

class StartQuizScreen extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    render() {
        return (
        <View style={styles.container}>
        <Header  headerText='Trivia Quiz Test'/>
        <View style={{ flex:1, justifyContent: 'center' }}>
        <Button text='START QUIZ'
            onPress={() => this.props.navigation.navigate('Questions')}
            cardStyle={styles.enterButtonCardStyle}
            btnStyle={styles.enterButtonStyle}
        />
        </View>
        </View>
        );
    }
}

const AppNavigator = createStackNavigator({
  Home: StartQuizScreen,
  Questions: QuestionsScreen,
  ResultScreen: ResultScreen
},{
    initialRouteName: "Home",
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);

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