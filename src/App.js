import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componests/Home/Home';
import Header from './Componests/Header/Header';
import Footer from './Componests/Footer/Footer';

import Blogs from './Componests/Blogs/Blogs';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Componests/About/About';
import Login from './Componests/Login/Login';
import SignUp from './Componests/SignUp/SignUp';
import NotFound from './Componests/NotFound/NotFound';
import Details from './Componests/Details/Details';
import RequirAuth from './Componests/RequirAuth/RequirAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        {/* ata ota dita hobe */}
        <Route path='/about' element={<RequirAuth><About></About></RequirAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
