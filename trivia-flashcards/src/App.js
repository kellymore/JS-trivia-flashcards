import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';


// Classes are a type of function. Usually requires a constructor()
//  and super() to pass down props, but not always.
// We might need super() to use the 'this' keyword to bind it with the
// props being passed down to the constructor and the super

// The Component base class allows us to use some of the methods that 
// the React team has curated to tap into what we call the Component 
// Lifecycle. These methods (known as life cycle hooks more on these 
// to come) give us control over how our components work, and if 
// we’d like to use them, we have to build out a class component 
// that extends the React.Component parent class. 

class App extends Component {

  // By creating components as classes, you can set up a data 
  // object that your component is concerned with. This is done 
  // using state and setting up that object on our constructor 
  // method.
  constructor(props){

    // because we’re calling extends, we also need to 
    // call super(); otherwise we won’t have access the this
    super(props);   
       
  //  when you realize that you need a solution to the problem of 
  // how to keep the context of this within another function
  // we us bind()
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id: 1, question: '4 - "2" ', answer: "2", ecma: <a href="https://www.ecma-international.org/ecma-262/9.0/index.html#sec-subtraction-operator-minus">Why?</a> },
        {id: 2, question: '4 + "2" ', answer: "42", ecma: 'The addition operator either performs string concatenation or numeric addition'},
        {id: 3, question: '1 == "1" ', answer: "True",  ecma: <a href= "https://www.ecma-international.org/ecma-262/9.0/index.html#sec-abstract-equality-comparison"> Why?</a>},
        {id: 4, question: '1 === "1" ', answer: "False", ecma: <a href= "https://www.ecma-international.org/ecma-262/9.0/index.html#sec-strict-equality-comparison">Why?</a>},
        {id: 5, question: "[] + [] ", answer: ' "" ', ecma: <a href = "https://www.ecma-international.org/ecma-262/9.0/index.html#sec-abstract-equality-comparison">Why?</a>},
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

  // Once we have some data that we can render out to the DOM, 
  // we need a vehicle that will allow us to render that data. 
  // This is achieved with the JSX method render() from within 
  // the life-cycle hook.

  render() {

    return (
      <div className="App">
        <h1>JavaScript Triva Flashcards</h1>

        <div className="cardRow">
        <Card 
        question={this.state.currentCard.question}
        answer={this.state.currentCard.answer}
        ecma={this.state.currentCard.ecma}
        
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
