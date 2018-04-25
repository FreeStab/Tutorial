import React, { Component } from 'react';

import './App.css';

import Board from './Components/Board'
import AddCard from "./Components/AddCard";

import $ from 'jquery';


/*class Icon extends  Component{
    render(){
        return(
            <img src={logo} className="App-logo" alt="logo" />
        );
    }
}
*/
class App extends Component {
    constructor(props) {
        super(props);
        this.greetings = "Welcome to React";
        this.state = {
            cards: [],
            todos: [],
            response: [],
        };
    }

    /*getTodos(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({todos: data}, function () {
                    console.log(this.state);
                })
            }.bind(this),
            error:function (xhr, status, err) {
                console.log(err);
            }
        })
    }*/

    getCards()
    {
        this.setState( {cards:[
                {
                    title: "Google"
                },
                {
                    title: "Exel"
                },
                {
                    title: "Word"
                },
                {
                    title: "Wi-Fi"
                },
                {
                    title: "Imprimante"
                },
                {
                    title: "Connexion à distance"
                },
                {
                    title: "Skype"
                },
                {
                    title: "Site d'achat"
                }
            ]
        });
    }

    componentWillMount()
    {
        fetch('http://localhost:8080/tutos')
            .then((res) => {
                return res.json();
            })
            .then((resJson) => {
                console.log(resJson);
                this.setState({ cards: resJson.cards });
            })
            .catch(err => {
                console.log(err);
            });
      //  this.getCards();
       // this.getTodos();
    }

    componentDidMount()
    {
        fetch('http://localhost:8080/tutos')
            .then((res) => {
                return res.json();
            })
            .then((resJson) => {
                console.log(resJson);
                this.setState({ cards: resJson.cards });
            })
            .catch(err => {
                console.log(err);
            });

        /*fetch('http://localhost:8080/api/users/get-data')
            .then((res) => {
                return res.json();
            })
            .then((resJson) => {
                console.log(resJson);
            })
            .catch(err => {
                console.log(err);
            });
*/

        //this.getTodos();
    }



    handleAddCard(card)
    {
       // fetch('http://localhost:8080/api/users/insert');
        let cards = this.state.cards;

        console.log("title =" + this.state.cards);

        fetch('http://localhost:8080/tutos/insert', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: cards.title,
            }),
        });
        cards.push(card);
        this.setState({cards :cards});
    }

    render() {

        return (
            <div className="App">
                <Board value={"Les tutoriels"} cards={this.state.cards}/>
                <br />
                <AddCard addCard={this.handleAddCard.bind(this)} category={"carte"}/>

            </div>
        );
    }
}

export default App;
