import React from 'react';

export const Modal = ({ title='', children, isShow, onClose }) => (
  <div className={`modal ${isShow ? 'is-active': ''}`}>
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <button className="delete" aria-label="close" onClick={onClose}></button>
      </header>
      <section className="modal-card-body">
        {children}
      </section>
    </div>
  </div>
)
