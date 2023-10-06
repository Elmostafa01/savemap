import styles from "./Logo.module.css";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Logo({height}) {
  return (
  <Link to='/'>
    <img src={logo} alt="SaveMap logo" style={{height: height}} className={styles.logo} />
  </Link>
  );
}

export default Logo;
