import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/12-03assignment' element={<Home />} />;
          <Route path='/register' element={<Register />}/>;
          <Route path='/profile' element={<Profile />}/>;
          <Route path='/login' element={<Login />}/>;
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
