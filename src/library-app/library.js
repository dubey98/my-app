import React,{Component} from "react";

class Library extends Component{
    render(){
        return (
            <div className="library">
                
            </div>
        );
    }
}

class Book extends Component {
    constructor(props){
        super(props);
        this.name = props.name;
        this.author = props.author;
        this.pages = props.pages;
        this.isRead =props.isRead;
    }
    render(){
        return (
            <div className="book-card">
                <h1>{this.name}</h1>
                <h3>{this.author}</h3>
                <h4>{this.pages}</h4>
                <p>{this.isRead}</p>
            </div>
        );
    }
}

export default Book;