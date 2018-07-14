import React from 'react';
import PropTypes from 'prop-types';

import './page-title.scss';

const PageTitle = ({ title, rightHeaderContent, align }) => (
  <div className="page-title">
    <h3 className={align}>{title}</h3>
    {rightHeaderContent}
  </div>
);

PageTitle.defaultProps = {
  rightHeaderContent: null,
  align: 'left',
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  rightHeaderContent: PropTypes.element,
  align: PropTypes.string,
};

export default PageTitle;
