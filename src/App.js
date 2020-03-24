import React, { Component } from 'react';

import NavBar from './NavBar';
import { teams } from './teams';
import SearchField from './SearchField';
import CardList from './CardList';
import { englandPlayers, frenchPlayers } from './players';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: englandPlayers,
      searchField: ''
    };
  }

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
        <NavBar teams={teams} />
        <SearchField searchChange={this.onSearchChange} />
        <CardList players={filteredPlayers} />
      </div>
    );
  }
}

export default App;
