import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Drinks from './Dinks';
import Home from './Home';
import DrinkDetails from './DrinkDetails';
import NoPage from './NoPage';
import Search from './Search';
import Searched from './Searched';
import { GiKnifeFork } from 'react-icons/gi';


function App() {
  return (
    <div className="App">

      <Categories />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks/:type" element={<Drinks />} />
        <Route path="/details/:id" element={<DrinkDetails />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
