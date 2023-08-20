import Modal from 'react-modal';
import { ModalImage } from './Modal.styled';
const customStyles = {
  content: {
    top: '53%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    width: '1000px',
    height: '700px',
  },
};

export const ModalBlock = ({ image, modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalImage src={image.largeImageURL} />
      </Modal>
    </div>
  );
};
