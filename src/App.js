import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import './app.css';
import Home from './pages/Home/Home';
import Service from './pages/Service';
import Product from './pages/Product';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Router>
       <NavBar />
       <Routes>
       <Route exact path='/' element={< Home />}></Route>
       <Route exact path='/services' element={< Service />}></Route>
       <Route exact path='/products' element={< Product />}></Route>
       <Route exact path='/sign-up' element={< SignUp />}></Route>
       </Routes>
    </Router>
    </>
  );
}

export default App;
