import React from 'react';
import Adder from './Adder';

export default class TaskAdder extends React.Component {
  render() {
    return (
      <Adder
        label='Add Task'
        inputClass='form-control-sm'
        buttonClass='btn-sm'
        onAdd={this.props.onAdd}
      />
    );
  }
}
