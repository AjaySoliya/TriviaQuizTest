import React, {Component} from 'react';
import axios from 'axios';
import Loading from 'react-native-whc-loading';
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import { QuestionComponent } from '../components/common';
import { orangeColor } from '../utils/constants';

export default class QuestionsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionsList: [],
      currentQuestion: 0,
      answer: {},
      seconds: 0
    }
  }

  handleNext = (count, isNext) => {
    const { currentQuestion,answer } = this.state;
    if(isNext && !answer[currentQuestion]) return false;
    this.setState((state) => ({currentQuestion: state.currentQuestion + count}));
  }

  handleChange = (option, i) => {
      this.setState((state) => ({answer: {...state.answer, [i]: option}}));
  }

  shuffle = (options) => {
    let ctr = options.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = options[ctr];
        options[ctr] = options[index];
        options[index] = temp;
    }
    return options;
}

  getRandomOptions(allQuetions) {
      return allQuetions.map(q => ({
        question: q.question,
        options: this.shuffle([...q.incorrect_answers, q.correct_answer]),
        correct_answer: q.correct_answer
      }));
  }

  getQuestions() {
    this.refs.loading.show();
    axios("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple").then(response => {
      this.refs.loading.close();
      this.setState({questionsList: this.getRandomOptions(response.data.results)});
      this.interval = setInterval(() => {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
      }, 1000);
    }).catch(error =>{
      this.refs.loading.close();
    });
  }

  componentDidMount(){
    this.getQuestions();
  }

  playAgian() {
    this.setState({questionsList: [], currentQuestion: 0, answer: {},seconds: 0}, () => {
      this.getQuestions();
    });
  }

  getResult = () => {
    const {answer, questionsList, currentQuestion} = this.state;
    if(!answer[currentQuestion]) return false;
    let count = 0;
    questionsList.forEach((question, i) => {
      if(question.correct_answer === answer[i]) {
        count = count + 1;
      }
    })
    this.props.navigation.navigate('ResultScreen',{totalQuestion: questionsList.length, correctAnswer: count, timeTakeForQuiz: this.state.seconds, onGoBack: () => this.playAgian()});
  }

  render() {
    const { questionsList, currentQuestion, answer } = this.state;
    return (
      <View style={styles.container}>
        {questionsList.map((q, i) => (
          currentQuestion === i ? <QuestionComponent question={q} totalQuestion={questionsList.length} currentIndex={i} handleChange={(a) => this.handleChange(a, i)} selected={answer[i]}/>: null
        ))}
        <View style={{ height:60, flexDirection: 'row', marginBottom:24 }}>
          {currentQuestion > 0 && <TouchableOpacity onPress={() => this.handleNext(-1)} style={styles.nextPrevButtonStyle}>
            <Text style={styles.nextPrevButtonTextStyle}>
              Previous
            </Text>
          </TouchableOpacity> }
          {currentQuestion !== questionsList.length - 1 && currentQuestion < questionsList.length && <TouchableOpacity onPress={() => this.handleNext(1, true)} style={styles.nextPrevButtonStyle}>
            <Text style={styles.nextPrevButtonTextStyle}>
              Next
            </Text>
          </TouchableOpacity>}
          {currentQuestion === questionsList.length - 1  && <TouchableOpacity onPress={this.getResult} style={styles.nextPrevButtonStyle}>
            <Text style={styles.nextPrevButtonTextStyle}>
              Finish
            </Text>
          </TouchableOpacity>}
        </View>
        <Loading ref="loading" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  nextPrevButtonStyle:{
    flex:1, 
    justifyContent: 'center', 
    alignItems:'center', 
    height:60,
    shadowColor: orangeColor,
    borderWidth:4,
    marginLeft:20,
    marginRight:20,
    borderColor: orangeColor,
    borderRadius: 30
  },
  nextPrevButtonTextStyle:{
    color: orangeColor, 
    fontWeight:'900', 
    fontSize:18, 
    textDecorationLine: 'underline',
  }
});
