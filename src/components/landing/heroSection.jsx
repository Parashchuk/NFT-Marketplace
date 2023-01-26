import axios from '../../axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import launchRocket from '../../assets/img/svg/rocketLaunch.svg';
import Preloader from '../utils/preloader';

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroUser, setHeroUser] = useState();

  //Fetch user Data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/collections', {
        params: {
          limit: 1,
          sort: 'ratings',
        },
      })
      .then((res) => {
        setHeroUser(res.data[0]);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Preloader active={isLoading} />
      {(isLoading && <></>) || (
        <section>
          <div className='hero-section wrapper'>
            <div className='hero-section__container wrapper-container'>
              <div className='hero-section__text-column'>
                <div className='hero-section__text-column__title'>
                  Discover Digital Art & Collect NFTs
                </div>
                <div className='hero-section__text-column__subtitle'>
                  NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from
                  more than 20k NFT artists.
                </div>
                <div className='hero-section__text-column__image'>
                  <img
                    className='hero-section__image-column__image'
                    src={heroUser.images[0].picture}
                    alt='placeholder'
                  />
                  <div className='hero-section__image-column__caption'>
                    Space Walinkg
                    <div className='hero-section__image-column__caption__author author-template'>
                      <img src={heroUser.author.avatar} alt='avatar' />
                      {heroUser.author.username}
                    </div>
                  </div>
                </div>
                <Link
                  className='hero-section__text-column__get-started button-template button-secondary'
                  to='/register'>
                  <img src={launchRocket} alt='rocket' />
                  Get Started
                </Link>
                <div className='hero-section__text-column__additional-ifno'>
                  <div className='hero-section__text-column__additional-ifno__item'>
                    <span>240k+</span>
                    <span>Total Sale</span>
                  </div>
                  <div className='hero-section__text-column__additional-ifno__item'>
                    <span>100k+</span>
                    <span>Auctions</span>
                  </div>
                  <div className='hero-section__text-column__additional-ifno__item'>
                    <span>240k+</span>
                    <span>Artists</span>
                  </div>
                </div>
              </div>
              <div className='hero-section__image-column'>
                <img
                  className='hero-section__image-column__image'
                  src={heroUser.images[0].picture}
                  alt='spacewalk'
                />
                <div className='hero-section__image-column__caption'>
                  Space Walinkg
                  <div className='hero-section__image-column__caption__author author-template'>
                    <img src={heroUser.author.avatar} alt='avatar' />
                    {heroUser.author.username}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;
