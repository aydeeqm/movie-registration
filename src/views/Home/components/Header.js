import React from  'react';

export const Header = ({ handleModal }) => (
  <div className='is-flex centered-flex'>
    <h2 className='title is-2'>Películas</h2>
    <button 
      className='button is-primary' 
      type="button" 
      onClick={handleModal}
    >
      Nueva Pelicula
    </button>
  </div>
)
