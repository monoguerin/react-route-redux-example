import React, { PropTypes } from 'react';

function Counts({ reactions, comments}) {
    return (
      <div className="counts-container row">
        <div className="pull-left reactions-counter">{reactions}</div>
        <div className="pull-right comments-counter">{comments > 0 ? `${comments} comentarios` : ''}</div>
        <div className="clearfix" />
      </div>
    );
}

Counts.propTypes = {
  reactions: PropTypes.number,
  comments: PropTypes.number
}

export default Counts;