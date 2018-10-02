import React from 'react';

export default class Task extends React.Component {
  onDelete = (e) => {
    e.preventDefault();
    this.props.onDelete(this.props.task);
  }

  render() {
    return (
      <li data-task-id={this.props.task.id}>
        <div className='card'>
          <div className='card-body'>
            {this.props.task.position}. {this.props.task.name}
            <a onClick={this.onDelete} href='#' className='float-right btn btn-sm btn-danger' data-confirm='Are you sure?'>X</a>
          </div>
        </div>
      </li>
    );
  }
}
