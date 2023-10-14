import styles from "./Logo.module.css";
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Logo({height}) {
  return (
  <Link className="saveplace" to='/'>
    <img src={logo} alt="SaveMap logo" 
      style={{height: height}} 
      className={styles.logo} 
    />
    <p>SavePlace</p>
  </Link>
  );
}

export default Logo;
