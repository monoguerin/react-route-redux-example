import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import TimeAgo from './TimeAgo';

function Comment({ from, text, time}) {
    return (
      <div className="comment">
        <div className="col-xs-1 left-pane">
          <Avatar size={40} />
        </div>
        <div className="col-xs-11 right-pane">
          <span className="comment-from"><strong>{from}</strong></span>
          <span className="comment-text">{text}</span>
          <p><TimeAgo date={time} /></p>
        </div>
        <div className="clearfix" />
      </div>
    );
}

Comment.propTypes = {
    from: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string
};

export default Comment;
