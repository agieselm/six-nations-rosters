import React, { Fragment } from 'react';
import Card from './Card';

const NavBar = ({ teams }) => {
  return (
    <Fragment>
      {teams.map((team, i) => {
        return (
          <Card
            key={teams[i].id}
            id={teams[i].id}
            img={teams[i].img}
            name={teams[i].name}
            teamKey={teams[i].teamKey}
          />
        );
      })}
    </Fragment>
  );
};

export default NavBar;
