const CategoriesSection = () => {
  return (
    <section>
      <div className='categories-section wrapper'>
        <div className='categories-section__container wrapper-container'>
          <div className='categories-section-title'>Browse categories</div>
          <div className='categories-section__navigation-cards'>
            <div className='categories-section__navigation-cards__card'>
              <a href='#' className='categories-section__navigation-cards__card-image'>
                <div>
                  <img src='./assets/img/categories-section/PaintBrush.svg' alt='paint' />
                </div>
              </a>
              <a href='#' className='categories-section__navigation-cards__card-description'>
                Art
              </a>
            </div>
            <div className='categories-section__navigation-cards__card'>
              <a href='#' className='categories-section__navigation-cards__card-image'>
                <div>
                  <img src='./assets/img/categories-section/Swatches.svg' alt='Swatches' />
                </div>
              </a>
              <a href='#' className='categories-section__navigation-cards__card-description'>
                Collectibles
              </a>
            </div>
            <div className='categories-section__navigation-cards__card'>
              <a href='#' className='categories-section__navigation-cards__card-image'>
                <div>
                  <img src='./assets/img/categories-section/MusicNotes.svg' alt='MusicNotes' />
                </div>
              </a>
              <a href='#' className='categories-section__navigation-cards__card-description'>
                Music
              </a>
            </div>
            <div className='categories-section__navigation-cards__card'>
              <a href='#' className='categories-section__navigation-cards__card-image'>
                <div>
                  <img src='./assets/img/categories-section/Camera.svg' alt='Camera' />
                </div>
              </a>
              <a href='#' className='categories-section__navigation-cards__card-description'>
                Photography
              </a>
            </div>
            <div className='categories-section__navigation-cards__card'>
              <a href='#' className='categories-section__navigation-cards__card-image'>
                <div>
                  <img src='./assets/img/categories-section/VideoCamera.svg' alt='VideoCamera' />
                </div>
              </a>
              <a href='#' className='categories-section__navigation-cards__card-description'>
                Video
              </a>
            </div>
            <div className='categories-section__navigation-cards__card'>
              <a href='#' className='categories-section__navigation-cards__card-image'>
                <div>
                  <img src='./assets/img/categories-section/MagicWand.svg' alt='MagicWand' />
                </div>
              </a>
              <a href='#' className='categories-section__navigation-cards__card-description'>
                Utility
              </a>
            </div>
            <div className='categories-section__navigation-cards__card'>
              <a href='#' className='categories-section__navigation-cards__card-image'>
                <div>
                  <img src='./assets/img/categories-section/Basketball.svg' alt='Basketball' />
                </div>
              </a>
              <a href='#' className='categories-section__navigation-cards__card-description'>
                Sport
              </a>
            </div>
            <div className='categories-section__navigation-cards__card'>
              <a href='#' className='categories-section__navigation-cards__card-image'>
                <div>
                  <img src='./assets/img/categories-section/Planet.svg' alt='planet' />
                </div>
              </a>
              <a href='#' className='categories-section__navigation-cards__card-description'>
                Virtual Worlds
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
