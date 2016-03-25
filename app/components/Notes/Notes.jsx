import React, { Component, PropTypes } from 'react';
import NoteList from './NoteList.jsx';

export default class Notes extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired
  }
  render(){
    console.log('notes:', this.props.notes);

    return (
      <div>
        <h3> 对{this.props.username}评论： </h3>
        <NoteList notes={this.props.notes} />
      </div>
    )
  }
}
