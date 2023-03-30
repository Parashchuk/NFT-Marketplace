import bottomArrow from '../../assets/img/svg/arrowBottom.svg';
import magnifyingGlass from '../../assets/img/svg/magnifyingGlass.svg';
import LogoText from '../../assets/img/svg/logo.svg';
import LogoImage from '../../assets/img/svg/storefront.svg';
import headerBackground from '../../assets/img/placeholders/headerBackground.jpg';
import shoppingCart from '../../assets/img/svg/shoppingCart.svg';

import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <div className='main-header' style={{ backgroundImage: `url(${headerBackground})` }}>
        <div className='main-header__container'>
          <div className='main-header__container__row'>
            <div className='main-header__container__row__logo'>
              <Link to='/' className='auth-header__logo'>
                <img className='auth-header__logo-image' src={LogoImage} alt='LogoImage' />
                <img className='auth-header__logo-text' src={LogoText} alt='LogoText' />
              </Link>
            </div>
            <div className='main-header__container__row__search'>
              <input type='text' placeholder='Search here' />
              <img src={magnifyingGlass} alt='search' />
            </div>
          </div>
          <div className='main-header__container__row'>
            <nav>
              <ul className='main-header__container__row__navigation'>
                <li>
                  Explore <img src={bottomArrow} alt='bottomArrow' />
                </li>
                <li>
                  Stats <img src={bottomArrow} alt='bottomArrow' />
                </li>
                <li>
                  <Link to='/create'>Create</Link>
                </li>
              </ul>
            </nav>
            <div className='main-header__container__row__buttons'>
              <div>
                <img src={shoppingCart} alt='shopCart' />
              </div>
              <div>
                <img src={shoppingCart} alt='profile' />
              </div>
            </div>
          </div>
        </div>
        <div className='main-header__navigation'>
          <div className='main-header__navigation__title'>My Profile</div>
          <div className='main-header__navigation__history'>
            <span>Home</span>
            <span className='main-header__navigation__history__symb'>/</span>
            <span className='main-header__navigation__history__active'>Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
