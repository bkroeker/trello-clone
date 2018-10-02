import React from 'react';

import Task from './Task';

export default class Tasks extends React.Component {
  componentDidMount() {
    $(this.refs.tasks).sortable({
      update: this.onPositionChange
    })
  }

  onPositionChange = (e, ui) => {
    const taskId = ui.item.data('task-id');
    const newPosition = ui.item.index() + 1;
    this.props.onChangePosition(taskId, newPosition);
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
      <ul ref='tasks' id='tasks' className='clearfix'>
        {this.props.tasks.map(this.renderTask)}
      </ul>
    );
  }
}
