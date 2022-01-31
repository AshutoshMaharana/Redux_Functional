import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import HooksIceCreamContainer from './Components/HooksIceCreamContainer';
import UserContainer from './Components/UserContainer';
//is it necesarry to subscribe
//what is provider
//can connect only be used fro props

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
       <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
