import React, { Component } from "react";

export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    
    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    render(){
        return (
            <div>
                <h1>Hello World!!</h1>
                <h2>the time right now is :{ this.state.date.toLocaleTimeString() }.</h2>
            </div>
        ); 
    }
}