import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios-on-rails'

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
    axios.get(`/boards/${this.state.boardId}.json`).then((response) => {
      console.log(response.data);
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

  renderBody() {
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      );
    } else {
      return(
        <div>
          <h1>Board: {this.state.board.name}</h1>
          <a onClick={this.onDelete} href='#' className='btn btn-danger' data-confirm='Are you sure?'>Delete Board</a>
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
