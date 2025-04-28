import React from 'react'
import styles from './Shop.module.css'
const Shop = () => {
  return (
    <div>
        <div className={styles.shop}>
            <h6>Spring / Summer Collection 2017</h6>
            <h1>Get up to 30% Off New Arrivals</h1>
            <button><a href="/shop">SHOP NOW</a></button>
        </div>
    </div>
  )
}

export default Shop