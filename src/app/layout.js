import React from 'react';

import './styles.css';

export const metadata = {
  title: 'Hello Next JS',
  description: 'For the Joy of React course',
};

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();
  return (
    <html lang='en'>
      <body>
        <header></header>
        {children}
        <footer>Page rendered on {timestamp}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
