import React from 'react';

import './Comment.css';

function Comment({comment}) {
  return (
    <div className="comment">
      <img className="comment-avatar" src={comment.author.avatar} />
      <div className="comment-content">
        <span className="comment-content-author-name">{comment.author.name} </span>
        <span className="comment-content-text">{comment.content}</span>
      </div>
    </div>
  );
}

export default Comment;