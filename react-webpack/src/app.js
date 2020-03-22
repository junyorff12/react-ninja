import React, { Component } from 'react';
import Square from './square';

class App extends Component {
  render () {
    return (
      <div className='container' onClick={e => { alert('clicou....'); }}>
        {['red', 'yellow', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    );
  }
}

/* const App = React.createClass({

  render: function () {
    return (
      <div className='container'>
        <Title name='Junyor Silva' lastname='FF12' />
      </div>
    );
  }
});
 */
export default App;
