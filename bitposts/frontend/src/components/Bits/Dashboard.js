import React, { Fragment } from 'react';
import Form from './Form';
import Bits from './Bits';

export default function Dashboard() {
  return (
    <div>
        <Fragment>
            <Form />
            <Bits />
        </Fragment>
    </div>
  )
}
