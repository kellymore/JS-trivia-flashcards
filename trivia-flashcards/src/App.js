import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import { DB_CONFIG } from './Config/Firbase/dbConfig';
import firebase from 'firebase/app';
import 'firebase/database'

class App extends Component {
  constructor(props){
    super(props);

    this.app = initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    

    this.updateCard = this.updateCard.bind(this)

    this.state = {
      cards: [
        {id: 1, question: "Question", answer: "Answer"},
        {id: 2, question: "Question2", answer: "Answer2"},
        {id: 3, question: "Question3", answer: "Answer3"},
        {id: 4, question: "Question4", answer: "Answer4"},
        {id: 5, question: "Question5", answer: "Answer5"},
        {id: 6, question: "Question6", answer: "Answer6"}
      ],
      currentCard: {}

    }
  }

  componentWillMount(){

    const currentCards = this.state.cards

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return (card); 
  }

  updateCard(){

    const currentCards = this.state.cards;

    this.setState({
      
      currentCard: this.getRandomCard(currentCards)

    })
  }

  render() {

    return (
      <div className="App">

        <div className="cardRow">
        <Card 
        question={this.state.currentCard.question}
        answer={this.state.currentCard.answer}
        
        />           
        </div>

        <div className="buttonRow">
        <DrawButton drawCard={this.updateCard} />
        </div>
             
      </div>
    );

  }

}

export default App;
