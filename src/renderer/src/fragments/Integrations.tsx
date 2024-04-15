import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function Integrations() {
  return (
    <>
      <div
        style={{
          textAlign: 'left',
          marginInline: '35px',
          marginBottom: '-10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>Integrations</span>
        <PlusCircleOutlined
          onClick={() => {
            console.log('clicked add integration');
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: 'white',
          height: '10vh',
          margin: '25px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      />
    </>
  );
}
