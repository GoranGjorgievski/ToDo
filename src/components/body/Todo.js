import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  render() {
    return (
      <li>
        <input
          onClick={ () => this.props.toggleStatus(this.props.todo.id) }
          type='checkbox'
          id={ `pure-toggle-${ this.props.todo.id }` }
          className={ this.props.todo.status === 1 ? 'todo-completed' : '' }
          hidden
        />
        <label className='pure-toggle' htmlFor={ `pure-toggle-${ this.props.todo.id }` } >
          <i className='fa fa-times fa-2x' />
          <span className='truncate' >{ this.props.todo.description }</span>
        </label>
        <span className='action-items'>
          <i onClick={ () => { this.props.openModal(this.props.todo); } } className='fa fa-pencil fa-2x pull-right' aria-hidden='true' />
          <i onClick={ () => { this.props.handleDelete(this.props.todo.id); } } className='fa fa-trash fa-2x pull-right' aria-hidden='true' />
        </span>
      </li>
    );
  }
}

Todo.propTypes = {
  toggleStatus: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};
