import React, { useEffect, useState } from 'react'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const wish = JSON.parse(localStorage.getItem('wish')) || []
    setFavorites(wish)
  }, [])

  return (
    <div className="card-container" style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px',
      padding: '20px'}}>
      {favorites.length === 0 ? <p>There are no products in favorites.</p> :
        favorites.map(item => (
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
            <span style={{ width: '85%', textAlign: 'center' }}>{item.title}</span>
            <span>${item.price}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Favorites