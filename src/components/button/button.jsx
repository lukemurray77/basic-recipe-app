import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './button.scss';

const Button = ({ type, text, onClick }) =>
  (
    <div className="button">
      <button
        type="button"
        className={`btn btn-${type} btn-block`}
        onClice={onClick}
      >
        {text}
      </button>
    </div>
  );

const LinkButtonWrapper = (props) => {
  const button = props.isLink ? (
    <Link to={props.path}>
      <Button {...props} />
    </Link>
  ) :
    (
      <Button {...props} />
    );
  return button;
};

Button.defaultProps = {
  type: 'primary',
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LinkButtonWrapper;
