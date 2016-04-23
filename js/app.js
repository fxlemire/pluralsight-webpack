/* eslint-disable func-names,no-console,no-magic-numbers,object-shorthand,space-before-function-paren */
import React from 'react';
import ReactDom from 'react-dom';

const Timer = React.createClass({
  getInitialState() {
    return {secondsElapsed: 0};
  },

  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },

  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillMount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div>
        <h3>It's the final countdown</h3>
        Seconds Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }
});

ReactDom.render(<Timer />, document.getElementById('container'));

require('./login');
