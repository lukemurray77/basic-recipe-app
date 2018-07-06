import React from 'react';
import { connect } from 'react-redux';

import getData from '../actions/get-data';


const Home = props => (
  <div>
    <h2>Home Page</h2>
    <button onClick={() => props.getData()}>CLICK</button>
  </div>
);

const mapStateToProps = ({ data }) => ({
  data,
});

const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
