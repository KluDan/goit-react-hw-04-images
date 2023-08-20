import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { LoaderSearch } from 'components/Loader/Loader';
import {
  ImageGalleryBlock,
  ImageGalleryItemBlock,
} from './ImageGallery.styled';

export const ImageGallery = ({ images, loading }) => {
  return (
    <ImageGalleryBlock>
      {images.map(image => (
        <ImageGalleryItemBlock key={image.id}>
          <ImageGalleryItem image={image} />
        </ImageGalleryItemBlock>
      ))}
      {loading && <LoaderSearch />}
    </ImageGalleryBlock>
  );
};
