import { Link, useLocation } from 'react-router-dom';

import BurgetButton from '../../assets/img/svg/list.svg';
import LogoText from '../../assets/img/svg/logo.svg';
import LogoImage from '../../assets/img/svg/storefront.svg';
import User from '../../assets/img/svg/user.svg';

const Header = () => {
  const location = useLocation();
  const isAuth = !!window.localStorage.getItem('token');

  return (
    <header>
      <div className='header'>
        <Link to='/' className='header__logo'>
          <img className='header__logo-image' src={LogoImage} alt='LogoImage' />
          <img className='header__logo-text' src={LogoText} alt='LogoText' />
        </Link>
        <nav>
          <img className='header__burger-menu' src={BurgetButton} alt='List' />
          <ul className='header__navigation'>
            <li>
              <Link className='navigation-item' to='#'>
                Marketplace
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
              {isAuth ? (
                <Link
                  className='navigation-item navagation-item--button button-template button-secondary'
                  to='/profile'>
                  Profile
                </Link>
              ) : (
                <Link
                  className='navigation-item navagation-item--button button-template button-secondary'
                  to={location.pathname === '/register' ? '/login' : '/register'}>
                  <img src={User} alt='user' />
                  <span>{location.pathname === '/register' ? 'Sign In' : 'Sign Up'}</span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
