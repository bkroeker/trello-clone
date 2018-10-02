import React from 'react';

import Column from './Column';

export default class Columns extends React.Component {
  componentDidMount() {
    $(this.refs.columns).sortable({
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
      />
    );
  }

  render() {
    return (
      <ul ref='columns' id='columns' className='clearfix'>
        {this.props.columns.map(this.renderColumn)}
      </ul>
    );
  }
}
