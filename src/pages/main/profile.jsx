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

import { useState } from 'react';

const Profile = () => {
  const LIST_OF_TAGS = ['Collected', 'Created', 'Favorited'];
  const LIST_OF_SORTS = ['Most recent', 'Price high to low', 'Price low to high', 'Most viewed'];
  const DISPLAY_MODS_NAMES = ['list', 'gallery', 'grid', 'side'];
  const DISPLAY_MODS = [list, gallery, grid, side];

  const [activeDisplayMode, setActiveDisplayMode] = useState(0);
  const [activeTag, setActiveTag] = useState(0);
  const [searchbarContent, setSearchbarContent] = useState('');

  return (
    <div className='profile'>
      <div className='profile__images'>
        <label className='profile__images__background-wrap'>
          <input type='file' accept='image/*' style={{ display: 'none' }} tabIndex='-1' />
          <img
            className='profile__images__background-wrap__background'
            src={user}
            alt='background'
          />
          <div className='profile__images__background-wrap__changeHover'>
            <img src={edit} alt='change avatar' />
          </div>
        </label>
        <label className='profile__images__avatar-wrap'>
          <input type='file' accept='image/*' style={{ display: 'none' }} tabIndex='-1' />
          <img className='profile__images__avatar-wrap__avatar' src={user} alt='avatar' />
          <div className='profile__images__avatar-wrap__changeHover'>
            <img src={edit} alt='change avatar' />
          </div>
        </label>
      </div>
      <div className='profile__container'>
        <div className='profile__container__wrap'>
          <div className='profile__container__wrap__username'>Anypaster</div>
          <div className='profile__container__wrap__actions'>
            <div className='profile__container__wrap__actions__img'>
              <img src={share} alt='share' />
            </div>
            <div className='profile__container__wrap__actions__img'>
              <img src={more} alt='settings' />
            </div>
          </div>
        </div>
        <div className='profile__container__userinfo'>
          <div className='profile__container__userinfo__hash'>0xB92a...Aa37</div>
          <div className='profile__container__userinfo__joinedSince'>Joined April 2023</div>
        </div>
        <div className='profile__container__sort'>
          <ul>
            {LIST_OF_TAGS.map((el, i) => {
              return (
                <li
                  key={i}
                  className={activeTag == i ? 'profile__container__sort__active' : ''}
                  onClick={() => setActiveTag(i)}>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='profile__container__filters'>
          <div className='profile__container__filters__img'>
            <img src={filters} alt='filters' />
          </div>
          <form
            autoComplete='off'
            onSubmit={() => console.log('submit')}
            className='main-header__container__row__search'>
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
            <span>Recently received</span>
            <img src={bottomArrow} alt='show more sorts' />
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
          <span>No items found for this search</span>
          <button type='button'>Back to all items</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
