import { useState, useEffect } from 'react';
import axios from '../../axios';

const TopCreatorsSection = () => {
  const [loading, setLoading] = useState(false);
  const [topCreatorsList, setTopCreatorsList] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchTopCreatorsList() {
      const response = await axios.get('/users', {
        params: {
          limit: 12,
          sort: 'soldNfts',
        },
      });
      setTopCreatorsList(response.data);
    }
    fetchTopCreatorsList();
    setLoading(false);
  }, []);

  return (
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
            <a href='' className='top-creators-section__info-button button-template'>
              <img src='./assets/img/svg/RocketLaunch.svg' alt='rocket' />
              View Rankings
            </a>
          </div>
          <div className='top-creators-section__list'>
            {(loading && <div>Hey</div>) ||
              topCreatorsList.map((obj, index) => {
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
            <a href='' className='top-creators-section__list-button button-template'>
              <img src='./assets/img/svg/RocketLaunch.svg' alt='rocket' />
              View Rankings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCreatorsSection;
