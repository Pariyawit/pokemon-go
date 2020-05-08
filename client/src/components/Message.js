import React from 'react';

function Message(props) {
  return (
    <div className='message'>
      <p className='message__text'>{props.children}</p>
    </div>
  );
}

export default Message;
