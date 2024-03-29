import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BurgetButton from '../../assets/img/svg/list.svg';
import LogoText from '../../assets/img/svg/logo.svg';
import LogoImage from '../../assets/img/svg/storefront.svg';
import User from '../../assets/img/svg/user.svg';
import Close from '../../assets/img/svg/close.svg';
import Collections from '../../assets/img/svg/collections.svg';
import BurgerWallet from '../../assets/img/svg/burger-wallet.svg';
import Leaderboard from '../../assets/img/svg/leaderboard.svg';

const LandingHeader = () => {
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);

  useEffect(() => {
    if (burgerMenuStatus) {
      document.body.classList.add('disable-scroll');
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove('disable-scroll');
    }

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [burgerMenuStatus]);

  const burgerMenuStatusHandler = () => {
    setBurgerMenuStatus(!burgerMenuStatus);
  };

  return (
    <header>
      <div className='landingHeader'>
        <Link to='/' className='landingHeader__logo'>
          <img className='landingHeader__logo-image' src={LogoImage} alt='LogoImage' />
          <img className='landingHeader__logo-text' src={LogoText} alt='LogoText' />
        </Link>
        <nav>
          <img
            onClick={burgerMenuStatusHandler}
            className={
              burgerMenuStatus ? 'landingHeader__burger-menu-close' : 'landingHeader__burger-menu'
            }
            src={burgerMenuStatus ? Close : BurgetButton}
            alt='List'
          />
          <ul className='landingHeader__navigation'>
            <li>
              <Link className='navigation-item' to='/register#collections'>
                Collections
              </Link>
            </li>
            <li>
              <Link className='navigation-item' to='/register#creators'>
                Rankings
              </Link>
            </li>
            <li>
              <Link className='navigation-item' to='/connectWallet'>
                Connect a wallet
              </Link>
            </li>
            <li>
              <Link className='navigation-item navigation-item__login' to='/login'>
                Sign In
              </Link>
              <Link
                className='navigation-item navagation-item--button button-template button-tertiary'
                to='/register'>
                <img src={User} alt='user' />
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
          <div
            onClick={burgerMenuStatusHandler}
            className={`landingHeader__burger-background ${
              burgerMenuStatus ? 'burger-active' : ''
            }`}></div>
          <ul
            className={`landingHeader__burger-navigation ${
              burgerMenuStatus ? 'burger-active' : ''
            }`}>
            <li>
              <Link className='burger-navigation-item ' to='register#collections'>
                <img src={Collections} alt='collections' />
                Collections
              </Link>
            </li>
            <li>
              <Link className='burger-navigation-item' to='/register#creators'>
                <img src={Leaderboard} alt='leaderboard' />
                Rankings
              </Link>
            </li>
            <li>
              <Link className='burger-navigation-item' to='/connectWallet'>
                <img src={BurgerWallet} alt='burger-wallet' />
                Connect a wallet
              </Link>
            </li>
            <li>
              <Link
                className='burger-navigation-item burger-navagation-item--button button-template button-secondary'
                to='/register'>
                <span>Sign Up</span>
              </Link>
              <Link
                className='burger-navigation-item burger-navagation-item--button button-template button-secondary'
                to='/login'>
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;
