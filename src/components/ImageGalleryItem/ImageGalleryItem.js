import React, { useState } from 'react';
import Modal from 'react-modal';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';
import { ModalBlock } from 'components/Modal/Modal';

Modal.setAppElement('#root');

export function ImageGalleryItem({ image }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => setModalIsOpen(true)}
      />
      <ModalBlock
        image={image}
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
    </>
  );
}
