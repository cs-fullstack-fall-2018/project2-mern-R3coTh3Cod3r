import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import CollectionArray from "./CollectionArray";

class Header1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            stringInfo: ''
        }
    }
    submitChange =(event) =>{
        fetch('users/code',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        Username: String,
                        Title: String,
                        JournalEntry: String,
                        date: {
                            type: Date,
                            default: Date.now
                    },
                    }
                    ),

                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
    };

    InputOnChange =(event) =>{
        this.setState({stringInfo: event.target.value})


    };

    deleteByID(id){
        fetch('/users/code',
            {
                method: "POST",
                body: JSON.stringify({"id": id}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
    };

    render() {
        fetch('/users/code')


        return (
            <div>
                <CollectionArray arr={this.state.data}
                                 deleteFunction={this.deleteByID}/>
                <form onSubmit={this.submitChange}>
        <label>
            UserName:
            <input type ="text"  placeholder={"Enter your Name"} value={this.state.stringInfo} onChange={this.InputOnChange}/>
        </label>
                <br/>

                <label>
                    Title:
                    <input type="text" placeholder={"Please input title"}/>
                </label>
                <br/>
                <label>
                    Journal Entry:
                    <textarea rows={"4"} cols={"50"}> </textarea>
                </label>
                <br/>
                <input type="submit" value={"Submit"}/>
            <hr/>
                </form>
            </div>
        );
    }
}

export default Header1;
