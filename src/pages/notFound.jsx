import { Link } from 'react-router-dom';

import placeholder from '../assets/img/placeholders/notFound_placeholder.png';

const NotFound = () => {
  return (
    <div className='notFound'>
      <img src={placeholder} alt='notFound' />
      <div className='notFound-title'>Page you try to search was not found</div>
      <Link className='button-template button-primary' to='/'>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
