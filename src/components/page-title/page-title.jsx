import React from 'react';
import PropTypes from 'prop-types';

import './page-title.scss';

const PageTitle = ({ title, rightHeaderContent }) => (
  <div className="page-title">
    <h3 className="title">{title}</h3>
    {rightHeaderContent}
  </div>
);

PageTitle.defaultProps = {
  rightHeaderContent: null,
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  rightHeaderContent: PropTypes.element,
};

export default PageTitle;
