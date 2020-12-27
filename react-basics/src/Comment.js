import { Component } from 'react';
import UserInfo from './UserInfo.js';

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author}/>
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">
          {formatDate(this.props.date)}
        </div>
        <div className="tick"></div>
      </div>
    )
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}

export default Comment;