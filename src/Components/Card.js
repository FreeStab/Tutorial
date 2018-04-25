import React, { Component } from "react";


import '../Test.css';

let imgUrl = 'Olivander.jpg';
let styles = {
    Card: {
        background: '#DDDDDD url(' + imgUrl + ')',
        backgroundImage: "url('Olivander.jpg')",
    }
};

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    handleSearch() {
        window.location = '/tutorial?title=' + this.props.value;
    }

    handleHover(){
        this.setState({
            isHovered: !(this.state.isHovered),
        });
    }

    render() {
        const cardClass = this.state.isHovered ? "Card CardHover" : "Card";
        const btnClass = this.state.isHovered ? "labelImg labelImgHover" : "labelImg";
        return (
            <div className={cardClass}
                 style={styles.Card}
                 onMouseEnter={this.handleHover.bind(this)}
                 onMouseLeave={this.handleHover.bind(this)}
                 onClick={() => this.handleSearch()}>
                <p>{this.props.value}</p>
                <img className={btnClass}
                     src={this.props.source} alt={""}/>

            </div>
        );
    }
}

export default  Card;