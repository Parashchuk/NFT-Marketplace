import { useState, useEffect } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

import rocketLauch from '../../assets/img/svg/rocketLaunch.svg';
import Preloader from '../utils/preloader';

const TopCreatorsSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topCreatorsList, setTopCreatorsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/users', {
        params: {
          limit: 13,
          sort: 'soldNfts',
        },
      })
      .then((response) => {
        setTopCreatorsList(response.data);
      });
    setIsLoading(false);
  }, []);

  return (
    <>
      <Preloader active={isLoading} />
      {(isLoading && <></>) || (
        <section>
          <div className='top-creators-section wrapper'>
            <div className='top-creators-section__container wrapper-container'>
              <div className='top-creators-seciton__ifno'>
                <div className='top-creators-seciton__ifno__text'>
                  <div className='top-creators-section__info-title'>Top creators</div>
                  <div className='top-creators-section__info-subtitle'>
                    Checkout Top Rated Creators on the NFT Marketplace
                  </div>
                </div>
                <Link to='#' className='top-creators-section__info-button button-template'>
                  <img src={rocketLauch} alt='rocket' />
                  View Rankings
                </Link>
              </div>
              <div className='top-creators-section__list'>
                {topCreatorsList.map((obj, index) => {
                  return (
                    <div key={index} className='top-creators-section__list__card'>
                      <div className='top-creators-section__list__card-number'>{index + 1}</div>
                      <div className='top-creators-section__list__card-avatar'>
                        <img src={obj.avatar} alt='avatar' />
                      </div>
                      <div className='top-creators-section__list__card-text'>
                        <div className='top-creators-section__list__card-name'>{obj.username}</div>
                        <div className='top-creators-section__list__card-total'>
                          <span>Total Sales: </span>
                          {obj.totalSales}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Link to='#' className='top-creators-section__list-button button-template'>
                  <img src={rocketLauch} alt='rocket' />
                  View Rankings
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TopCreatorsSection;
