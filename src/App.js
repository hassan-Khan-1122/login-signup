import { BrowserRouter, Routes  , Route} from 'react-router-dom';
import './App.css';
import Navbr from './Components/Navbar/Navbr';
import Signup from './Components/Signup';
 import Login from './Components/Login';
 import Home from './Components/Navbar/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <Navbr/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Toaster />
    </BrowserRouter>
   
  );
}

 export default App;