import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addBits } from '../../actions/bits';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  static PropTypes = {
    addBits: this.prototype.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const bit = { name, email, message };
    this.props.addBits(bit);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div>Add new post</div>
    )
  }
}

export default connect(null, { addBits })(Form);