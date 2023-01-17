import { Link } from 'react-router-dom';

import {
  paintBrush,
  swatches,
  musicNotes,
  camera,
  videoCamera,
  magicWand,
  basketball,
  planet,
  placeholder_paintBrush,
  placeholder_swatches,
  placeholder_musicNotes,
  placeholder_camera,
  placeholder_videoCamera,
  placeholder_magicWand,
  placeholder_basketball,
  placeholder_planet,
} from '../../assets/img/categories/index';

const CategoriesSection = () => {
  const categories = [
    { name: 'Art', img: paintBrush, placeholder: placeholder_paintBrush },
    { name: 'Collectibles', img: swatches, placeholder: placeholder_swatches },
    { name: 'Music', img: musicNotes, placeholder: placeholder_musicNotes },
    { name: 'Photography', img: camera, placeholder: placeholder_camera },
    { name: 'Video', img: videoCamera, placeholder: placeholder_videoCamera },
    { name: 'Utility', img: magicWand, placeholder: placeholder_magicWand },
    { name: 'Sport', img: basketball, placeholder: placeholder_basketball },
    { name: 'Virtual Worlds', img: planet, placeholder: placeholder_planet },
  ];

  return (
    <section>
      <div className='categories-section wrapper'>
        <div className='categories-section__container wrapper-container'>
          <div className='categories-section-title'>Browse categories</div>
          <div className='categories-section__navigation-cards'>
            {categories.map((el, id) => {
              return (
                <div key={id} className='categories-section__navigation-cards__card'>
                  <Link
                    to='#'
                    style={{ backgroundImage: `url(${el.placeholder})` }}
                    className='categories-section__navigation-cards__card-image'>
                    <div>
                      <img src={el.img} alt='category' />
                    </div>
                  </Link>
                  <Link to='#' className='categories-section__navigation-cards__card-description'>
                    {el.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
