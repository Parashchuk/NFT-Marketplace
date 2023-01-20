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

const Profile = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [alertError, setAlertError] = useState();

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const isAuth = () => {
    setAlertError(null);
    const token = window.localStorage.getItem('token');
    axios
      .post('/auth/me')
      .then((res) => {
        setIsLoading(false);
        setUserData(res.data);
      })
      .catch((err) => {
        setAlertError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    isAuth();
  }, []);

  return (
    <>
      {alertError && <ErrorAlert error={alertError} />}
      <Preloader active={isLoading} />
      {isLoading ? (
        <></>
      ) : (
        <div className='profile'>
          <div className='profile__container'>
            <div className='profile__container__header'>
              <div
                style={{ backgroundImage: `url(${userData.headerImage})` }}
                className='profile__container__header__placeholder'></div>
              <div className='profile__container__header__avatar'>
                <img src={userData.avatar} alt='avatar' />
              </div>
            </div>
            <div className='profile__container__user-info'>
              <div className='profile__container__user-info__column'>
                <div className='profile__container__user-info__column__name'>
                  {userData.username}
                </div>
                <div className='profile__container__user-info__column__stats'>
                  <div className='profile__container__user-info__column__stats__item'>
                    <span>{userData.volume}</span>
                    <span>Volume</span>
                  </div>
                  <div className='profile__container__user-info__column__stats__item'>
                    <span>{userData.soldNfts}</span>
                    <span>NFTs sold</span>
                  </div>
                  <div className='profile__container__user-info__column__stats__item'>
                    <span>{userData.followersCount}</span>
                    <span>Followers</span>
                  </div>
                </div>
                <div className='profile__container__user-info__column__bio'>{userData.bio}</div>
                <div className='profile__container__user-info__column__links'>
                  <img src={web} alt='web' />
                  <img src={discord} alt='discord' />
                  <img src={youtube} alt='youtube' />
                  <img src={twitter} alt='twitter' />
                  <img src={instagram} alt='instagram' />
                </div>
              </div>
              <div className='profile__container__user-info__column'>
                <div
                  onClick={() => copyTextToClipboard('0xc0E3...B79C')}
                  className='profile__container__user-info__column__copyButton'>
                  <img src={copy} alt='copy' />
                  0xc0E3...B79C
                </div>
                <div className='profile__container__user-info__column__FollowButton'>
                  <span>+</span>
                  <span>Follow</span>
                </div>
              </div>
            </div>
            <div className='porfile__container__filters'></div>
            <div className='profile__container__nft-cards'></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
