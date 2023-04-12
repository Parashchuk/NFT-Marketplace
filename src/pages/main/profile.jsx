import user from '../../assets/img/svg/user.svg';
import bottomArrow from '../../assets/img/svg/arrowBottom.svg';
import sortBy from '../../assets/img/svg/sortBy.svg';
import share from '../../assets/img/svg/share.svg';
import more from '../../assets/img/svg/more.svg';
import filters from '../../assets/img/svg/filters.svg';
import magnifyingGlass from '../../assets/img/svg/magnifyingGlass.svg';
import edit from '../../assets/img/svg/edit.svg';
import side from '../../assets/img/svg/side.svg';
import gallery from '../../assets/img/svg/gallery.svg';
import grid from '../../assets/img/svg/grid.svg';
import closeButton from '../../assets/img/svg/closeButton.svg';
import list from '../../assets/img/svg/list_v2.svg';

import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInventory } from '../../store/reducers/auth';

const Profile = () => {
  const LIST_OF_TAGS = [
    { name: 'Collections', value: 'collections' },
    { name: 'Collected', value: 'nfts' },
    { name: 'Created', value: 'nfts' },
    { name: 'Favorited', value: 'nfts' },
  ];

  console.log('render');

  const LIST_OF_SORTS = ['Most recent', 'Price high to low', 'Price low to high', 'Most viewed'];
  const DISPLAY_MODS_NAMES = ['list', 'gallery', 'grid', 'side'];
  const DISPLAY_MODS = [list, gallery, grid, side];

  const [activeDisplayMode, setActiveDisplayMode] = useState(0);
  const [activeTag, setActiveTag] = useState(0);
  const [searchbarContent, setSearchbarContent] = useState('');
  const [isScrollOnSecondStickyElement, setIsScrollOnSecondStickyElement] = useState(false);
  const [copiedStatus, setcopiedStatus] = useState(false);
  const filtersElement = useRef();

  const userData = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  const copyToClipboard = () => {
    setcopiedStatus(true);
    navigator.clipboard.writeText('0xB92a...Aa37');
  };

  const tagsContentHandler = (index) => {
    setActiveTag(index);

    if (index == 0) {
      if (userData.inventory.collections.length ? !userData.inventory.collections[0].images : '') {
        dispatch(getUserInventory(LIST_OF_TAGS[index].value));
      }
    } else if (index >= 1) {
      if (userData.inventory.nfts.length ? !userData.inventory.nfts[0].picture : '') {
        dispatch(getUserInventory(LIST_OF_TAGS[index].value));
      }
    }
  };

  useEffect(() => {
    dispatch(getUserInventory('collections'));

    const screenPosition = filtersElement.current.getBoundingClientRect();
    const top = screenPosition.top;
    const CSSMargin = 30;

    const scrollHandler = () => {
      if (window.scrollY >= top - CSSMargin) {
        setIsScrollOnSecondStickyElement(true);
      } else {
        setIsScrollOnSecondStickyElement(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('croll', scrollHandler);
    };
  }, []);

  return (
    <div className='profile'>
      <div className='profile__images'>
        <label className='profile__images__background-wrap'>
          <input type='file' accept='image/*' style={{ display: 'none' }} tabIndex='-1' />
          <img
            className='profile__images__background-wrap__background'
            src={userData.headerImage}
            alt='background'
          />
          <div className='profile__images__background-wrap__changeHover'>
            <img src={edit} alt='change avatar' />
          </div>
        </label>
        <label className='profile__images__avatar-wrap'>
          <input type='file' accept='image/*' style={{ display: 'none' }} tabIndex='-1' />
          <img
            className='profile__images__avatar-wrap__avatar'
            src={userData.avatar ? userData.avatar : user}
            alt='avatar'
          />
          <div className='profile__images__avatar-wrap__changeHover'>
            <img src={edit} alt='change avatar' />
          </div>
        </label>
      </div>
      <div className='profile__container'>
        <div className='profile__container__wrap'>
          <div className='profile__container__wrap__username'>{userData.username}</div>
          <div className='profile__container__wrap__actions'>
            <div className='profile__container__wrap__actions__img profile-hover-container'>
              <img src={share} alt='share' />
              <span className='profile-hover-hint'>Share</span>
            </div>
            <div className='profile__container__wrap__actions__img'>
              <img src={more} alt='settings' />
            </div>
          </div>
        </div>
        <div className='profile__container__userinfo'>
          <div className='profile__container__userinfo__hash profile-hover-container'>
            <span
              onMouseOut={() => setcopiedStatus(false)}
              onClick={copyToClipboard}
              className='profile__container__userinfo__hash-content'>
              0xB92a...Aa37
            </span>
            <span className='profile-hover-hint'>{copiedStatus ? 'Copyed' : 'Copy'}</span>
          </div>
          <div className='profile__container__userinfo__joinedSince'>Joined April 2023</div>
        </div>
        <div className='profile__container__sort'>
          <ul>
            {LIST_OF_TAGS.map((el, i) => {
              return (
                <li
                  key={i}
                  className={activeTag == i ? 'profile__container__sort__active' : ''}
                  onClick={() => tagsContentHandler(i)}>
                  {el.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          ref={filtersElement}
          className='profile__container__filters'
          style={{
            boxShadow: `${isScrollOnSecondStickyElement ? 'rgba(0, 0, 0, 0.1) 0 2px 5px' : ''}`,
          }}>
          <div className='profile__container__filters__img'>
            <img src={filters} alt='filters' />
          </div>
          <form
            autoComplete='off'
            onSubmit={() => {}}
            className='main-header__container__row__search profile__container__filters__search'>
            <label htmlFor='nftSearch'>
              <img src={magnifyingGlass} alt='search' />
            </label>
            <input
              id='nftSearch'
              value={searchbarContent}
              onChange={(e) => setSearchbarContent(e.target.value)}
              type='text'
              placeholder='Search here'
            />
            <label htmlFor='nftSearch'>
              <img
                onClick={() => setSearchbarContent('')}
                style={{ display: `${searchbarContent ? 'block' : 'none'}` }}
                src={closeButton}
                alt='clear'
              />
            </label>
          </form>
          <div className='profile__container__filters__sortBy'>
            <img
              className='profile__container__filters__sortBy__adaptive'
              src={sortBy}
              alt='sortBy'
            />
            <div className='profile__container__filters__sortBy__container'>
              <span>Recently received</span>
              <img src={bottomArrow} alt='show more sorts' />
            </div>
          </div>
          <ul className='profile__container__filters__showMods'>
            {DISPLAY_MODS_NAMES.map((name, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setActiveDisplayMode(i)}
                  className={
                    'profile__container__filters__showMods__item' +
                    (activeDisplayMode == i
                      ? ' profile__container__filters__showMods__item__active'
                      : '')
                  }>
                  <img src={DISPLAY_MODS[i]} alt={name} />
                </div>
              );
            })}
          </ul>
        </div>
        <div className='profile__container__items'>
          {!userData.inventory[LIST_OF_TAGS[activeTag].value].length && (
            <>
              <span>No items found for this search</span>
              <button type='button'>Back to all items</button>
            </>
          )}
          {userData.inventory[LIST_OF_TAGS[activeTag].value].map((el, id) => {
            return (
              <div key={id} className='profile__container__items__item'>
                <img
                  className='profile__container__items__item__preview'
                  src={el.images ? el.images[0].picture : el.picture}
                  alt='prewiew'
                />
                <div className='profile__container__items__item__title'>{el.name}</div>
                <div className='profile__container__items__item__info'>
                  <div className='profile__container__items__item__info__item'>
                    <span>FLOOR</span>
                    <span>{'0.20' + ' ETH'}</span>
                  </div>
                  <div className='profile__container__items__item__info__item'>
                    <span>VOLUME</span>
                    <span>{'807' + ' ETH'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
