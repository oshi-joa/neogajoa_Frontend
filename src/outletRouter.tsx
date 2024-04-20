import { Outlet } from 'react-router-dom';
import NavigationBar from './components/common/Footer';

export default function OutletRouter() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
