import React from 'react';

export default class Adder extends React.Component {
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
    inputClasses.push(this.props.inputClass);
    if (this.state.error) {
      inputClasses.push('border border-danger');
    }

    const buttonClasses = ['btn', 'btn-primary', 'float-right'];
    buttonClasses.push(this.props.buttonClass);

    return (
      <div className='adder'>
        <form onSubmit={this.onSubmit}>
          <input ref='name' type='text' placeholder='Name' className={inputClasses.join(' ')} />
          <button className={buttonClasses.join(' ')}>{this.props.label}</button>
        </form>
      </div>
    );
  }
}
