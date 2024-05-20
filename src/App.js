import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import NavBar from './router/NavBar';
import About from './router/About';
import Profile from './router/Profile';
function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
