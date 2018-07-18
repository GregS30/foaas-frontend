import React, { Component } from 'react';
import './App.css';
import endpoints from './endpoints'
import UUID from 'uuid'

const BASE_URL = 'http://localhost:5000'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputName: "",
      inputEndpoint: "",
      message: "",
      insultsArray: [],
      inputEmail: "",
      inputUserName: "",
      emailArray: [],
      currentForm: "Pick Insults",
    }
  }

  renderAPIDropDown = () => {
    return endpoints.map(ep => <option value={ep.name} key={UUID()}>{ep.name}</option>)
  }

  handleInputName = (event) => {
    this.setState({
      inputName: event.target.value
    })

  }

  handlePickURL = (event) => {
    this.setState({
      inputEndpoint: event.target.value
    })
  }

  findEndpoint = () => {
    return endpoints.find(function(point){
      return point.name === this.state.inputEndpoint
    }.bind(this))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let url = this.findEndpoint().url
    let configObj = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    }
    fetch(BASE_URL + url, configObj).then(res => res.json()).then(json => {
      this.setState({
        message: json.message,
        subtitle: json.subtitle
      })
    });
  }

  renderMessage = () => {
    if (this.state.message==="") {
      return <p>Enter your name and pick something and submit</p>
    }
    else {
      return (
      <div>
        <p>{this.state.inputName} says {this.state.message}</p>
        <button onClick={this.handleSaveInsult}>Save</button>
        <button onClick={this.handleClearInsult}>Clear</button>
      </div>)
    }
  }

  handleSaveInsult = () => {
    let insults = [...this.state.insultsArray];
    insults.push(this.state.message)

    this.setState({
      insultsArray: insults,
      message: "",
    })
  }

  handleClearInsult = () => {
    this.setState({
      inputName: "",
      inputEndpoint: "",
      message: "",
    })
  }

  setFormAddEmail = () => {
    this.setState({
      currentForm: "Add Email"
    })
  }

  setFormListInsults = () => {
    this.setState({
      currentForm: "List Insults"
    })
  }

  setFormPickInsults = () => {
    this.setState({
      currentForm: "Pick Insults"
    })
  }
  renderInsultsArray = () => {
    if (this.state.currentForm === "List Insults") {
      return (
        <ul>
          {this.getInsults()}
        </ul>
      )
    }
    else {
      return null;
    }
  }


  setFormBlastInsults = () => {
    this.setState({
      currentForm: "Checkoff Insults"
    })
  }

  getInsults = () => {
    return (
      this.state.insultsArray.map((insult) => <li key={UUID()}>{insult}</li>))
  }

  getCheckoffInsults = () => {
    return (
      this.state.insultsArray.map((insult) => {
        return (<input type="checkbox" value={insult} onClick={this.handleCheckoffInsult}>{insult}</input>)
      }))
  }

  handleCheckoffInsult = () => {
    return null;
  }

  renderCheckoffInsultsForm = () => {
    console.log("in checkoff insults")
    if (this.state.currentForm === "Checkoff Insults") {
      return (
        <form onSubmit={this.handleCheckoffInsultsSubmit}>
          {this.getCheckoffInsults()}
          <input type="submit" value="submit"></input>
        </form>
      )
    }
    else {
      return null;
    }
  }

  handleCheckoffInsultsSubmit = () => {
    return null;
  }

  renderEmailForm = () => {
    if (this.state.currentForm === "Add Email") {
      return (
        <div>
        <form onSubmit={this.handleEmailSubmit}>
          <input type="text" value={this.state.inputUserName} onChange={this.handleInputUserName}/>
          <input type="text" value={this.state.inputEmail} onChange={this.handleInputEmail}/>
          <input type="submit" value="submit" />
        </form>
        </div>
      )
    }
    else {
      return null;
    }
  }

  handleInputUserName = (event) => {
    this.setState({
      inputUserName: event.target.value
    })
  }

  handleInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    })
  }

  handleEmailSubmit = (event) => {
    event.preventDefault();
    let emails = [...this.state.emailArray];
    emails.push({
      username: this.state.inputUserName,
      email: this.state.inputEmail
    })

    this.setState({
      emailArray: emails,
      inputUserName: "",
      inputEmail: "",
    })

    console.log(this.state.emailArray)
  }

  renderPickInsult = () => {
    if (this.state.currentForm === "Pick Insults") {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputName} onChange={this.handleInputName} />
            <select onChange={this.handlePickURL}>
              {this.renderAPIDropDown()}
            </select>
            <input type="submit" value="submit" />
          </form>
          {this.renderMessage()}
        </div>
      )
    }
    else {
      return null
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Steven and Greg's Amazing Insult App</h1>
        </header>
        <div>
          <button type="button" onClick={this.setFormPickInsults}>Pick Insults</button>
          <button type="button" onClick={this.setFormListInsults}>Display Insults</button>
          <button type="button" onClick={this.setFormAddEmail}>Add Email</button>
          <button type="button" onClick={this.setFormBlastInsults}>Blast Insults</button>
        </div>
          {this.renderPickInsult()}
        <div>
          {this.renderInsultsArray()}
        </div>
        <div>
          {this.renderEmailForm()}
        </div>
        <div>
          {this.renderCheckoffInsultsForm()}
        </div>
      </div>
    );
  }
}

export default App;
