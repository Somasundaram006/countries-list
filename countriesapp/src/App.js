import './App.css';
import { Provider } from "react-redux";
import store from "./store/store";
import RootComponent from './components/RootComponent';

function App() {
  return (
    <Provider store={store}>
    <RootComponent/>
    </Provider>
   
  );
}

export default App;
