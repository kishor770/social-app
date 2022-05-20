import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home.js';
import MyProfile from './components/MyProfile';
import EditProfile from './components/EditProfile';
import Posts from './components/Posts'
import Header from './components/home/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Header islog={"false"}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;