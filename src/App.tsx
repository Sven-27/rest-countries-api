import 'styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from "components/pages/Details";
import Home from "components/pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
