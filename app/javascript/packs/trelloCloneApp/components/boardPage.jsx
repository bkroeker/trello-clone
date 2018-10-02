import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios-on-rails'

import ColumnAdder from './ColumnAdder';
import Columns from './Columns';

class BoardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      deleted: false,
      boardId: props.match.params.boardId
    };
  }

  componentDidMount() {
    this.fetchBoard();
  }

  fetchBoard = () => {
    axios.get(`/boards/${this.state.boardId}.json`).then((response) => {
      this.setState({
        board: response.data,
        loading: false
      })
    });
  }

  onDelete = (e) => {
    e.preventDefault();
    axios.delete(`/boards/${this.state.boardId}.json`).then((response) => {
      this.setState({ deleted: true });
    });
  }

  onAddColumn = (attrs) => {
    return axios.post(`/boards/${this.state.boardId}/columns.json`, { column: attrs }).then((response) => {
      this.fetchBoard();
    });
  }

  onDeleteColumn = (column) => {
    axios.delete(`/columns/${column.id}.json`).then((response) => {
      this.fetchBoard();
    });
  }

  renderBody() {
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      );
    } else {
      return(
        <div>
          <h1>Board: {this.state.board.name}</h1>
          <div className='clearfix'>
            <a onClick={this.onDelete} href='#' className='btn btn-danger float-right' data-confirm='Are you sure?'>Delete Board</a>
            <ColumnAdder onAdd={this.onAddColumn} />
          </div>
          <Columns
            columns={this.state.board.columns}
            onDelete={this.onDeleteColumn}
          />
        </div>
      )
    }
  }

  render() {
    if (this.state.deleted) {
      return <Redirect to='/' />;
    } else {
      return (
        <div>
          <Link to='/'>Back</Link>
          {this.renderBody()}
        </div>
      );
    }
  }
}
export default BoardPage
