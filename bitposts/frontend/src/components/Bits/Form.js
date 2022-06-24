import React, { Component } from 'react'

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault(),
    console.log("submit");
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div>Add new post</div>
    )
  }
}

export default Form