import { Card } from 'antd';
import React from 'react';
import background from '../assets/background.png';

export default function WelcomeCard() {
  return (
    <Card
      style={{
        padding: 10,
        height: 320,
        borderRadius: 20,
        objectFit: 'contain',
        overflow: 'hidden',
      }}
      cover={
        <img
          src={background}
          height={300}
          alt="background"
          style={{ borderRadius: 10, opacity: 0.8 }}
        />
      }
    >
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '30px',
          fontSize: '34px',
        }}
      >
        <p>Good Afternoon, Varun</p>
      </div>
      <Card
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          border: 'none',
          borderRadius: 20,
          position: 'absolute',
          bottom: '20px',
          right: '30px',
          width: '250px',
          height: '100px',
        }}
      >
        <p style={{ fontSize: '18px', marginTop: '5px' }}>
          Update count tracker
        </p>
        <span style={{ fontSize: '20px', marginTop: '5px' }}>10</span>
      </Card>
    </Card>
  );
}
