import React from 'react';

export default class Errors extends React.Component {
  renderError = (error, i) => {
    return (
      <li key={i}>{error}</li>
    );
  }

  render() {
    if (this.props.errors.length > 0) {
      return (
        <div className='errors alert alert-danger' role='alert'>
          <ul>
            {this.props.errors.map(this.renderError)}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}
