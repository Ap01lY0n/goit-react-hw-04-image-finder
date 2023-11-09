import React, { useState, useEffect } from 'react';
import Button from './Button/Button';
import { fetchImg } from 'api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { Loader } from './Loader/Loader';
import { MainApp } from './App.styled';
import Notiflix from 'notiflix';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [perPage] = useState(12);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        setIsLoadMore(false);

        const data = await fetchImg(page, query, perPage);
        const { hits, totalHits } = data;

        if (hits.length === 0) {
          noImagesFound();
          return;
        }

        const totalPages = Math.ceil(totalHits / perPage);

        if (page < totalPages) {
          setIsLoadMore(true);
        }

        setImages((prevImages) => [...prevImages, ...hits]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, query, perPage]);

  const getValue = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const noImagesFound = () => {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
    );
  };

  return (
    <MainApp>
      <Searchbar getValue={getValue}></Searchbar>
      {loading && <Loader />}
      {error && <ErrorMessage title='Whoops! Error! Please reload this page!' />}
      {images.length > 0 && <ImageGallery data={images} />}
      {isLoadMore && <Button onClick={onLoadMore} />}
    </MainApp>
  );
};

export default App;
