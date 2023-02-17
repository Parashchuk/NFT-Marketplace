import Preloader from '../utils/preloader';

import { fetchCollections } from '../../store/reducers/collections';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Discover = () => {
  const { isLoading } = useSelector((state) => state.collections);
  const discoverCollection = useSelector((state) => state.collections.data[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isLoading, discoverCollection);
  });

  useEffect(() => {
    dispatch(fetchCollections(1));
  }, []);

  if (isLoading) return <Preloader />;
  return (
    <section className='discover'>
      <div className='discover__container'>
        <div className='discover__container__description'>
          <div className='discover__container__description__wrap'>
            <div className='discover__container__description__title'>Discover More NFTs</div>
            <div className='discover__container__description__subtitle'>
              Explore new trending NFTs
            </div>
          </div>
          <div className='discover__container__description__subtitle__button'>See All</div>
        </div>
        <div className='discover__container__nfts'>
          {discoverCollection &&
            discoverCollection.images.map((nft, id) => {
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
                        {discoverCollection.author.avatar}
                      </div>
                      <div className='discover__container__nfts__cart__description__author__name'>
                        {discoverCollection.author.username}
                      </div>
                    </div>
                    <div className='discover__container__nfts__cart__description__worth'>
                      <div className='discover__container__nfts__cart__description__worth__price'>
                        {nft.price}
                      </div>
                      <div className='discover__container__nfts__cart__description__worth__bid'>
                        {nft.bidHistory}
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
