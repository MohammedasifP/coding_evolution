import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import { Addcity } from './Components/Add_city/Add_city';


function App() {
  return (
    <div>
    <Home/>
    <Routes>
      <Route path="/addcity" element={<Addcity/>}/>
    </Routes>
    </div>
  );
}

export default App;
