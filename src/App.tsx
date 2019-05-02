import React from "react";
import "./App.css";
import axios from "axios";

interface IState {
  picture: string;
}

export default class App extends React.Component<{}, IState> {
  state = {
    picture: ""
  };

  componentDidMount() {
    this.requestPictureFetch();
    //this.requestPictureAxios();
  }

  requestPictureAxios = (): void => {
    axios
      .get("https://aws.random.cat/meow")
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.setState({ picture: data.file });
      })
      .catch(error => {
        console.error(error);
      });
  };

  requestPictureFetch = (): void => {
    fetch("https://aws.random.cat/meow")
      .then(response => {
        return response.json();
      })
      .then(jsonObj => {
        this.setState({ picture: jsonObj.file });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="container">
          <h1>Pretty Litty Kitty</h1>
          <img
            className="bodyImage"
            src={this.state.picture}
            width="30%"
            height="30%"
          />
          <button className="kittyButton" onClick={this.requestPictureAxios}>
            Press me!
          </button>
        </header>
      </div>
    );
  }
}
