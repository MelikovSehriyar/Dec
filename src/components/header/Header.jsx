import React from 'react'
import styles from './Header.module.css'
import { LuSearch } from 'react-icons/lu'
import { FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">COZA<span>STORE</span></Link>
      </div>
      <div className={styles.navbar}>
        <Link to="/">HOME</Link>
        <a href="#">SHOP</a>
        <a href="#">PROMOTION</a>
        <a href="#">PAGES</a>
        <Link to="/favorites">FAVORITES</Link>
        <Link to="/basket">BASKET</Link>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
      </div>
      <div className={styles.icons}>
        <LuSearch />
        <FaUser />
        <button><FaCartShopping /></button>
      </div>
    </div>
  )
}

export default Header