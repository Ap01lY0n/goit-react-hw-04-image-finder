import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';

const ImageGallery = ({ data }) => {
  return (
    <ImgGallery className="gallery">
      {data.map((item) => (
        <ImageGalleryItem
          key={item.id}
          data={item.webformatURL}
          dataModal={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ImgGallery>
  );
};

export default ImageGallery;
