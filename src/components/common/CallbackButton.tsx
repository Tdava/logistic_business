import React, { useState } from 'react';
import CallbackModal from './CallbackModal';
import './CallbackButton.scss';

const CallbackButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className="callback-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Заказать звонок
      </button>
      
      {isModalOpen && (
        <CallbackModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default CallbackButton; 