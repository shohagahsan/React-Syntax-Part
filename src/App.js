import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component {
  state = {
    books: [
      {bookName: "book1", writer: "writer1"},
      {bookName: "book2", writer: "writer2"},
      {bookName: "book3", writer: "writer3"}
    ]
  };

  changeState = newBookName => {
    this.setState({
      books: [
        {bookName: newBookName, writer: "writer1111"},
        {bookName: "book2", writer: "writer2"},
        {bookName: "book3333", writer: "writer3333"}
      ]
    });
  }

changeByInput = event => {
  this.setState({
    books: [
      {bookName: event.target.value, writer: "writer1111"},
      {bookName: "book2", writer: "writer2"},
      {bookName: "book3333", writer: "writer3333"}
    ]
  });
}

  render() {
    const style = {
      border: "5px solid red",
      margin: "10px auto",
      padding: "20px",
      borderRadius: "10px",
      background: "green",
      color: "white"
    }
    return (
      <div className = "App">
        <h1 style = {style}>Book List</h1>
        <button onClick = {() => this.changeState("change by btn click")}>Change State</button>
        <input type = "text" onChange = {this.changeByInput} />
        <Book 
        bookName = {this.state.books[0].bookName} 
        writer = {this.state.books[0].writer} 
        inputName = {this.changeByInput} />
        <Book 
        bookName = {this.state.books[1].bookName} 
        writer = {this.state.books[1].writer} />
        <Book 
        bookName = {this.state.books[2].bookName} 
        writer = {this.state.books[2].writer} change = {() => this.changeState("change by heading click")} />
      </div>
    );
  }
}

export default App;
