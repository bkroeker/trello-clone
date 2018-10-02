import React from 'react';
import Tasks from './Tasks';
import TaskAdder from './TaskAdder';

export default class Column extends React.Component {
  onDelete = (e) => {
    e.preventDefault();
    this.props.onDelete(this.props.column);
  }

  onAddTask = (attrs) => {
    return this.props.onAddTask(this.props.column.id, attrs);
  }

  render() {
    return (
      <li data-column-id={this.props.column.id}>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title clearfix'>
              {this.props.column.position}. {this.props.column.name}
              <a onClick={this.onDelete} href='#' className='float-right btn btn-danger' data-confirm='Are you sure?'>X</a>
            </h5>

            <Tasks
              tasks={this.props.column.tasks}
              onChangePosition={this.props.onChangePositionTask}
              onDelete={this.props.onDeleteTask}
            />
            <TaskAdder onAdd={this.onAddTask} />
          </div>
        </div>
      </li>
    );
  }
}
