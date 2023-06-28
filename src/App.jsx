import { Component } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResult from './EmojiResult';
import filterEmoji from './filterEmoji';

import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredEmoji: filterEmoji("", 20)
    }

    // this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchChange = (event) => {
      this.setState({
        filteredEmoji: filterEmoji(event.target.value, 20)
      });
    }
  }

  

  render() {
    return (
      <div className="container">
        <Header />
        <SearchInput textChanged={this.handleSearchChange}/>
        <EmojiResult emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
