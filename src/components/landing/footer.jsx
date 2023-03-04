import logo from '../../assets/img/svg/logo.svg';
import logoSvg from '../../assets/img/svg/storefront.svg';
import email from '../../assets/img/svg/email.svg';
import discord from '../../assets/img/svg/discordLogo.svg';
import youtube from '../../assets/img/svg/youtubeLogo.svg';
import twitter from '../../assets/img/svg/twitterLogo.svg';
import instagram from '../../assets/img/svg/instagramLogo.svg';
import { Link } from 'react-router-dom';

const LandingFooter = () => {
  return (
    <footer className='landingFooter wrapper'>
      <div className='landingFooter__container wrapper-container'>
        <div className='landingFooter__container__columns'>
          <div className='landingFooter__container__columns__column'>
            <div className='landingFooter__container__columns__column__title'>
              <img
                className='landingFooter__container__columns__column__title__img'
                src={logoSvg}
                alt='logo'
              />
              <img
                className='landingFooter__container__columns__column__title__text'
                src={logo}
                alt='logoText'
              />
            </div>
            <div className='landingFooter__container__columns__column__subtitle'>
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div className='landingFooter__container__columns__column__social'>
              <div>Join our community</div>
              <img src={discord} alt='discord' />
              <img src={youtube} alt='youtube' />
              <img src={twitter} alt='twitter' />
              <img src={instagram} alt='instagram' />
            </div>
          </div>
          <div className='landingFooter__container__columns__column'>
            <div className='landingFooter__container__columns__column__title'>Explore</div>
            <Link
              to='/register#colletions'
              className='landingFooter__container__columns__column__nav-item'>
              Collections
            </Link>
            <Link
              to='/register#creators'
              className='landingFooter__container__columns__column__nav-item'>
              Rankings
            </Link>
            <Link
              to='/connectWallet'
              className='landingFooter__container__columns__column__nav-item'>
              Connect a wallet
            </Link>
          </div>
          <div className='landingFooter__container__columns__column'>
            <div className='landingFooter__container__columns__column__title'>
              Join our weekly digest
            </div>
            <div className='landingFooter__container__columns__column__subtitle'>
              Get exclusive promotions & updates straight to your inbox.
            </div>
            <form>
              <div className='landingFooter__container__columns__column__input'>
                <input type='text' placeholder='Enter your email here' />
                <button className='button-template button-secondary' type='submit'>
                  <img src={email} alt='email' />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='landingFooter__container__copyright'>
          Ⓒ NFT Market. Use this template freely.
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
