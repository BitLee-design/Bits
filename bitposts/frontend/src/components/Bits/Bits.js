import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { propTypes } from 'prop-types';
import { getBits, deleteBits } from '../../actions/bits';

export class Bits extends Component {
  static propTypes = {
    bits: propTypes.array.isRequired,
    getBits: propTypes.func.isRequired,
    deleteBits: propTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getBits();
  }

  render() {
    return (
      <Fragment>
        <h2>Bit Post Lists</h2>
        <table className='table table-stripe'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.bits.map(lead => (
              <tr key={(Bits.id)}>
                <td>{Bits.id}</td>
                <td>{Bits.name}</td>
                <td>{Bits.email}</td>
                <td>{Bits.message}</td>
                <td><button onClick={this.props.deleteBits.bind(this, Bits.id)} className='btn btn-danger btn-sm'>
                  Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  bits: state.bitsReducer.bits
})

export default connect(mapStateToProps, { getBits, deleteBits })(Bits);