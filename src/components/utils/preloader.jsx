import { useState } from 'react';
import preloader from '../../assets/img/svg/preloader.gif';

const Preloader = () => {
  const [isServerLoading, setIsServerLoading] = useState(false);

  setTimeout(() => {
    setIsServerLoading(true);
  }, 2500);

  return (
    <div className='preloader'>
      <img src={preloader} alt='preloader' />
      {isServerLoading && (
        <div>
          <span>Please wait till we start server</span>
          <span>It's always about 15 seconds</span>
        </div>
      )}
    </div>
  );
};

export default Preloader;
