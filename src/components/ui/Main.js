import React, { PropTypes } from 'react';
import NewStatus from '../containers/NewStatus';
import SwitchUser from '../containers/SwitchUser';
import Publication from './Publication';
import { Link } from 'react-router-dom';

function Main({ publications, childrenText }) {
  return (
    <div className="app-base container">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      {childrenText}
      <SwitchUser />
      <NewStatus />
      {publications.map((currentPublication, idx) => {
          return (
            <Publication
              key={idx}
              indexStatus={idx}
              publication={currentPublication}
            />
          );
      })}
    </div>
  );
}

Main.propTypes = {
    publications: PropTypes.array
};

export default Main;
