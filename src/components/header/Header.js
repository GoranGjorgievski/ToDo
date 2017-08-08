import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeFilter,
} from './../../actions';

import './header.scss';

class Header extends Component {
  setFilter = (event) => {
    this.props.changeFilter(event.target.value);
  }
  render() {
    return (
      <div className='filters'>
        <div className='inline'>
          <input type='radio' id='radio01' name='radio' value='2' onChange={ (event) => this.setFilter(event) } checked={ this.props.filter === 2 } />
          <label htmlFor='radio01'><span />All</label>
        </div>
        <div className='inline'>
          <input type='radio' id='radio02' name='radio' value='0' onChange={ (event) => this.setFilter(event) } checked={ this.props.filter === 0 } />
          <label htmlFor='radio02'><span />Active</label>
        </div>
        <div className='inline'>
          <input type='radio' id='radio03' name='radio' value='1' onChange={ (event) => this.setFilter(event) } checked={ this.props.filter === 1 } />
          <label htmlFor='radio03'><span />Completed</label>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (filter) => {
      dispatch(changeFilter(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
