import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import AddProject from './components/Project/AddProject';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
