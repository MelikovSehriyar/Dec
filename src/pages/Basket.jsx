import React, { useEffect, useState } from 'react'

const Basket = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)
  }, [])

  return (
    <div className="card-container"style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px',
      padding: '20px'}}>
      {cart.length === 0 ? <p>Your basket is empty</p> :
        cart.map(item => (
          <div key={item.id} style={{
            width: '220px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '16px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#fff'
          }}>
            <img style={{ width: '150px' }} src={item.image} alt="" />
            <span style={{ width: '85%', textAlign: 'center',color:'black',fontWeight:'300' }}>{item.title}</span>
            <span style={{color:'#888',fontWeight:'300'}}>${item.price}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Basket