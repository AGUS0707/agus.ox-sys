
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Trello from "./components/Trello";

function App() {
  return (
    <div>

        <Router>

            <Switch>

                <Route path="/" exact component={Trello}/>


            </Switch>

        </Router>


    </div>
  );
}

export default App;
