import React from 'react';

const labelDefault = 'Guardar';

export const Modal = ({ label=labelDefault, title='', children }) => (
  <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button className="delete" aria-label="close"></button>
      </header>
      <section className="modal-card-body">
        {children}
      </section>
    </div>
  </div>
)
