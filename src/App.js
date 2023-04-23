import './App.css';
import Sip from './MyComponents/Sip';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import { BrowserRouter as Router, Route,  Switch} from "react-router-dom";
import Lumpsum from './MyComponents/Lumpsum';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Sip/>
          </Route>
          <Route exact path="/lumpsum">
            <Lumpsum/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
