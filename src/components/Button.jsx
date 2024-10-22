import React from 'react';

export default function Button({ type }) {
  return (
    <>
      {type === 'primary' ? (
        <button style={{
          backgroundColor: '#1A73E8', 
          color: 'white', 
          padding: '16px 50px', 
          borderRadius: '4px', 
          fontSize: '16px',
        }}>
          Button
        </button>
      ) : (
        <button style={{
          backgroundColor: '#27A5E5', 
          color: 'white', 
          padding: '16px 50px', 
          borderRadius: '4px', 
          fontSize: '16px',
        }}>
        Button
        </button>
      )}
    </>
  )
}


