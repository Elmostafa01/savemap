import styles from "./Logo.module.css";
import logo from '../images/logo.png'

function Logo() {
  return <img src={logo} alt="SaveMap logo" className={styles.logo} />;
}

export default Logo;
