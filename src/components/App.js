import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from './API';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    firstRequestMade: false,
  };
  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImagesAndUpdateState(query, page);
    }
  }

  fetchImagesAndUpdateState = async query => {
    try {
      const newQueryExtracted = query.slice(query.indexOf('/') + 1);
      this.setState({ loading: true });
      const responseData = await fetchImages(
        newQueryExtracted,
        this.state.page
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...responseData.hits],
        loading: false,
      }));
      if (!this.state.firstRequestMade) {
        this.setState({ firstRequestMade: true });
      }
      console.log(responseData);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  handleLoadMore = e => {
    e.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, firstRequestMade } = this.state;

    return (
      <>
        <Searchbar submitQuery={this.changeQuery} />
        <ImageGallery images={images} loading={loading} />
        {firstRequestMade && images.length === 0 && !loading && (
          <div className="no-images-message">No images found.</div>
        )}
        {images.length >= 12 && !loading && (
          <Button click={this.handleLoadMore} />
        )}
        <GlobalStyle />
      </>
    );
  }
}
