import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            //message:"Hello Afgh"
            counter:0
    };
    increment(){
        this.setState(
           // message:"ohoo!!!You are Clicked me"
           {this.state.counter:this.state.counter+1}
        );
    };
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.increment()}>increment</button>
            </div>
        )
    }
};
