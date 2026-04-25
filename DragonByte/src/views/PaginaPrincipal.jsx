import React, { useState } from 'react';
import './PaginaPrincipal.css';
import dragonImage from '../assets/img/PetSelector.png'; 

const PaginaPrincipal = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = ['Programming', 'English', 'Habbits'];

  return (
    <>
      {/* EL TRUCO: Este div pinta la imagen en toda la pantalla, por detrás de todo */}
      <div className="fondo-pantalla-completa"></div>

      <main className="pagina-principal-contenedor">
        
        <section className="menu-categorias">
          <h2 className="titulo-categorias">Categories</h2>
          <div className="lista-botones">
            {categories.map((categoria, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(index)}
                className={index === selectedCategory ? 'btn-categoria activo' : 'btn-categoria'}
              >
                <span className="icono-estrella">⭐</span>
                {categoria}
              </button>
            ))}
          </div>
        </section>

        <section className="seccion-dragon">
          <div className="circulo-fondo">
            <img src={dragonImage} alt="Dragon mascota" className="imagen-dragon" />
          </div>
        </section>

      </main>
    </>
  );
};

export default PaginaPrincipal;