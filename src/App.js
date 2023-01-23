import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dairy from './Components/Dairy';
import Flowers from './Components/Flowers';
import Fruites from './Components/Fruits';
import Vegetables from './Components/Vegetables'
import Home from './Components/Home';
import Invalid from './Components/Invalid'
import Fruits from './Components/Fruits';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Dairy' element={<Dairy />} />
      <Route path='/Flowers' element={<Flowers />} />
      <Route path='/Fruits' element={<Fruites/>}/>
      <Route path='/Vegetables' element={<Vegetables/>}/>
      <Route path='*' element={<Invalid />} />
    </Routes>
  );
}

export default App;
