import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });

    const storedWish = JSON.parse(localStorage.getItem('wish')) || []
    setWishlist(storedWish)
  }, [])

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let existing = cart.find(x => x.id === item.id)

    if (existing) {
      cart = cart.map(x =>
        x.id === item.id ? { ...x, count: x.count + 1 } : x
      )
    } else {
      cart = [...cart, { ...item, count: 1 }]
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const addToWish = (item) => {
    let wish = JSON.parse(localStorage.getItem('wish')) || []
    const exists = wish.find(x => x.id === item.id)

    if (exists) {
      wish = wish.filter(x => x.id !== item.id)
    } else {
      wish = [...wish, item]
    }

    setWishlist(wish)
    localStorage.setItem('wish', JSON.stringify(wish))
  }

  const inWish = (id) => wishlist.some(item => item.id === id)

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px',
      padding: '20px'
    }}>
      {data.map(item => (
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
          <img style={{ width: '100px', height: '130px', objectFit: 'contain' }} src={item.image} alt="" />
          <span style={{color:'black',fontWeight:'300'}}>{item.title}</span>
          <span style={{color:'#888',fontWeight:'300'}}>${item.price}</span>
          <button
            style={{
              padding: '8px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor:'#025',
              color: 'white',
              cursor: 'pointer',
              marginTop: '10px',
              width: '100%'
            }}
            onClick={() => addToCart(item)}
          >
            Add to basket
          </button>
          <button
            style={{
              padding: '8px',
              border: 'none',
              borderRadius: '6px',
              backgroundColor: '#888',
              color: 'white',
              cursor: 'pointer',
              marginTop: '6px',
              width: '100%'
            }}
            onClick={() => addToWish(item)}
          >
            {inWish(item.id) ? 'Remove' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home