import React from 'react';

export default class ColumnAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd({name: this.refs.name.value}).then((response) => {
      this.refs.name.value = '';
      this.setState({ error: false });
    }).catch((error) => {
      this.setState({ error: true });
    });
  }

  render() {
    const inputClasses = ['form-control'];
    if (this.state.error) {
      inputClasses.push('border border-danger');
    }

    return (
      <div className='card w-25 float-left'>
        <div className='card-body'>
          <form onSubmit={this.onSubmit}>
            <input ref='name' type='text' placeholder='Name' className={inputClasses.join(' ')} />
            <button className='btn btn-primary'>Add Column</button>
          </form>
        </div>
      </div>
    );
  }
}
