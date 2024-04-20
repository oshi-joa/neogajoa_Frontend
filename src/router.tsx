import { Route, Routes } from 'react-router-dom';
import OutletRouter from './outletRouter';
import Login from './pages/auth/Login';
import ClothesStyle from './pages/ClothesStyle';
import Code from './pages/code';
import Community from './pages/Community';
import Gamepage from './pages/game';
import Home from './pages/Home';
import MyInfo from './pages/MyInfo';
import Signup from './pages/signup';

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<OutletRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/balance" element={<Gamepage />} />
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/clothes-style" element={<ClothesStyle />} />
          <Route path="/community" element={<Community />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/code" element={<Code />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
