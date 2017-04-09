import React, { PropTypes } from 'react';

function NewStatus({ onNewPublication, user }) {
  
  let statusInput = null;

  function publishStatus() {
    if (statusInput.value.length) {
      onNewPublication({
        from: user,
        text: statusInput.value
      });
      statusInput.value = "";
    }
  }

  function _handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      publishStatus();
    }
  }

  return (
    <div className="new-status component row">
      <input 
        className="form-control"
        ref={input => {statusInput = input}}
        type="text"
        placeholder="Escribe aqui tu estado"
        onKeyPress={_handleKeyPress}
      />
      <button className="btn btn-success pull-right" onClick={publishStatus}>Publicar</button>
      <div className="clearfix" />
    </div>
  ); 
}

NewStatus.propTypes = {
    onNewPublication: PropTypes.func,
    user: PropTypes.string
};

export default NewStatus;