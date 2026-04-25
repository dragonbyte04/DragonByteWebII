import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Ejemplo del portaretratos, la imagen que cambian es el children
const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Navbar parte de arriba del portaretratos es fija */}
      <Navbar />
      
      {/* El hueco donde React va a inyectar el Login o el Registro */}
      <main style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </main>

      {/* Footer parte de abajo del portaretratos es fija*/}
      <Footer />
      
    </div>
  );
};

export default Layout;