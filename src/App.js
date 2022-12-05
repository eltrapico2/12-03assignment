import './App.css';
import Navbar from './components/Navbar';

import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />;
          <Route path='/register' element={<Register />}/>;
          <Route path='/profile' element={<Profile />}/>;
        </Routes>
      </div>
    </div>
  );
}

export default App;
