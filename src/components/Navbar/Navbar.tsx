import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href='/'>FriendsApp</a>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href='/home'>Home</a>
        </li>
        <li>
          <a href='/profile'>Profile</a>
        </li>
        <li>
          <a href='/messages'>Messages</a>
        </li>
        <li>
          <a href='/notifications'>Notifications</a>
        </li>
        <li>
          <a href='/settings'>Settings</a>
        </li>
      </ul>
      <div className={styles.authButtons}>
        <a href='/login' className={styles.loginBtn}>
          Login
        </a>
        <a href='/signup' className={styles.signupBtn}>
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
