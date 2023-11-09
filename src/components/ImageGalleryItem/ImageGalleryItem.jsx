import { Component } from 'react';
import { ImgGalleryItem, ImageGalleryItemImg } from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }
  render() {
    const { isModalOpen } = this.state;
    const { data, dataModal, tags } = this.props;
    return (   
        <ImgGalleryItem className="galleryItem">
          <ImageGalleryItemImg src={data} alt={tags} onClick={this.toggleModal}/>
          <ModalWindow
            isModalOpen={isModalOpen}
            closeModal={this.toggleModal}
            dataModal={dataModal}
            tags = {tags}
          />
        </ImgGalleryItem>
    );
  }
}


