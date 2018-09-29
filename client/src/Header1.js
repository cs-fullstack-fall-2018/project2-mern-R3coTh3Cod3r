import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Header1 extends Component {
    constructor(props){
    super(props);
    this.state = {
        data:[],
        stringInfo: ""
    }

}
sumbmitCollection = (event) => {
    fetch('/users/code',
        {
            method: "POST",
            body: JSON.stringify(
                {
                    Username: String,
                    Title: String,
                    JournalEntry: String,
                    date: {
                        type: Date,
                        default: Date.now,
                    headers: {
                        'Content-Type': 'application/json'
                    }

                }

                .then(data => data.json());
                event.preventDefault();
        }

}
    }
        render() {
        return (
            <div>
                <form onSubmit={}>
        <label>
            UserName:
            <input type="text" placeholder={"Enter Name"}/>
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

            </div>
        );
    }
}

export default Header1;
