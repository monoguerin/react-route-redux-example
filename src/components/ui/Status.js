import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import TimeAgo from './TimeAgo';
import Counts from './Counts';

function Status({ from, time, text, comments, reactions }) {
    return (
      <div className="status row">
        <div className="col-xs-1 left-pane">
          <Avatar />
        </div>
        <div className="col-xs-11 right-pane">
          <p className="status-from"><strong>{from}</strong></p>
          <TimeAgo date={time} />
          <p className="status-text">{text}</p>
          <button className="btn btn-outline">Reaccionar</button>
          <button className="btn btn-outline">Comentar</button>
        </div>
        <div className="col-xs-12">
          <Counts reactions={reactions.length} comments={comments.length} />
        </div>
      </div>
    );
}

Status.propTypes = {
    from: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array,
    reactions: PropTypes.array
};

export default Status;
