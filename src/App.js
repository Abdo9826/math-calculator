import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Nav from './components/nav';
import Home from './components/home';
import Quote from './components/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/quote" element={<Quote />} />
            <Route exact path="/calculator" element={<Calculator />} />
          </Routes>
        </Router>
      </div>
      // <div>
      //   <Nav />
      //   <Switch>
      //     <Route path="/" exact>
      //       <Home />
      //     </Route>
      //     <Route path="/calculator">
      //       <Calculator />
      //     </Route>
      //     <Route path="/quote">
      //       <Quote />
      //     </Route>
      //   </Switch>
      // </div>
    );
  }
}

export default App;
