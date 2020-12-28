import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
// import Routes from './routes/index';
import NavBar from './components/NavBar';

const App = () => (
  <div>
    <Router>
      <NavBar />
    </Router>

  </div>
);

export default App;
