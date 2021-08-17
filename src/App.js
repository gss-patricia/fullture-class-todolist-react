import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header";

function App() {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  )

}

export default App;
