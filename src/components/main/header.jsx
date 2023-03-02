const MainHeader = () => {
  return (
    <header>
      <div className='main-header'>
        <div className='main-header__container'>
          <div className='main-header__container__row'>
            <div className='main-header__container__row__logo'></div>
            <div className='main-header__container__row__search'></div>
          </div>
          <div className='main-header__container__row'>
            <nav>
              <ul className='main-header__container__row__navigation'>
                <li>Explore</li>
                <li>Stats</li>
                <li>Create</li>
              </ul>
            </nav>
            <div className='main-header__container__row__buttons'>
              <div>
                <img src='' alt='shopCart' />
              </div>
              <div>
                <img src='' alt='nightMode' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
