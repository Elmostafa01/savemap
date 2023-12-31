import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'
import Logo from '../components/Logo';

const PageNav = ({height}) => {
  return (
    <nav className={styles.nav}>
      <Logo height={height}/>
      <ul>
        <li>
            <NavLink to="/product">Product</NavLink>
        </li>
        <li>
            <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav
