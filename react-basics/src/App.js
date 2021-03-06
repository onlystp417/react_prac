import { Component } from 'react';
import Comment from './Comment';
import Clock from './Clock';
import CommentCard from './commentCard';

const commentData = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Jinwen',
    avatarUrl: 'data:image/jpeg;base64,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',
  },
};
class App extends Component{
  render() {
    return (
      <div id="app">
        <h1>阿囉哈，Jinwen</h1>
        <CommentCard>
          <Comment
            date={commentData.date}
            text={commentData.text}
            author={commentData.author}
          />
          <Comment
            date={commentData.date}
            text={commentData.text}
            author={commentData.author}
          />
        </CommentCard>
        <CommentCard>
          <Clock />
        </CommentCard>
        <CommentCard>
          <Clock />
        </CommentCard>
        <CommentCard>
          <Clock />
        </CommentCard>
      </div>
    )
  }
}

export default App;