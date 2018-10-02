import React from 'react';

export default class Column extends React.Component {
  onDelete = (e) => {
    e.preventDefault();
    this.props.onDelete(this.props.column);
  }

  render() {
    return (
      <div className='card w-25 float-left'>
        <div className='card-body'>
          <h5 className='card-title'>
            {this.props.column.name}
            <a onClick={this.onDelete} href='#' className='float-right btn btn-danger' data-confirm='Are you sure?'>X</a>
          </h5>
        </div>
      </div>
    );
  }
}
