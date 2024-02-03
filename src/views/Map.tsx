import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next')

export const Map: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full h-auto">
      <img 
        src="/Map.jpg" 
        alt="Map" 
        className="w-full h-auto"
      />

<div 
  style={{ position: 'absolute', right: '30%', top: '45%', transform: 'translateY(-50%)', width: '10%', height: '10%' }}
  className={`${isHovered ? 'bg-red-500 bg-opacity-50' : 'bg-white bg-opacity-50'} cursor-pointer shadow-lg`}
  onClick={handleOpenModal}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
/>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={handleCloseModal}
  contentLabel="Interactive Area"
  className="relative flex items-center justify-center h-screen bg-white bg-opacity-75 px-20"
>
  <div className="flex flex-col items-center bg-white p-4 rounded-lg overflow-auto">
    <button 
      onClick={handleCloseModal} 
      className="absolute top-0 right-0 bg-gray-200 rounded-full p-2 m-2 hover:bg-gray-300"
    >
      X
    </button>
    <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Tea Field</h1>
    <p className="text-lg text-justify text-gray-700 leading-relaxed">The Tea harvester has reached the Tea Field and is preparing for the workday. His cup is full of green hot tea. Delicious incense fragrant nearby. And the first sun is just rising over the valley. The second one has not yet set, but it is not so hot anymore. The moment is perfect.</p>
    <img 
      src="/tea_f.png" 
      alt="Map" 
      className="w-1/2 h-auto mx-auto"
    />
  </div>
</Modal>
    </div>
  );
};