import React, { PropTypes } from 'react';

function SwitchUser({ onSwitchUser }) {
    let inputText = "";

    function _handleKeyPress(evt) {
        if (evt.key === 'Enter') {
          if (inputText.value.length) {
            onSwitchUser(inputText.value);
            inputText.value = "";
          }
        }
    }

    return (
      <div className="switch-user">
        <input
          className="form-control"
          type="text"
          ref={input => (inputText = input)}
          placeholder="Escribe nombre de Usuario para publicar como él"
          onKeyPress={_handleKeyPress}
        />
      </div>
    );
}

SwitchUser.propTypes = {
    onSwitchUser: PropTypes.func
};

export default SwitchUser;
