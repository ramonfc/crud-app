import logo from './logo.svg';
import './App.css';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './components/User/User';
import Register from './components/Register/Register'
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users" component={User}/>
      <Route component={PaginaNoEncontrada} />
    </Switch>
  </BrowserRouter>

  );
}

export default App;
