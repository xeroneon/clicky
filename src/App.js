import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Nav from './components/Nav.js';
import Score from './components/Score.js';

const champions = [
  {
    id: 0,
    name: "Aatrox",
    src: "aatrox"
  },
  {
    id: 1,
    name: "Aurelion Sol",
    src: "aurelion-sol-classic"
  },
  {
    id: 2,
    name: "Ekko",
    src: "ekko-classic"
  },
  {
    id: 3,
    name: "Illaoi",
    src: "illaoi-classic"
  },
  {
    id: 4,
    name: "Kai'sa",
    src: "kaisa-classic"
  },
  {
    id: 5,
    name: "Kayn",
    src: "kayn-classic"
  },
  {
    id: 6,
    name: "Kled",
    src: "kled-classic"
  },
  {
    id: 7,
    name: "Leblanc",
    src: "leblanc-classic"
  },
  {
    id: 8,
    name: "Ornn",
    src: "ornn-classic"
  },
  {
    id: 9,
    name: "Pyke",
    src: "pyke-classic"
  },
  {
    id: 10,
    name: "Yasuo",
    src: "yasuo-classic"
  },
  {
    id: 11,
    name: "Zoe",
    src: "zoe-classic"
  },
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: Array(12).fill(null),
      score: 0,
      topScore: 0,
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  handleClick(i) {
    const cards = this.state.cards.slice();
    if (cards[i] === null) {
      cards[i] = true;
      this.setState({ cards: cards, score: this.state.score + 1 });

    } else {
      console.log("else");
      this.setState({ cards: Array(9).fill(null), score: 0 })
    }
    console.log(this.state.cards)
  }
  
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  
  
  
  render() {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score })
    }
    
      if (this.state.isLoading) {
        return <div>...Loading</div>
      }
    
    return (
      
      <div className="App">
        <Nav />
        <div className="container">
          <div className="row">
            <Score score={this.state.score} topScore={this.state.topScore} />
            {this.shuffle(champions).map(cards => {
              return <Card key={cards.id} src={cards.src} alt={cards.name} onClick={() => this.handleClick(cards.id)}>{cards.name}</Card>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
