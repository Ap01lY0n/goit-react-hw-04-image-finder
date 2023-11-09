import React, { useEffect } from 'react';
import Modal from 'react-modal';

const ModalWindow = ({ isModalOpen, closeModal, dataModal, tags }) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="  "
    >
      <div>
        <img src={dataModal} alt={tags} width={700} />
      </div>
    </Modal>
  );
};

export default ModalWindow;
