import React, { useState } from 'react';
import UsuarioCard from '../components/UsuarioCard'; 
import fotoNelson from '../assets/img/Nelson.jpg';
import fotoPaola from '../assets/img/Paola.jpg';
import fotoSalome from '../assets/img/Salome.jpg';
import fotoPaulina from '../assets/img/Paulina.jpg';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Nelson Lozano', rol: 'Analista WFM', email: 'nelson@ejemplo.com', imagen: fotoNelson },
    { id: 2, nombre: 'Salome Alzate', rol: 'Estudiante', email: 'msalomealzatep@gmail.com', imagen: fotoSalome },
    { id: 3, nombre: 'Paulina Londoño', rol: 'Estudiante', email: 'paulinalondonodiaz45@gmail.com', imagen: fotoPaulina },
    { id: 4, nombre: 'Paola Molina', rol: 'Gerente de Proyecto', email: 'Pmova13@gmail.com', imagen: fotoPaola }
  ]);

  return (
    
    <div style={{ padding: '20px', paddingTop: '100px', paddingBottom: '50px', width: '100%' }}>
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '40px', fontSize: '2.5em', textTransform: 'uppercase', letterSpacing: '2px' }}>
        DragonByte Team
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {usuarios.map((user) => (
          <UsuarioCard key={user.id} usuario={user} />
        ))}
      </div>
    </div>
  );
};

export default ListaUsuarios;