import eye from '../../assets/img/svg/eye.svg';

import { useSelector } from 'react-redux';

const Discover = () => {
  const discoverCollection = useSelector((state) => state.collections.data[0]);

  return (
    <section className='discover wrapper'>
      <div className='discover__container wrapper-container'>
        <div className='discover__container__description'>
          <div className='discover__container__description__wrap'>
            <div className='discover__container__description__title'>Discover More NFTs</div>
            <div className='discover__container__description__subtitle'>
              Explore new trending NFTs
            </div>
          </div>
          <div className='discover__container__description__subtitle__button button-template button-secondary'>
            <img src={eye} alt='eye' />
            See All
          </div>
        </div>
        <div className='discover__container__nfts'>
          {discoverCollection.images.map((nft, id) => {
            return (
              <div key={id} className='discover__container__nfts__cart'>
                <div className='discover__container__nfts__cart__img'>
                  <img src={nft.picture} alt='nft' />
                </div>
                <div className='discover__container__nfts__cart__description'>
                  <div className='discover__container__nfts__cart__description__name'>
                    {nft.name}
                  </div>
                  <div className='discover__container__nfts__cart__description__author'>
                    <div className='discover__container__nfts__cart__description__author__img'>
                      <img src={discoverCollection.author.avatar} alt='avatar' />
                    </div>
                    <div className='discover__container__nfts__cart__description__author__name'>
                      {discoverCollection.author.username}
                    </div>
                  </div>
                  <div className='discover__container__nfts__cart__description__worth'>
                    <div className='discover__container__nfts__cart__description__worth__value'>
                      <span>Price</span>
                      {nft.price ? nft.price : 0} ETH
                    </div>
                    <div className='discover__container__nfts__cart__description__worth__value'>
                      <span>Highest Bid</span>
                      {nft.bidHistory.length ? nft.bidHistory[0] : 0} ETH
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Discover;
