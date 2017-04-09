import React, { PropTypes } from 'react';

function NewComment({ onNewComment, parentKey, user }) {
  let inputText = null;

  function _handleKeyPress(evt) {
      if (evt.key === 'Enter') {
        onNewComment(parentKey, {
          from: user,
          text: inputText.value
        });
        inputText.value = '';
      }
  }

  return (
    <div className="new-comment">
      <input
        className="form-control"
        ref={input => {inputText = input}}
        placeholder="Escribe un comentario"
        onKeyPress={_handleKeyPress}
        type="text"
      />
    </div>
  );
}

NewComment.propTypes = {
    onNewComment: PropTypes.func,
    parentKey: PropTypes.number,
    user: PropTypes.string
};

export default NewComment;
