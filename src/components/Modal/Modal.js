import React from 'react';
import Modal from 'react-modal';
import { ModalImage } from './Modal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1200,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    width: '1000px',
    height: '700px',
    zIndex: 1300,
  },
};

export const ModalBlock = ({ image, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalImage src={image.largeImageURL} />
    </Modal>
  );
};
