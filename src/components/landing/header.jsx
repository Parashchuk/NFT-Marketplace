import { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgetButton from '../../assets/img/svg/list.svg';
import LogoText from '../../assets/img/svg/logo.svg';
import LogoImage from '../../assets/img/svg/storefront.svg';
import User from '../../assets/img/svg/user.svg';
import Close from '../../assets/img/svg/close.svg';

const LandingHeader = () => {
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);

  return (
    <header>
      <div className='landingHeader'>
        <Link to='/' className='landingHeader__logo'>
          <img className='landingHeader__logo-image' src={LogoImage} alt='LogoImage' />
          <img className='landingHeader__logo-text' src={LogoText} alt='LogoText' />
        </Link>
        <nav>
          <img
            onClick={() => setBurgerMenuStatus(!burgerMenuStatus)}
            className={
              burgerMenuStatus ? 'landingHeader__burger-menu-close' : 'landingHeader__burger-menu'
            }
            src={burgerMenuStatus ? Close : BurgetButton}
            alt='List'
          />
          <ul className='landingHeader__navigation'>
            <li>
              <Link className='navigation-item' to='#'>
                Collections
              </Link>
            </li>
            <li>
              <Link className='navigation-item' to='#'>
                Rankings
              </Link>
            </li>
            <li>
              <Link className='navigation-item' to='#'>
                Connect a wallet
              </Link>
            </li>

            <li>
              <Link
                className='navigation-item navagation-item--button button-template button-secondary'
                to='/register'>
                <img src={User} alt='user' />
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
          {burgerMenuStatus && (
            <ul className='landingHeader__burger-navigation'>
              <li>
                <Link className='burger-navigation-item' to='#'>
                  Marketplace
                </Link>
              </li>
              <li>
                <Link className='burger-navigation-item' to='#'>
                  Rankings
                </Link>
              </li>
              <li>
                <Link className='burger-navigation-item' to='#'>
                  Connect a wallet
                </Link>
              </li>
              <li>
                <Link
                  className='burger-navigation-item burger-navagation-item--button button-template button-secondary'
                  to='/register'>
                  <img src={User} alt='user' />
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;
