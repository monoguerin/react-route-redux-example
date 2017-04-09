import React, { PropTypes } from 'react';
import moment from 'moment';

moment.locale('es');

function TimeAgo({ date }) {
    const prettyDate = moment(date).fromNow();

    return (
      <span className="time-ago">{prettyDate}</span>
    );
}

TimeAgo.propTypes = {
    date: PropTypes.string
};

export default TimeAgo;