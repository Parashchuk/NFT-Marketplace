import user from '../../assets/img/svg/user.svg';
import sortBy from '../../assets/img/svg/sortBy.svg';
import share from '../../assets/img/svg/share.svg';
import more from '../../assets/img/svg/more.svg';
import filters from '../../assets/img/svg/filters.svg';
import magnifyingGlass from '../../assets/img/svg/magnifyingGlass.svg';
import edit from '../../assets/img/svg/edit.svg';
import side from '../../assets/img/svg/side.svg';
import gallery from '../../assets/img/svg/gallery.svg';
import grid from '../../assets/img/svg/grid.svg';

import { useState } from 'react';

const Profile = () => {
  const LIST_OF_TAGS = ['Collected', 'Created', 'Favorited'];
  const LIST_OF_SORTS = ['Most recent', 'Price high to low', 'Price low to high', 'Most viewed'];

  const [activeTag, setActiveTag] = useState(0);

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
        <div className='profile__container__filters'>
          <ul>
            {LIST_OF_TAGS.map((el, i) => {
              return (
                <li
                  key={i}
                  className={activeTag == i ? 'profile__container__filters__active' : ''}
                  onClick={() => setActiveTag(i)}>
                  {el}
                </li>
              );
            })}
          </ul>
          <div className='profile__container__filters__search'>
            <img src={filters} alt='filters' />
            <div className='profile__container__filters__search__input'>
              <img src={magnifyingGlass} alt='magnifyingGlass' />
              <input type='text' />
            </div>
            <div className='profile__container__filters__search__sortBy'></div>
            <div className='profile__container__filters__search__showMods'>
              <img src='' alt='list' />
              <img src={gallery} alt='gallery' />
              <img src={grid} alt='grid' />
              <img src={side} alt='side' />
            </div>
          </div>
        </div>
        <div className='profile__container__items'>No items found for this search</div>
      </div>
    </div>
  );
};

export default Profile;
