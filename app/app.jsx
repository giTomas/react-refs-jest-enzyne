import React, { PropTypes } from 'react';

const Hello = ({ fn1 }) =>
  <h1>Hello! <input type="button" onClick={fn1} value="click" /></h1>;

Hello.propTypes = {
  fn1: PropTypes.func.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = ::this.handleClick;
  }

  handleClick(e) {
    console.log(this.a.getBoundingClientRect());
    console.log(e.currentTarget.getBoundingClientRect());
  }

  render() {
    return (
      <div ref={(b) => { this.a = b; }}>
        <Hello fn1={this.handleClick} />
      </div>
    );
  }
}

export default App;
