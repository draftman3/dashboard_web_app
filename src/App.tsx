import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Page/Login-Page/Login';
import Welcome from './Page/Welcome-Page/Welcome';
import Home from './Page/Home-Page/Home';

function App() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/Login-Page' element={<Login />}></Route>
            <Route path='/Home-Page' element={<Home />}></Route>
        </Routes>
    </div>
  )
}

export default App
