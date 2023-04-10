import { useState } from 'react';

const Preloader = ({ type }) => {
  const [isServerLoading, setIsServerLoading] = useState(false);

  setTimeout(() => {
    setIsServerLoading(true);
  }, 2500);

  return (
    <div className='preloader'>
      <div className='loading'>
        <div className='arc'></div>
        <div className='arc'></div>
        <div className='arc'></div>
      </div>
      <div
        className={
          'preloader-message' +
          (type == 'preloader' && isServerLoading ? ' preloader-message-active' : '')
        }>
        <span>Please wait till we start server</span>
        <span>It's always about 30 seconds</span>
      </div>
    </div>
  );
};

export default Preloader;
