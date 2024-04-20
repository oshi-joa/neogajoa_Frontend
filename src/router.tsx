import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Balance from './pages/Balance';
import Community from './pages/Community';
import MyInfo from './pages/MyInfo';
import ClothesStyle from './pages/ClothesStyle';
import OnBoarding from './pages/auth/OnBoarding';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/my-info" element={<MyInfo />} />
        <Route path="/clothes-style" element={<ClothesStyle />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
};

export default Router;
