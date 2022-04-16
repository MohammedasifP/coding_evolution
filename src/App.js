import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import { Addcity } from './Components/Add_city/Add_city';
import { Navbar } from './Components/Navbar/Navbar';
import { Editcity } from './Components/Edit_City/Edit_City';
import { Deletecity } from './Components/Delete_city/Delete_city';


function App() {
  return (
    <div>
     
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addcity" element={<Addcity/>}/>
      <Route path="/edit/:id" element={<Editcity/>}/>
      <Route path="/delete/:id" element={<Deletecity/>}/>
    </Routes>
    </div>
  );
}

export default App;
