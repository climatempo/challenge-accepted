import './App.style.css';
import Header from '../Components/Header';
import { useAppSelector } from '../hooks';

function App() {
  const theme = useAppSelector(state => state.theme.value);

  return (
    <div className={theme}>
      <Header/>
    </div>
  );
}

export default App;
