import React from 'react';
import Adder from './Adder';

export default class ColumnAdder extends React.Component {
  render() {
    return (
      <div className='card bg-light'>
        <div className='card-body'>
          <h5 className='card-title'>Add Column</h5>
          <Adder
            label='Add Column'
            onAdd={this.props.onAdd}
          />
        </div>
      </div>
    );
  }
}
