import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../axios';

import Preloader from '../components/utils/preloader';
import ErrorAlert from '../components/utils/errorAlert';
import web from '../assets/img/svg/globe.svg';
import discord from '../assets/img/svg/discordLogo.svg';
import instagram from '../assets/img/svg/instagramLogo.svg';
import youtube from '../assets/img/svg/youtubeLogo.svg';
import twitter from '../assets/img/svg/twitterLogo.svg';
import copy from '../assets/img/svg/copy.svg';
import plus from '../assets/img/svg/plus.svg';
import { useSearchParams } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState();
  const [inventoryData, setInvetoryData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [alertError, setAlertError] = useState();
  const [params] = useSearchParams();

  const [filterActiveIndex, setFilterActiveIndex] = useState(0);
  const FILTERS = ['NFTs', 'Collections'];

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const isAuth = () => {
    setAlertError(null);

    axios
      .post('/auth/me')
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        setAlertError(err);
      });
  };

  const fetchUserData = () => {
    setAlertError(null);

    axios
      .get('/users/' + params.get('id'))
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        setAlertError(err);
      });
  };

  const fetchDataInventory = (path) => {
    setAlertError(null);

    const sort = filterActiveIndex ? 'collections' : 'nfts';
    axios
      .get(path, {
        params: {
          sort,
        },
      })
      .then((res) => {
        setInvetoryData(res.data);
      })
      .catch((err) => {
        setAlertError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!params.get('id')) {
      setIsLoading(true);
      isAuth();
    } else {
      setIsLoading(true);
      fetchUserData();
    }
  }, []);

  useEffect(() => {
    if (!params.get('id')) {
      setIsLoading(true);
      fetchDataInventory('/users/inventory');
    } else {
      setIsLoading(true);
      fetchDataInventory('/users/' + params.get('id') + '/inventory');
    }
  }, [filterActiveIndex]);

  return (
    <>
      {alertError && <ErrorAlert error={alertError} />}
      <Preloader active={isLoading} />
      {isLoading ? (
        <></>
      ) : (
        <div className='profile'>
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(151, 71, 255, 0) 21.88%, #9747ff 95.31%), url(${userData.headerImage})`,
            }}
            className='profile__placeholder'
          />
          <div className='profile__container'>
            <div className='profile__container__header'>
              <div className='profile__container__header__avatar'>
                <img src={userData.avatar} alt='avatar' />
              </div>
            </div>
            <div className='profile__container__user-info'>
              <div className='profile__container__user-info__column'>
                <div className='profile__container__user-info__column__name'>
                  {userData.username}
                </div>
                <div className='profile__container__user-info__column__container profile__container__user-info__column__container__adaptive'>
                  <div
                    onClick={() => copyTextToClipboard('0xc0E3...B79C')}
                    className='profile__container__user-info__column__button button-template button-secondary'>
                    <img src={copy} alt='copy' />
                    0xc0E3...B79C
                  </div>
                  <div className='profile__container__user-info__column__button button-template button-secondary'>
                    <img src={plus} alt='plus' />
                    <span>Follow</span>
                  </div>
                </div>
                <div className='profile__container__user-info__column__stats'>
                  <div className='profile__container__user-info__column__stats__item'>
                    <div className='profile__container__user-info__column__stats__item__title'>
                      {userData.volume}
                    </div>
                    <span>Volume</span>
                  </div>
                  <div className='profile__container__user-info__column__stats__item'>
                    <div className='profile__container__user-info__column__stats__item__title'>
                      {userData.soldNfts}
                    </div>
                    <span>NFTs sold</span>
                  </div>
                  <div className='profile__container__user-info__column__stats__item'>
                    <div className='profile__container__user-info__column__stats__item__title'>
                      {userData.followersCount}
                    </div>
                    <span>Followers</span>
                  </div>
                </div>
                <div className='profile__container__user-info__column__bio'>
                  <div className='title-template'>Bio</div>
                  {userData.bio}
                </div>
                <div className='profile__container__user-info__column__links'>
                  <div className='title-template'>Links</div>
                  <img src={web} alt='web' />
                  <img src={discord} alt='discord' />
                  <img src={youtube} alt='youtube' />
                  <img src={twitter} alt='twitter' />
                  <img src={instagram} alt='instagram' />
                </div>
              </div>
              <div className='profile__container__user-info__column profile__container__user-info__column-second'>
                <div className='profile__container__user-info__column__container'>
                  <div
                    onClick={() => copyTextToClipboard('0xc0E3...B79C')}
                    className='profile__container__user-info__column__button button-template button-secondary'>
                    <img src={copy} alt='copy' />
                    0xc0E3...B79C
                  </div>
                  <div className='profile__container__user-info__column__button button-template button-secondary'>
                    <img src={plus} alt='plus' />
                    <span>Follow</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='profile__container__filter'>
              {FILTERS.map((filter, index) => {
                return (
                  <div
                    key={index}
                    className={
                      'profile__container__filter__items' +
                      (filterActiveIndex === index ? ' profile__container__filter__active' : '')
                    }
                    onClick={() => setFilterActiveIndex(index)}>
                    {filter}
                  </div>
                );
              })}
            </div>
            <div className='profile__container__nft-cards'>
              <div className='profile__container__nft-cards__grid'>
                {inventoryData.map((el, index) => {
                  return (
                    <div key={index} className='profile__container__nft-cards__grid__item'>
                      <div className='profile__container__nft-cards__grid__item__image'>
                        <img src={el.picture} alt='nft' />
                      </div>
                      <div className='profile__container__nft-cards__grid__item__info'>
                        <div className='profile__container__nft-cards__grid__item__info__name'>
                          {el.name}
                        </div>
                        <div className='profile__container__nft-cards__grid__item__info__author'>
                          <div className='profile__container__nft-cards__grid__item__info__author__avatar'>
                            <img src={el.author.avatar} alt='avatar' />
                          </div>
                          <div className='profile__container__nft-cards__grid__item__info__author__name'>
                            {el.author.username}
                          </div>
                        </div>
                        <div className='profile__container__nft-cards__grid__item__info__properties'>
                          <div className='profile__container__nft-cards__grid__item__info__properties__item'>
                            <span>Price</span>
                            <div>{el.price} ETH</div>
                          </div>
                          <div className='profile__container__nft-cards__grid__item__info__properties__item'>
                            <span>Highest Bid</span>
                            <div>{el.bidHistory[0] ? el.bidHistory[0] : 0} wETH</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
