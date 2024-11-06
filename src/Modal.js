import React from 'react';
import './Modal.css';

const Modal = ({ showModal, closeModal }) => {
  if (!showModal) return null; // Si showModal est faux, ne rien afficher

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Bienvenue au Coeur du Désert</h2>
        <p>site web en cours de maintenance</p>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;
