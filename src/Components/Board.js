import React, {Component} from 'react';
import  {Route, Router} from "react-router";

import logo from '../logo.svg';
import Card from './Card'
import '../Test.css';

class Board extends Component{
    constructor() {
        super();

    }

    render(){
        /*this.props.cards.sort(function(a, b){
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        });*/

        const listItems = this.props.cards.map((number, index) =>
            <ol key={index}>
                <Card
                    value={number.title.toString()}
                    source={logo}
                />
            </ol>
        );

        return(
            <div className="Grid">
                <h1>{this.props.value}</h1>
                    <ul>{listItems}</ul>
            </div>
        );
    }
}


export default Board;
