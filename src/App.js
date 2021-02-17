import React  from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import GithubSearchApp from "./Components/GithubSearchApp";

let App = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="" className="navbar-brand"><h3>React Redux with GitHUb Profile Search</h3></a>
                </div>
            </nav>
            <Provider store={store}>
                <GithubSearchApp/>
            </Provider>
        </div>
    )
}

export default App;
