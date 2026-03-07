import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FormularioRegistro from './views/FormularioRegistro';
import ListaUsuarios from './views/ListaUsuarios';
import './assets/Registro.css'; 

function App() {
  const [vistaActual, setVistaActual] = useState('formulario'); 

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Navbar setVistaActual={setVistaActual} />
      
      {}
      <main style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        {vistaActual === 'formulario' ? <FormularioRegistro /> : <ListaUsuarios />}
      </main>

      <Footer />

    </div>
  );
}

export default App;

