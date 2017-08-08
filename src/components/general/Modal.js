import React from 'react';
import Modal from 'react-responsive-modal';

import PropTypes from 'prop-types';

export default class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      error: false,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      open: nextProps.isOpen,
    });
  }

  handleSubmit = () => {
    if (this.newDescription.value !== '') {
      this.props.submitModal(this.newDescription.value);
    } else {
      this.setState({
        error: true,
      });
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={ open } onClose={ this.props.closeModal } little>
          <h2>Edit To Do</h2>
          <input
            ref={ (input) => { this.newDescription = input; } }
            type='text'
            className='form-control'
            defaultValue={ this.props.description }
            placeholder='Insert To Do description...'
          />
          <br />
          <p className={ !this.state.error ? 'hidden' : '' } style={ { color: 'red' } }>Description is required</p>
          <button onClick={ this.handleSubmit } className='btn btn-add'>Change</button>
        </Modal>
      </div>
    );
  }
}

ModalWindow.propTypes = {
  closeModal: PropTypes.func.isRequired,
  submitModal: PropTypes.func.isRequired,
  description: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};

ModalWindow.defaultProps = {
  description: '',
};
