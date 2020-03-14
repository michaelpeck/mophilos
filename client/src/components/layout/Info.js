import React from 'react';
import PropTypes from 'prop-types';

import { Paper } from '@material-ui/core';

const Info = props => {
  return (
    <Paper elevation={5} className={props.class}>{props.children}</Paper>
  )
}

Info.propTypes = {
  className: PropTypes.string,
};

Info.defaultProps = {
  className: null,
};

export default Info;
