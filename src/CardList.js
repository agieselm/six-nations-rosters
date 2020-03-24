import React, { Fragment } from 'react';
import FlipCard from './FlipCard';

const CardList = ({ players }) => {
  return (
    <Fragment>
      {players.map((player, i) => {
        return (
          <FlipCard
            key={players[i].id}
            id={players[i].id}
            img={players[i].img}
            name={players[i].name}
            pos={players[i].pos}
            age={players[i].age}
            ht={players[i].ht}
            wt={players[i].wt}
            apps={players[i].apps}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
