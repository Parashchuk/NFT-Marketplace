import eye from '../../assets/img/svg/eye.svg';

import { useSelector } from 'react-redux';

const Highlight = () => {
  const collectionEvent = useSelector((state) => state.collections.data[2]);

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
              <div className='highlight__columns__description__button button-template button-secondary'>
                <img src={eye} alt='eye' />
                See NFT
              </div>
            </div>
            <div className='highlight__columns__timer'>
              <div className='highlight__columns__timer__title'>Auction ends in:</div>
              <div className='highlight__columns__timer__digits'>
                <div className='highlight__columns__timer__digits__col'>
                  <div>59</div>
                  <span>Hours</span>
                </div>
                :
                <div className='highlight__columns__timer__digits__col'>
                  <div>59</div>
                  <span>Minutes</span>
                </div>
                :
                <div className='highlight__columns__timer__digits__col'>
                  <div>59</div>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            <div className='highlight__columns__description__button highlight__columns__description__button__adaptive button-template button-secondary'>
              See NFT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
