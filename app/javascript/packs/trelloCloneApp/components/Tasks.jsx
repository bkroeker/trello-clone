import React from 'react';

import Task from './Task';

export default class Tasks extends React.Component {
  componentDidMount() {
    this.makeSortable();
  }

  componentWillUpdate(nextProps, nextState) {
    // JQuery and React can get out of sync when dragging a task
    // from one column to another.  This kludge fixes the issue.
    // With more time, perhaps a better solution could be found.
    $(this.refs.tasks).sortable('destroy');
  }

  componentDidUpdate() {
    this.makeSortable();
  }

  makeSortable() {
    $(this.refs.tasks).sortable({
      update: this.onPositionChange,
      connectWith: ".tasks"
    })
  }

  onPositionChange = (e, ui) => {
    e.preventDefault(); // We'll handle positioning ourselves through React, thanks.
    const taskId = ui.item.data('task-id');
    const columnId = $(ui.item).closest('[data-column-id]').data('column-id');
    const newPosition = ui.item.index() + 1;
    this.props.onChangePosition(taskId, columnId, newPosition);
  }

  renderTask = (task) => {
    return (
      <Task
        key={task.id}
        task={task}
        onDelete={this.props.onDelete}
      />
    );
  }

  render() {
    return (
      <ul ref='tasks' className='tasks clearfix'>
        {this.props.tasks.map(this.renderTask)}
      </ul>
    );
  }
}
