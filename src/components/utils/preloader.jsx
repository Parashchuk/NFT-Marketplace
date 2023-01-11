import preloader from '../../assets/img/svg/preloader.svg';

const Preloader = ({ active }) => {
  return (
    <div className={'preloader ' + (active ? 'preloader-active' : '')}>
      <img src={preloader} alt='preloader' />
    </div>
  );
};

export default Preloader;
