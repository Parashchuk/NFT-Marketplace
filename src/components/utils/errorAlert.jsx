import close from '../../assets/img/svg/close.svg';
import errorImg from '../../assets/img/svg/error.svg';

import { useState } from 'react';

const ErrorAlert = ({ error }) => {
  const [alertStatus, setAlertStatus] = useState(true);

  return (
    <>
      {alertStatus && (
        <div className='errorAlert'>
          <div className='errorAlert__container'>
            <div className='errorAlert__text-container'>
              <div className='errorAlert__image'>
                <img src={errorImg} alt='error' />
              </div>
              <div className='errorAlert__description'>
                <div className='errorAlert__description__title'>Error</div>
                {error}
              </div>
            </div>
            <img
              className='errorAlert__close'
              onClick={() => setAlertStatus(false)}
              src={close}
              alt='close'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorAlert;
