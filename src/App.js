import React, { Component } from 'react';

import TeamList from './TeamList';
import { teams } from './teams';
import SearchField from './SearchField';
import PlayerList from './PlayerList';
import {
  englandPlayers,
  frenchPlayers,
  irishPlayers,
  italianPlayers,
  scotishPlayers,
  welshPlayers
} from './players';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: englandPlayers,
      searchField: ''
    };
  }

  onTeamClick = event => {
    console.log(event);
  };

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredPlayers = this.state.players.filter(player => {
      return player.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1 className='f1'>Guinness Six Nations Rosters</h1>
        <TeamList teams={teams} teamChange={this.onTeamClick} />
        <SearchField searchChange={this.onSearchChange} />
        <PlayerList players={filteredPlayers} />
      </div>
    );
  }
}

export default App;
