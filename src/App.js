import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Supply from './Suppliers/Supply';
class App extends React.Component {
  render() {
    return (
      <Router>
         <div>
           <h1>Invoives_Web</h1>
           <ul>
             <li>
               <Link to="/Supply">
               Home
               </Link>
             </li>
            </ul>
            <hr/>
            <Switch>
            <Route exact path="/Supply" component={Supply}/>
            </Switch>
         </div>
         
      </Router>     
    );
  }
}

export default App;
