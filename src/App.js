import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Baserouter from "./routes/Routes";
import "antd/dist/antd.css";
import "./App.css";

// for redux
import { Provider } from "react-redux";
import store from "./redux-store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Baserouter />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
