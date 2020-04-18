import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';


class App extends Component {
  constructor(props){
    super(props);   
       
   
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id: 1, question: '4 - "2" ', answer: "2"},
        {id: 2, question: '4 + "2" ', answer: "42"},
        {id: 3, question: '1 == "1" ', answer: "True"},
        {id: 4, question: '1 === "1" ', answer: "False"},
        {id: 5, question: "[] + [] ", answer: ' "" '},
        {id: 6, question: "[] + {}", answer: ' "[object Object]" '},
        {id: 7, question: ' {} + [] ', answer: "0"},
        {id: 8, question: ' {} + {} ', answer: "NaN"},
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
        <h1>JavaScript Triva Flashcards</h1>

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
