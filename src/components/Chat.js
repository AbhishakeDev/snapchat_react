import { Avatar } from '@material-ui/core';
import React from 'react';
import StopIcon from '@material-ui/icons/Stop';
import './Chat.css';
import ReactTimeago from 'react-timeago';
import { useDispatch } from 'react-redux';
import { selectImage } from '../features/appSlice';
import { db } from '../firebase';
import { useHistory } from 'react-router';

const Chat = ({ id, username, profilePic, timestamp, read, imageUrl }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      //now updating read in the image in firestore and we use merge so that it merges and not remove all and keep only read in db but also all the values and updates only read value
      db.collection('posts').doc(id).set(
        {
          read: true,
        },
        { merge: true }
      ); //using merge is v.imp. so that it doesnt remove all values except read
      history.push('/chats/view');
    }
  };

  return (
    <div onClick={open} className='chat'>
      <Avatar className='chat__avatar' src={profilePic} />
      <div className='chat__info'>
        <h4>{username}</h4>
        <p>
          {!read ? 'Tap to view -' : 'Viewed'}{' '}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopIcon className='chat__readIcon' />}
    </div>
  );
};

export default Chat;
