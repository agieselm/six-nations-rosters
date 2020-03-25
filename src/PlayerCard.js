import React, { Fragment } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const PlayerCard = ({ img, name, pos, age, ht, wt, apps }) => {
  return (
    <div className='tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5'>
      <Flippy flipOnHover={true} flipDirection='horizontal'>
        <FrontSide
          style={{
            color: '#B29442'
          }}
        >
          <img alt='players' src={img} />
          <Fragment>
            <h2>{name}</h2>
            <h4>{pos}</h4>
          </Fragment>
        </FrontSide>

        <BackSide
          style={{
            color: '#B29442'
          }}
        >
          <Fragment>
            <h2>Age: {age}</h2>
            <h2>Height: {ht}</h2>
            <h2>Weight: {wt}</h2>
            <h2>Appearances: {apps}</h2>
          </Fragment>
        </BackSide>
      </Flippy>
    </div>
  );
};

export default PlayerCard;
