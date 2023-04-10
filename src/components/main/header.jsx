import bottomArrow from '../../assets/img/svg/arrowBottom.svg';
import magnifyingGlass from '../../assets/img/svg/magnifyingGlass.svg';
import LogoText from '../../assets/img/svg/logo.svg';
import LogoImage from '../../assets/img/svg/storefront.svg';
import shoppingCart from '../../assets/img/svg/shoppingCart.svg';
import list from '../../assets/img/svg/list.svg';
import closeButton from '../../assets/img/svg/closeButton.svg';
import backArrow from '../../assets/img/svg/backArrow.svg';
import user from '../../assets/img/svg/user.svg';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MainHeader = () => {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);
  const [serachbarStatus, setSearchbarStatus] = useState(false);
  const [searchbarContent, setSearchbarContent] = useState('');
  const [isScrollOnTop, setIsScrollOnTop] = useState(false);
  const [isScrollOnSecondStickyElement, setIsScrollOnSecondStickyElement] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrollOnTop(!!window.scrollY);
    };

    if (window.scrollY == 385) {
      setIsScrollOnSecondStickyElement(true);
    } else {
      setIsScrollOnSecondStickyElement(false);
    }

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('croll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (burgerMenuToggle) {
      document.body.classList.add('disable-scroll');
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove('disable-scroll');
    }

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [burgerMenuToggle]);

  return (
    <header style={{ position: 'sticky', top: '0', zIndex: 10 }}>
      <div className='main-header'>
        <div
          style={{
            borderBottom: `${isScrollOnTop ? '1px solid #4c505c' : ''}`,
          }}
          className='main-header__container'>
          <div className='main-header__container__row'>
            <div className='main-header__container__row__logo'>
              <Link to='/' className='auth-header__logo'>
                <img className='auth-header__logo-image' src={LogoImage} alt='LogoImage' />
                <img className='auth-header__logo-text' src={LogoText} alt='LogoText' />
              </Link>
            </div>
            <form
              autoComplete='off'
              onSubmit={() => {}}
              className='main-header__container__row__search'>
              <label htmlFor='searchInput'>
                <img src={magnifyingGlass} alt='search' />
              </label>
              <input
                id='searchInput'
                value={searchbarContent}
                onChange={(e) => setSearchbarContent(e.target.value)}
                type='text'
                placeholder='Search here'
              />
              <label htmlFor='searchInput'>
                <img
                  onClick={() => setSearchbarContent('')}
                  style={{ display: `${searchbarContent ? 'block' : 'none'}` }}
                  src={closeButton}
                  alt='clear'
                />
              </label>
            </form>
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
              <div
                onClick={() => setSearchbarStatus((status) => !status)}
                className='main-header__container__row__search__adaptive'>
                <img src={magnifyingGlass} alt='search' />
              </div>
              <div>
                <img src={shoppingCart} alt='shopCart' />
              </div>
              <div>
                <img src={user} alt='profile' />
              </div>
            </div>
          </div>
          <div className='main-header__container__burger-menu'>
            <div
              className={
                'main-header__container__burger-menu__button' + (burgerMenuToggle ? '__close' : '')
              }
              onClick={() => setBurgerMenuToggle((status) => !status)}>
              <img src={burgerMenuToggle ? closeButton : list} alt='list' />
            </div>
            <div
              className={
                'main-header__container__burger-menu__container' +
                (burgerMenuToggle ? ' burger-menu__active' : '')
              }>
              <nav>
                <ul className='main-header__container__burger-menu__container__navigation'>
                  <li className='main-header__container__burger-menu__container__navigation__profile'>
                    Profile <img src={bottomArrow} alt='bottomArrow' />
                  </li>
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
              <div className='main-header__container__burger-menu__container__buttons'></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='main-header__adaptive-search'
        style={{ display: `${serachbarStatus ? 'block' : 'none'}` }}>
        <div className='main-header__adaptive-search__input'>
          <form
            autoComplete='off'
            onSubmit={() => {}}
            className='main-header__adaptive-search__input__wrap'>
            <img
              onClick={() => setSearchbarStatus((status) => !status)}
              src={backArrow}
              alt='back'
            />
            <input
              id='adaptiveSearch'
              type='text'
              placeholder='Search'
              value={searchbarContent}
              onChange={(e) => setSearchbarContent(e.target.value)}
            />
          </form>
          <label htmlFor='adaptiveSearch'>
            <img
              onClick={() => setSearchbarContent('')}
              style={{ display: `${searchbarContent ? 'block' : 'none'}` }}
              src={closeButton}
              alt='clear'
            />
          </label>
        </div>
        <div className='main-header__adaptive-search__result'>
          <span>No items found</span>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
