import React from 'react';
import TeamCard from './TeamCard';

const TeamList = ({ teams, teamChange }) => {
  return (
    <div>
      {teams.map((team, i) => {
        return (
          <TeamCard
            onClick={teamChange}
            key={teams[i].id}
            id={teams[i].id}
            img={teams[i].img}
            name={teams[i].name}
            teamKey={teams[i].teamKey}
          />
        );
      })}
    </div>
  );
};

export default TeamList;
