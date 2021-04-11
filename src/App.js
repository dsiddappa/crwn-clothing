import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component' ;
import {Switch, Route} from 'react-router-dom';

const HatsPage = (props) => (
   <div>
    <h1>Hats page</h1>
    {console.log(props)}
  </div>
  );

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop/hats' component={HatsPage}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
