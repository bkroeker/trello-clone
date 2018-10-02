import React from 'react';

import Column from './Column';
import ColumnAdder from './ColumnAdder';

export default class Columns extends React.Component {
  componentDidMount() {
    $(this.refs.columns).sortable({
      items: "li:not(.ui-state-disabled)",
      placeholder: "ui-state-highlight",
      update: this.onPositionChange
    })
  }

  onPositionChange = (e, ui) => {
    const columnId = ui.item.data('column-id');
    const newPosition = ui.item.index() + 1;
    this.props.onChangePosition(columnId, newPosition);
  }

  renderColumn = (column) => {
    return (
      <Column
        key={column.id}
        column={column}
        onDelete={this.props.onDelete}
        onAddTask={this.props.onAddTask}
        onChangePositionTask={this.props.onChangePositionTask}
        onDeleteTask={this.props.onDeleteTask}
      />
    );
  }

  render() {
    return (
      <ul ref='columns' id='columns' className='clearfix'>
        {this.props.columns.map(this.renderColumn)}
        <li className='ui-state-disabled'>
          <ColumnAdder onAdd={this.props.onAddColumn} />
        </li>
      </ul>
    );
  }
}
