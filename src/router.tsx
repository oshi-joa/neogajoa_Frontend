import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Balance from './pages/Balance';
import Community from './pages/Community';
import MyInfo from './pages/MyInfo';
import ClothesStyle from './pages/ClothesStyle';
import Signup from './pages/signup';
import Code from './pages/code';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/my-info" element={<MyInfo />} />
        <Route path="/clothes-style" element={<ClothesStyle />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/code" element={<Code />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
