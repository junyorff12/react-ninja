import React, { Component } from 'react';
import Square from './square';
import LikeButton from './like-button';
import SearchButton from './search-button.js';

class App extends Component {
  render () {
    return (
      // <Button>Texto do button</Button> // usando children
      <div>

        <LikeButton />
        <SearchButton />
      </div>
      /*  <div className='container' onClick={e => { alert('clicou....'); }}>
                 {['red', 'yellow', 'green'].map((square, index) => (
                   <Square key={index} color={square} />
                 ))}
               </div> */
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
