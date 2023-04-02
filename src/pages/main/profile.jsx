import user from '../../assets/img/svg/user.svg';
import sortBy from '../../assets/img/svg/sortBy.svg';
import share from '../../assets/img/svg/share.svg';
import more from '../../assets/img/svg/more.svg';
import filters from '../../assets/img/svg/filters.svg';
import magnifyingGlass from '../../assets/img/svg/magnifyingGlass.svg';

import { useState } from 'react';

const Profile = () => {
  const LIST_OF_TAGS = ['Collected', 'Created', 'Favorited'];
  const LIST_OF_SORTS = ['Most recent', 'Price high to low', 'Price low to high', 'Most viewed'];

  const [activeTag, setActiveTag] = useState(0);

  return (
    <div className='profile'>
      <div className='profile__background'>
        <img className='profile__avatar' src={user} alt='avatar' />
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
              <img src='' alt='large_gallery' />
              <img src='' alt='smaller_gallery' />
              <img src='' alt='side' />
            </div>
          </div>
        </div>
        <div className='profile__container__items'>No items found for this search</div>
      </div>
    </div>
  );
};

export default Profile;
