import React, { PropTypes } from 'react';
import Status from './Status';
import Comment from './Comment';
import NewComment from '../containers/NewComment';

function Publication({ publication, indexStatus }) {
  return (
    <div className="publication component row">
      <Status {...publication} />
      <div className="comments-container row">
        {publication.comments.map((comment, idx) => {
          return <Comment key={idx} {...comment} />;
        })}
        <NewComment parentKey={indexStatus} />
      </div>
    </div>
  );
}

Publication.propTypes = {
    publication: PropTypes.object,
    indexStatus: PropTypes.number
};

export default Publication;
