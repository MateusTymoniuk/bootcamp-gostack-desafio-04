import React from 'react';

import './Post.css';

import Comment from './Comment';

function Post({post}) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={post.author.avatar} />
        <div className="post-header-author">
          <span className="post-header-author-name">{post.author.name}</span>
          <span className="post-header-author-date">{post.date}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-comments">
        <div className="line"></div>
        {post.comments.map(
          comment => (
            <Comment key={comment.id} comment={comment} />
          )
        )}
      </div>
    </div>
  );
}

export default Post;