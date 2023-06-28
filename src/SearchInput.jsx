import { Component } from 'react'
import './SearchInput.scss'

export default class SearchInput extends Component {
  render() {
    return (
      <div className="component-search-input">
        <div>
            <input onChange={this.props.textChanged} />
        </div>
      </div>
    )
  }
}
