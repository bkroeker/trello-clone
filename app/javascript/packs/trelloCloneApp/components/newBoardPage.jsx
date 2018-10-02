import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios-on-rails'

import Errors from './Errors';

class NewBoardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      errors: []
    }
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  onSubmit = (e) => {
    e.preventDefault();

    axios.post('/boards.json', { name: this.refs.name.value }).then((response) => {
      this.setState({success: true});
    }).catch((error) => {
      this.setState({errors: error.response.data});
    });
  }

  render() {
    if (this.state.success) {
      return <Redirect to='/' />;
    } else {
      return (
        <div>
          <Link to='/'>Back</Link>

          <h1>New Board</h1>
          <Errors errors={this.state.errors} />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input ref='name' type="text" className="form-control" id="name" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }
  }
}
export default NewBoardPage
