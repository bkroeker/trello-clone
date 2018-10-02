import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios-on-rails'

class BoardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.fetchBoards();
  }

  fetchBoards = () => {
    axios.get('/boards.json').then((response) => {
      this.setState({
        boards: response.data,
        loading: false
      })
    });
  }

  renderBoard = (board) => {
    return (
      <li key={board.id}>
        <Link to={`/boards/${board.id}`}>{board.name}</Link>
      </li>
    );
  }

  renderBoards = () => {
    if (this.state.loading) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <ul>{this.state.boards.map(this.renderBoard)}</ul>
      );
    }
  }

  render() {
    return(
      <div>
        <h1>Boards</h1>
        <Link to='/boards/new' className='btn btn-primary'>Create Board</Link>
        {this.renderBoards()}
      </div>
    )
  }
}
export default BoardsPage
