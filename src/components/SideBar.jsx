import { Outlet } from 'react-router-dom';
import AppNav from '../components/AppNav';
import Logo from '../components/Logo';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <Logo/>
        <AppNav />
        <Outlet/>
        <footer className='footer'>
          <p className='copyright'>
            &copy; Copyright {new Date().getFullYear()} by SaveMap.
          </p>
        </footer>
    </div>
  )
}

export default SideBar
