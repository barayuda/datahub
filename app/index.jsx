import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Welcome } from './components/Welcome';
import { ErrorLayout } from './components/ErrorLayout';
import { MainLayout } from './components/MainLayout';
import 'bootstrap'; // Can be changed to specific modules. eg. import 'bootstrap/js/dist/util';
import './main.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/error">
          <ErrorLayout />
        </Route>
        <Route path="/view">
          <MainLayout />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('eui-app-container'));