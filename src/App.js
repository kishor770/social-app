import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import MyProfile from './components/MyProfile';
import Edit from './components/Edit';
import Posts from './components/Posts'
import Header from './components/home/Header';
import Profile from './components/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Header islog={"true"}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;