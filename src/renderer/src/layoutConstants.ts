import React from 'react';

const headerStyle: React.CSSProperties = {
  color: 'black',
  backgroundColor: '#FAF9F6',
  height: '120px',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '87vh',
  lineHeight: '120px',
  color: 'black',
  backgroundColor: '#FAF9F6',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'left',
  color: 'black',
  backgroundColor: '#FAF9F6',
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '10px',
  color: 'black',
  backgroundColor: '#FAF9F6',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
};

const boxStyle: React.CSSProperties = {
  width: '100%',
  marginTop: '12px',
};

const wrapperStyle: React.CSSProperties = {
  width: '90%',
  margin: '70px auto',
};

export {
  headerStyle,
  contentStyle,
  siderStyle,
  footerStyle,
  layoutStyle,
  boxStyle,
  wrapperStyle,
};
