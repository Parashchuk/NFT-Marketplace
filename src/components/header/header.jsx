import { Link } from 'react-router-dom';

import BurgetButton from '../../assets/img/svg/List.svg';
import LogoText from '../../assets/img/svg/Logo.svg';
import LogoImage from '../../assets/img/svg/Storefront.svg';
import User from '../../assets/img/svg/User.svg';

const Header = () => {
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
              <a className='navigation-item' href='#'>
                Marketplace
              </a>
            </li>
            <li>
              <a className='navigation-item' href='#'>
                Rankings
              </a>
            </li>
            <li>
              <a className='navigation-item' href='#'>
                Connect a wallet
              </a>
            </li>
            <li>
              <a
                className='navigation-item navagation-item--button button-template button-secondary'
                href='#'>
                <img src={User} alt='user' />
                <span>Sign Up</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
