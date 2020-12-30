import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/Searchbar";


function App() {
  return (
    <div>
        <div className="Header">
            <h1>CLIMATEMPO</h1>
        </div>

        <div className="Main">
            <Searchbar></Searchbar>
        </div>
    </div>
  );
}

export default App;
