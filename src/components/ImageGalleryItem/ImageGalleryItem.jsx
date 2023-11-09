import React, { useState } from 'react';
import { ImgGalleryItem, ImageGalleryItemImg } from './ImageGalleryItem.styled';
import ModalWindow from 'components/ModalWindow/ModalWindow';

const ImageGalleryItem = ({ data, dataModal, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <ImgGalleryItem className="galleryItem">
      <ImageGalleryItemImg src={data} alt={tags} onClick={toggleModal} />
      <ModalWindow
        isModalOpen={isModalOpen}
        closeModal={toggleModal}
        dataModal={dataModal}
        tags={tags}
      />
    </ImgGalleryItem>
  );
};

export default ImageGalleryItem;
