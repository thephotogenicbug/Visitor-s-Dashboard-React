import { HashRouter, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Thankyou from './Components/Thankyou';
import Entires from './Components/Entries';
import './App.css';

function App() {
  return (
    <div className="App">
     <HashRouter>
     <Header/>
       <Route exact path='/' component={Dashboard}/>
       <Route exact path='/entires' component={Entires}/>
       <Route exact path='/thankyou' component={Thankyou}/>
     </HashRouter>
     

    </div>
  );
}

export default App;
