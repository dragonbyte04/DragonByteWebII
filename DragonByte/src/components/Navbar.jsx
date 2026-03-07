import React from 'react';

const Navbar = ({ setVistaActual }) => {
  return (
    <nav style={{ background: '#1a1a2e', padding: '15px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ margin: 0, color: '#d4af37' }}>DRAGONBYTE</h2>
      <div>
        <button 
          onClick={() => setVistaActual('formulario')} 
          style={{ marginRight: '15px', padding: '8px 15px', cursor: 'pointer', background: '#6b21a8', color: 'white', border: 'none', borderRadius: '5px' }}>
          Create Account
        </button>
        <button 
          onClick={() => setVistaActual('lista')} 
          style={{ padding: '8px 15px', cursor: 'pointer', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px' }}>
          Community
        </button>
      </div>
    </nav>
  );
};

export default Navbar;