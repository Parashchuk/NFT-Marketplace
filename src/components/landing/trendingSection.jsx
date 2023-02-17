import { useSelector } from 'react-redux';

const TrendingSection = () => {
  const trendCollection = useSelector((state) => state.collections.data);

  return (
    <section>
      <div className='trending-section wrapper'>
        <div className='trending-section__container wrapper-container'>
          <div className='trending-section__title'>Trending Collection</div>
          <div className='trending-section__subtitle'>
            Checkout our weekly updated trending collection.
          </div>
          <div className='trending-section__images-container'>
            {trendCollection.map((el, id) => {
              //Skip the first top collection cause it's already shown
              if (id === 0) return null;
              let iter = 0;
              return (
                <div key={id} className='trending-section__images__column'>
                  <div className='trending-section__images__column__preview'>
                    <img src={el.images[iter++].picture} alt='collection image' />
                  </div>
                  <div className='trending-section__images__column__minimize-images'>
                    <div>
                      <img src={el.images[iter++].picture} alt='collection image' />
                    </div>
                    <div>
                      <img src={el.images[iter++].picture} alt='collection image' />
                    </div>
                    <div className='trending-section__images__column__minimize-images__more-button'>
                      {el.images.length - iter}+
                    </div>
                  </div>
                  <div className='trending-section__images__column__name'>{el.name}</div>
                  <div className='trending-section__images__column__author author-template'>
                    <img src={el.author.avatar} alt='avatar' />
                    {el.author.username}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
