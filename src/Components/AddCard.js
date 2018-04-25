import React, { Component } from "react";

import '../Test.css';


class AddCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newCard:{},
            isSubmitHovered : false,
        };
    }

    handleSubmit(e) {
        this.setState({
                newCard:{
                    title: this.refs.title.value,
                }}, function () {
                this.props.addCard(this.state.newCard);
            }
        );
        if (this.state.newCard !== undefined)
        {
            fetch('http://localhost:8080/tutos/insert', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: this.refs.title.value,
                }),
            });
            console.log(this.refs.title.value);
        }
        e.preventDefault();
    }

    handleSubmitHover() {
        this.setState({
            isSubmitHovered: !(this.state.isSubmitHovered),
        });

    }

    render() {
        let submitBtnClass = this.state.isSubmitHovered ? "submitBtn submitBtnHover" : "submitBtn"
        return (
            <div className="AddCard">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h1>Ajouter une {this.props.category} :</h1>
                    <br />

                    <label className="field field_type2">
                        <input className="field__input" placeholder="ex : Facebook" ref={"title"}/>
                        <span className="field__label-wrap">
                            <span className="field__label">
                                Titre du tutoriel
                            </span>
                        </span>
                    </label>

                    <input className={submitBtnClass} type={"submit"} value={"Submit"}
                           onMouseEnter={this.handleSubmitHover.bind(this)}
                           onMouseLeave={this.handleSubmitHover.bind(this)}
                    />
                </form>
            </div>
        );
    }
}

export default AddCard;