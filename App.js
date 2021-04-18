import './App.css';
import Header from './Header';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Account from './Account';
import Transactions from './Transactions';
import Banker from './Banker';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route exact path='/login' component={Login} ></Route>
        <Route exact path='/account' component={Account} ></Route>
        <Route exact path='/transactions' component={Transactions} ></Route>
        <Route exact path='/banker' component={Banker} ></Route>
      </Switch>

    </div>
  );
}

export default App;
