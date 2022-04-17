import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Service from './Components/Home/Service/Service';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound.js/NotFound';
import CheckOut from './Components/CheckOut/CheckOut';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/services' element={<Service/>}></Route>
        <Route path = '/blog' element={<Blog/>}></Route>
        <Route path = '/about' element={<About/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route> 
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
