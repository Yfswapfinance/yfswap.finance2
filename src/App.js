import './App.css';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router> 
     <Sidebar/>
     {/* <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/product/:productId" component={ProductScreen} />
            <Route path="/cart" exact component={CartScreen} />
          </Switch> */}
    </Router>
 
  );
}

export default App;
