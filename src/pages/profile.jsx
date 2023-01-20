const Profile = () => {
  return (
    <>
      <div className='profile'>
        <div className='profile__container'>
          <div className='profile__container__header'>
            <div className='profile__container__header__placeholder'>
              <img src='' alt='avatar' />
            </div>
            <div className='profile__container__header__avatar'></div>
          </div>
          <div className='profile__container__user-info'></div>
          <div className='porfile__container__filters'></div>
          <div className='profile__container__nft-cards'></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
