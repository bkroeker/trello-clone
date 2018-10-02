import React from 'react';

import Column from './Column';

export default class Columns extends React.Component {
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
      <div className='clearfix'>
        {this.props.columns.map(this.renderColumn)}
      </div>
    );
  }
}
