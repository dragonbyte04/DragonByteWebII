import React from 'react';

const UsuarioCard = ({ usuario }) => {
  return (
    <div style={{ 
      border: '1px solid #db5cc8', 
      padding: '25px', /* Subimos un poco el padding */
      borderRadius: '15px', 
      minWidth: '240px', /* Un poco más anchas */
      backgroundColor: 'rgba(30, 2, 50, 0.8)',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
      backdropFilter: 'blur(10px)'
    }}>
      
      {usuario.imagen && (
        <img 
          src={usuario.imagen} 
          alt={usuario.nombre} 
          style={{ 
            width: '120px', /* Un poco más grande */
            height: '120px', 
            borderRadius: '50%',
            // LA CLAVE: 'contain' muestra el logo entero y reduce la pixelación
            objectFit: 'contain', 
            // Agregamos un fondo blanco y padding al logo para que resalte
            backgroundColor: '#ffffff', 
            padding: '5px',
            marginBottom: '20px', 
            border: '4px solid #db5cc8',
            boxShadow: '0 0 15px rgba(219, 92, 200, 0.5)' /* Brillo */
          }} 
        />
      )}

      <h3 style={{ margin: '0 0 10px 0', color: '#db5cc8', fontSize: '1.4em' }}>{usuario.nombre}</h3>
      <p style={{ margin: '5px 0', fontSize: '0.95em' }}><strong>{usuario.rol}</strong></p>
      <p style={{ margin: '8px 0', fontSize: '0.85em', color: '#B0A5C8', fontStyle: 'italic' }}>{usuario.email}</p>
    </div>
  );
};

export default UsuarioCard;