import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

class SearchGithub extends Component {
  static PropTypes = {
    history: PropTypes.object.isRequired
  }
  getRef(ref){
    this.usernameRef = ref;
  }
  handleSubmit(event){
    const username = this.usernameRef.value;
    this.usernameRef.value = '';

    const path = `/profile/${username}`;
    browserHistory.push(path)

  }
  render(){
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">搜索 Github</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchGithub;
