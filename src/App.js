import "./App.css"
import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
function App(){
		return (
      
			<main className="App">
			<h1>Admin Login</h1>
      <div className="ui divider"></div>
        <div className="ui form"></div>
        <div className="field"></div>
        <label>Username</label>
        <input type="text" name="username" placeholder="username">
        </input>
        <div className="field"></div>
        <label>Password</label>
        <input type="password" name="password" placeholder="password">
        </input>
          <button className="fluid ui button">login</button>
        
			</main>
		);
	}


export default App;
