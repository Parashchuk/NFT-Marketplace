import close from '../../assets/img/svg/close.svg';
import infoImg from '../../assets/img/svg/infoImg.svg';
import errorImg from '../../assets/img/svg/error.svg';

const InfoAlert = ({ type, text, title, setter }) => {
  const images = {
    info: infoImg,
    error: errorImg,
  };

  return (
    <div
      onClick={() => setter(false)}
      className={`pop-up-alert pop-up-alert-${type} ${text ? 'pop-up-active' : ''}`}>
      <div className={`pop-up-alert__container pop-up-alert-${type}__bg`}>
        <div className='pop-up-alert__text-container'>
          <div className='pop-up-alert__image'>
            <img className={`pop-up-alert-${type}__img`} src={images[type]} alt='info' />
          </div>
          <div className='pop-up-alert__description'>
            <div className='pop-up-alert__description__title'>{title ? title : 'Info'}</div>
            {text}
          </div>
        </div>
        <img
          className={`pop-up-alert__close pop-up-alert-${type}__close`}
          onClick={() => setter(false)}
          src={close}
          alt='close'
        />
      </div>
    </div>
  );
};

export default InfoAlert;
