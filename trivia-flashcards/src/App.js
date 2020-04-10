import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [
        {id: 1, question: "Question", answer: "Answer"},
        {id: 2, question: "Question", answer: "Answer"},
        {id: 3, question: "Question", answer: "Answer"}
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

  render() {

    return (
      <div className="App">
        <Card 
        question={this.state.currentCard.question}
        answer={this.state.currentCard.answer}
        
        />      
      </div>
    );

  }

}

export default App;
