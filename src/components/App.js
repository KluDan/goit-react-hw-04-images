import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from './API';
import { useEffect, useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [firstRequestMade, setFirstRequestMade] = useState(false);

  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') return;

    const fetchImagesAndUpdateState = async (query, page) => {
      try {
        const newQueryExtracted = query.slice(query.indexOf('/') + 1);
        setLoading(true);

        const responseData = await fetchImages(newQueryExtracted, page);
        setImages(prevImages => [...prevImages, ...responseData.hits]);
        setLoading(false);

        if (!firstRequestMade) {
          setFirstRequestMade(true);
        }
        console.log(responseData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImagesAndUpdateState(query, page);
  }, [query, page, firstRequestMade]);

  const handleLoadMore = e => {
    e.preventDefault();
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar submitQuery={changeQuery} />
      <ImageGallery images={images} loading={loading} />
      {firstRequestMade && images.length === 0 && !loading && (
        <div className="no-images-message">No images found.</div>
      )}
      {images.length >= 12 && !loading && <Button click={handleLoadMore} />}
      <GlobalStyle />
    </>
  );
};
