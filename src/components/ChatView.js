import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ChatView.css';
import { selectSelectedImage } from '../features/appSlice';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const ChatView = ({ history }) => {
  const selectedImage = useSelector(selectSelectedImage);

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);

  const exit = () => {
    history.replace('/chats');
  };

  return (
    <div className='chatview'>
      <img src={selectedImage} onClick={exit} />
      <div className='chatview__timer'>
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ['#004777', 0.33],
            ['#f7b801', 0.33],
            ['#a30000', 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default ChatView;
