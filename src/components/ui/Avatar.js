import React, { PropTypes } from 'react';

function Avatar({ size = 50 }) {
    return (
      <img
        className="img-center"
        src="http://www.dfhtechnologies.com/images/user.png"
        width={size.toString()}
        height={size.toString()}
      />
    );
}

Avatar.propTypes = {
  size: PropTypes.number
}

export default Avatar;