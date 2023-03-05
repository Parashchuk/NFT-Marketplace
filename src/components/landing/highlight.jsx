import eye from '../../assets/img/svg/eye.svg';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Highlight = () => {
  const DAY_IN_SECONDS = 86399;

  const collectionEvent = useSelector((state) => state.collections.data[2]);
  const [timeCounter, setTimeCounter] = useState(0);

  useEffect(() => {
    let initialTime = localStorage.getItem('initialTime');
    let currentTime = Date.now();

    if (!initialTime) {
      localStorage.setItem('initialTime', currentTime);
      initialTime = currentTime;
    } else if (Math.floor((Date.now() - initialTime) / 1000) > DAY_IN_SECONDS) {
      localStorage.setItem('initialTime', currentTime);
      initialTime = currentTime;
    }

    const interval = setInterval(() => {
      setTimeCounter(DAY_IN_SECONDS - Math.floor((Date.now() - initialTime) / 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let hours = Math.floor(timeCounter / 3600);
  let minutes = Math.floor((timeCounter - hours * 3600) / 60);
  let seconds = timeCounter - hours * 3600 - minutes * 60;

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%), url(${collectionEvent.images[0].picture})`,
      }}
      className='highlight'>
      <div className='highlight__wrapper'>
        <div className='wrapper-container highlight__wrapper-container'>
          <div className='highlight__columns'>
            <div className='highlight__columns__description'>
              <div className='highlight__columns__description__author'>
                <div className='highlight__columns__description__author__img'>
                  <img src={collectionEvent.author.avatar} alt='avatar' />
                </div>
                <div className='highlight__columns__description__author__name'>
                  {collectionEvent.author.username}
                </div>
              </div>
              <div className='highlight__columns__description__title'>{collectionEvent.name}</div>
              <Link
                to='register#highlight'
                className='highlight__columns__description__button button-template button-secondary'>
                <img src={eye} alt='eye' />
                See NFT
              </Link>
            </div>
            <div className='highlight__columns__timer'>
              <div className='highlight__columns__timer__title'>Auction ends in:</div>
              <div className='highlight__columns__timer__digits'>
                <div className='highlight__columns__timer__digits__col'>
                  <div>{minutes < 24 ? `0${minutes}` : minutes}</div>
                  <span>Hours</span>
                </div>
                :
                <div className='highlight__columns__timer__digits__col'>
                  <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                  <span>Minutes</span>
                </div>
                :
                <div className='highlight__columns__timer__digits__col'>
                  <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            <Link
              to='/register/highlight'
              className='highlight__columns__description__button highlight__columns__description__button__adaptive button-template button-secondary'>
              <img src={eye} alt='eye' />
              See NFT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
