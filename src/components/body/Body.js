import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ModalWindow from '../general/Modal';
import Todo from './Todo';

import {
  addToDo,
  toggleToDoStatus,
  deleteToDo,
  editToDo,
  markAllCompleted,
} from '../../actions';

import './body.scss';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      editToDo: null,
    };
  }

  handleAdd = () => {
    if (this.description.value !== '') {
      this.props.addToDo(this.description.value);
      this.description.value = '';
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleAdd();
    }
  }

  toggleStatus = (id) => {
    this.props.toggleToDoStatus(id);
  }

  handleDelete = (id) => {
    this.props.deleteToDo(id);
  }

  openModal = (todo) => {
    this.setState({
      isModalOpen: true,
      editToDo: todo,
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      editToDo: null,
    });
  }

  editToDo = (value) => {
    if (value !== '') {
      this.props.editToDo({ description: value, id: this.state.editToDo.id });
      this.closeModal();
    }
  }

  render() {
    const toDos = this.props.todos.filter((todo) => {
      return this.props.filter === 2 || todo.status === this.props.filter;
    }).map((todo) => {
      return (
        <Todo
          key={ todo.id }
          todo={ todo }
          toggleStatus={ this.toggleStatus }
          openModal={ this.openModal }
          handleDelete={ this.handleDelete }
        />
      );
    });

    return (
      <div className='list'>
        <h3>TO DO LIST</h3>
        <div className='input-group'>
          <input
            ref={ (input) => { this.description = input; } }
            onKeyPress={ this.handleKeyPress }
            type='text'
            className='form-control'
            placeholder='Add To Do...'
          />
          <span className='input-group-btn'>
            <button onClick={ () => this.handleAdd() } className='btn btn-add' type='button'>Add</button>
          </span>
        </div>
        <br />
        <button
          onClick={ () => this.props.markAllCompleted() }
          className={ this.props.filter !== 1 ? 'btn btn-add' : 'hidden btn btn-add' }
        >
          Mark all as completed
        </button>
        <ul className='col-md-12'>
          {
            toDos.length >= 1 ?
              toDos :
              <span className='color-gray col-md-12'> No To Do was found to display</span>
          }
        </ul>
        <ModalWindow
          description={ this.state.editToDo ? this.state.editToDo.description : null }
          isOpen={ this.state.isModalOpen }
          closeModal={ this.closeModal }
          submitModal={ this.editToDo }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { /* could also use bindActionCreators... :) */
    addToDo: (description) => {
      dispatch(addToDo(description));
    },
    toggleToDoStatus: (id) => {
      dispatch(toggleToDoStatus(id));
    },
    deleteToDo: (id) => {
      dispatch(deleteToDo(id));
    },
    editToDo: (data) => {
      dispatch(editToDo(data));
    },
    markAllCompleted: () => {
      dispatch(markAllCompleted());
    },
  };
};

Body.propTypes = {
  markAllCompleted: PropTypes.func.isRequired,
  addToDo: PropTypes.func.isRequired,
  editToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
  toggleToDoStatus: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  filter: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
