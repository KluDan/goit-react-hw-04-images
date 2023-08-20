import { ModalBlock } from 'components/Modal/Modal';
import { Component } from 'react';
import Modal from 'react-modal';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const { image } = this.props;

    return (
      <>
        <ImageGalleryItemImage
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.openModal}
        />
        <ModalBlock
          image={image}
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </>
    );
  }
}
